import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import Editproduct from './Editproduct'

const product = {
  id: 2,
  sku: 'FOO-001',
  name: 'Urban Sneakers',
  image: 'shoes.jpg',
  category: 'Footwear',
  price: 6200,
  stock: 32,
}

beforeEach(() => {
  vi.stubGlobal('fetch', vi.fn((url, options) =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(options?.method === 'PUT' ? product : product),
    })
  ))
  vi.spyOn(window, 'alert').mockImplementation(() => {})
})
afterEach(() => {
  vi.unstubAllGlobals()
  vi.restoreAllMocks()
})

const renderEdit = () =>
  render(
    <MemoryRouter initialEntries={['/edit/2']}>
      <Routes>
        <Route path="/edit/:id" element={<Editproduct />} />
        <Route path="/" element={<div>Home page</div>} />
      </Routes>
    </MemoryRouter>
  )

describe('Editproduct', () => {
  it('loads the product and fills the form', async () => {
    renderEdit()

    await waitFor(() =>
      expect(screen.getByPlaceholderText('Product name')).toHaveValue('Urban Sneakers')
    )
    expect(fetch).toHaveBeenCalledWith('http://localhost:3001/products/2')
    expect(screen.getByPlaceholderText('SKU')).toHaveValue('FOO-001')
    expect(screen.getByRole('combobox')).toHaveValue('Footwear')
    expect(screen.getByPlaceholderText('Price (KSh)')).toHaveValue(6200)
    expect(screen.getByPlaceholderText('Stock')).toHaveValue(32)
  })

  it('saves changes with PUT, then goes home', async () => {
    const user = userEvent.setup()
    renderEdit()

    const nameInput = screen.getByPlaceholderText('Product name')
    await waitFor(() => expect(nameInput).toHaveValue('Urban Sneakers'))

    await user.clear(nameInput)
    await user.type(nameInput, 'Trail Sneakers')
    await user.click(screen.getByRole('button', { name: 'Save Changes' }))

    await waitFor(() => {
      const putCall = fetch.mock.calls.find(([, o]) => o?.method === 'PUT')
      expect(putCall).toBeTruthy()
      expect(putCall[0]).toBe('http://localhost:3001/products/2')
      expect(JSON.parse(putCall[1].body)).toMatchObject({
        name: 'Trail Sneakers',
        price: 6200,
        stock: 32,
      })
    })

    expect(window.alert).toHaveBeenCalledWith('Product updated!')
    expect(await screen.findByText('Home page')).toBeInTheDocument()
  })

  it('has a Cancel link back home', () => {
    renderEdit()
    expect(screen.getByRole('link', { name: 'Cancel' })).toHaveAttribute('href', '/')
  })
})

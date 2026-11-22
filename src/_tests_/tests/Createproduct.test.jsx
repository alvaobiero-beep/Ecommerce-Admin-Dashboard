import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import Createproduct from './Createproduct'

beforeEach(() => {
  vi.stubGlobal('fetch', vi.fn(() =>
    Promise.resolve({ ok: true, json: () => Promise.resolve({ id: 14 }) })
  ))
  vi.spyOn(window, 'alert').mockImplementation(() => {})
})
afterEach(() => {
  vi.unstubAllGlobals()
  vi.restoreAllMocks()
})

const renderForm = () =>
  render(
    <MemoryRouter initialEntries={['/create']}>
      <Routes>
        <Route path="/create" element={<Createproduct />} />
        <Route path="/" element={<div>Home page</div>} />
      </Routes>
    </MemoryRouter>
  )

describe('Createproduct', () => {
  it('renders all form fields and the Exit link', () => {
    renderForm()
    expect(screen.getByPlaceholderText('SKU (e.g. ACC-005)')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Product name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Image URL')).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Price (KSh)')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Stock')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Exit' })).toHaveAttribute('href', '/')
  })

  it('submits a POST with numbers converted, then goes home', async () => {
    const user = userEvent.setup()
    renderForm()

    await user.type(screen.getByPlaceholderText('SKU (e.g. ACC-005)'), 'ACC-006')
    await user.type(screen.getByPlaceholderText('Product name'), 'Leather Belt')
    await user.type(screen.getByPlaceholderText('Image URL'), 'belt.jpg')
    await user.selectOptions(screen.getByRole('combobox'), 'Accessories')
    await user.type(screen.getByPlaceholderText('Price (KSh)'), '1500')
    await user.type(screen.getByPlaceholderText('Stock'), '10')
    await user.click(screen.getByRole('button', { name: 'Add Product +' }))

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1))

    const [url, options] = fetch.mock.calls[0]
    expect(url).toBe('http://localhost:3001/products')
    expect(options.method).toBe('POST')
    expect(JSON.parse(options.body)).toEqual({
      sku: 'ACC-006',
      name: 'Leather Belt',
      image: 'belt.jpg',
      category: 'Accessories',
      price: 1500,
      stock: 10,
    })

    expect(window.alert).toHaveBeenCalledWith('Product added!')
    expect(await screen.findByText('Home page')).toBeInTheDocument()
  })

  it('does not submit when required fields are empty', async () => {
    const user = userEvent.setup()
    renderForm()

    await user.click(screen.getByRole('button', { name: 'Add Product +' }))

    expect(fetch).not.toHaveBeenCalled()
  })
})

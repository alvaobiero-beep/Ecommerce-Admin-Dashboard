import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import Store from './Store'

const mockProducts = [
  {
    id: 1,
    sku: 'ACC-001',
    name: 'Classic Leather Handbag',
    image: 'bag.jpg',
    category: 'Accessories',
    price: 4500,
    stock: 18,
  },
  {
    id: 2,
    sku: 'FOO-001',
    name: 'Urban Sneakers',
    image: 'shoes.jpg',
    category: 'Footwear',
    price: 6200,
    stock: 32,
  },
  {
    id: 3,
    sku: 'BEA-001',
    name: 'Signature Perfume',
    image: 'perfume.jpg',
    category: 'Beauty',
    price: 2800,
    stock: 7,
  },
]

function renderStore() {
  return render(
    <MemoryRouter>
      <Store />
    </MemoryRouter>
  )
}

describe('Store', () => {
  beforeEach(() => {
    // fake API: returns the mock products for any fetch
    vi.stubGlobal(
      'fetch',
      vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockProducts),
        })
      )
    )
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('shows all products after loading', async () => {
    renderStore()

    expect(await screen.findByText('Classic Leather Handbag')).toBeInTheDocument()
    expect(screen.getByText('Urban Sneakers')).toBeInTheDocument()
    expect(screen.getByText('Signature Perfume')).toBeInTheDocument()
  })

  it('formats the price in KSh', async () => {
    renderStore()

    expect(await screen.findByText('KSh 4,500')).toBeInTheDocument()
  })

  it('filters products by name when typing in the search box', async () => {
    const user = userEvent.setup()
    renderStore()

    await screen.findByText('Urban Sneakers')

    await user.type(
      screen.getByPlaceholderText('Search for a product in the store'),
      'sneak'
    )

    expect(screen.getByText('Urban Sneakers')).toBeInTheDocument()
    expect(screen.queryByText('Classic Leather Handbag')).not.toBeInTheDocument()
    expect(screen.queryByText('Signature Perfume')).not.toBeInTheDocument()
  })

  it('ignores letter case and extra spaces in the search', async () => {
    const user = userEvent.setup()
    renderStore()

    await screen.findByText('Urban Sneakers')

    await user.type(
      screen.getByPlaceholderText('Search for a product in the store'),
      '  PERFUME '
    )

    expect(screen.getByText('Signature Perfume')).toBeInTheDocument()
    expect(screen.queryByText('Urban Sneakers')).not.toBeInTheDocument()
  })

  it('shows "No products found." when nothing matches', async () => {
    const user = userEvent.setup()
    renderStore()

    await screen.findByText('Urban Sneakers')

    await user.type(
      screen.getByPlaceholderText('Search for a product in the store'),
      'ghhhhhh'
    )

    expect(screen.getByText('No products found.')).toBeInTheDocument()
  })

  it('removes a product after confirming delete', async () => {
    const user = userEvent.setup()
    vi.spyOn(window, 'confirm').mockReturnValue(true)
    renderStore()

    await screen.findByText('Urban Sneakers')

    await user.click(screen.getAllByText('Delete')[1]) // Urban Sneakers row

    await waitFor(() => {
      expect(screen.queryByText('Urban Sneakers')).not.toBeInTheDocument()
    })

    expect(fetch).toHaveBeenCalledWith(
      'http://localhost:3001/products/2',
      expect.objectContaining({ method: 'DELETE' })
    )
  })

  it('keeps the product when delete is cancelled', async () => {
    const user = userEvent.setup()
    vi.spyOn(window, 'confirm').mockReturnValue(false)
    renderStore()

    await screen.findByText('Urban Sneakers')

    await user.click(screen.getAllByText('Delete')[1])

    expect(screen.getByText('Urban Sneakers')).toBeInTheDocument()
  })
})

import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import ProductDetailsPage from './ProductDetailsPage'

const products = [
  { id: 2, sku: 'FOO-001', name: 'Urban Sneakers', image: 'shoes.jpg', category: 'Footwear', price: 6200, stock: 32 },
]

const mockFetch = (ok = true) =>
  vi.stubGlobal('fetch', vi.fn(() =>
    Promise.resolve({ ok, json: () => Promise.resolve(products) })
  ))

afterEach(() => vi.unstubAllGlobals())

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/products/:id" element={<ProductDetailsPage />} />
      </Routes>
    </MemoryRouter>
  )

describe('ProductDetailsPage', () => {
  it('shows a loading message first', () => {
    mockFetch()
    renderAt('/products/2')
    expect(screen.getByText('Loading product details...')).toBeInTheDocument()
  })

  it('shows the product details', async () => {
    mockFetch()
    renderAt('/products/2')

    expect(await screen.findByRole('heading', { name: 'Urban Sneakers' })).toBeInTheDocument()
    expect(screen.getByText('FOO-001')).toBeInTheDocument()
    expect(screen.getByText('Footwear')).toBeInTheDocument()
    expect(screen.getByText(/KSh 6,200/)).toBeInTheDocument()
    expect(screen.getByText(/32 units/)).toBeInTheDocument()
    expect(screen.getByAltText('Urban Sneakers')).toHaveAttribute('src', 'shoes.jpg')
  })

  it('has a link back to products', async () => {
    mockFetch()
    renderAt('/products/2')
    expect(await screen.findByRole('link', { name: /Back to Products/ })).toHaveAttribute('href', '/products')
  })

  it('shows "Product not found" for an unknown id', async () => {
    mockFetch()
    renderAt('/products/99')
    expect(await screen.findByText('Product not found')).toBeInTheDocument()
  })

  it('shows an error when the API fails', async () => {
    mockFetch(false)
    renderAt('/products/2')
    expect(
      await screen.findByText('Error loading product: Failed to fetch products')
    ).toBeInTheDocument()
  })
})

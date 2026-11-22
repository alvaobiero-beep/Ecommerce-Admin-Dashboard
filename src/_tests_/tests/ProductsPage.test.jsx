import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import ProductsPage from './ProductsPage'

// charts are tested on their own, so stub them here
vi.mock('../components/Analytics', () => ({ default: () => <div>Analytics chart</div> }))
vi.mock('../components/Overview', () => ({ default: () => <div>Overview chart</div> }))

const products = [
  { id: 1, sku: 'ACC-001', name: 'Classic Leather Handbag', image: 'a.jpg', category: 'Accessories', price: 4500, stock: 18 },
  { id: 2, sku: 'FOO-001', name: 'Urban Sneakers', image: 'b.jpg', category: 'Footwear', price: 6200, stock: 32 },
  { id: 3, sku: 'BEA-001', name: 'Signature Perfume', image: 'c.jpg', category: 'Beauty', price: 2800, stock: 7 },
]

const mockFetch = (ok = true) =>
  vi.stubGlobal('fetch', vi.fn(() =>
    Promise.resolve({ ok, json: () => Promise.resolve(products) })
  ))

afterEach(() => vi.unstubAllGlobals())

const renderPage = () =>
  render(
    <MemoryRouter>
      <ProductsPage />
    </MemoryRouter>
  )

describe('ProductsPage', () => {
  it('shows a loading message first', () => {
    mockFetch()
    renderPage()
    expect(screen.getByText('Loading products...')).toBeInTheDocument()
  })

  it('shows an error message when the API fails', async () => {
    mockFetch(false)
    renderPage()
    expect(
      await screen.findByText('Error loading products: Failed to fetch products')
    ).toBeInTheDocument()
  })

  it('shows revenue and total stock in the summary cards', async () => {
    mockFetch()
    renderPage()
    // revenue = 4500*18 + 6200*32 + 2800*7 = 299,000
    expect(await screen.findByText('KSh 299,000')).toBeInTheDocument()
    expect(screen.getByText('57 units')).toBeInTheDocument()
  })

  it('renders the header navigation links', async () => {
    mockFetch()
    renderPage()
    await screen.findByText('ADMIN DASHBOARD')
    expect(screen.getByRole('link', { name: 'Store' })).toHaveAttribute('href', '/store')
    expect(screen.getByRole('link', { name: 'Stock-analysis' })).toHaveAttribute('href', '/overview')
    expect(screen.getByRole('link', { name: 'Prices- analysis' })).toHaveAttribute('href', '/analytics')
    expect(screen.getByRole('link', { name: 'Add Product +' })).toHaveAttribute('href', '/create')
  })

  it('filters the table by search text (name, category or SKU)', async () => {
    const user = userEvent.setup()
    mockFetch()
    renderPage()
    await screen.findByText('Urban Sneakers')

    const search = screen.getByPlaceholderText('Search by product, SKU or category...')

    await user.type(search, 'sneak')
    expect(screen.getByText('Urban Sneakers')).toBeInTheDocument()
    expect(screen.queryByText('Signature Perfume')).not.toBeInTheDocument()

    await user.clear(search)
    await user.type(search, 'bea-001')
    expect(screen.getByText('Signature Perfume')).toBeInTheDocument()
    expect(screen.queryByText('Urban Sneakers')).not.toBeInTheDocument()
  })

  it('filters the table by category', async () => {
    const user = userEvent.setup()
    mockFetch()
    renderPage()
    await screen.findByText('Urban Sneakers')

    await user.selectOptions(screen.getByRole('combobox'), 'Footwear')

    expect(screen.getByText('Urban Sneakers')).toBeInTheDocument()
    expect(screen.queryByText('Classic Leather Handbag')).not.toBeInTheDocument()
  })
})

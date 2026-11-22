import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ProductTable from './ProductTable'

const products = [
  { id: 1, sku: 'ACC-001', name: 'Classic Leather Handbag', image: 'bag.jpg', category: 'Accessories', price: 4500, stock: 18 },
  { id: 2, sku: 'FOO-001', name: 'Urban Sneakers', image: 'shoes.jpg', category: 'Footwear', price: 6200, stock: 32 },
]

const renderTable = (items) =>
  render(
    <MemoryRouter>
      <ProductTable products={items} />
    </MemoryRouter>
  )

describe('ProductTable', () => {
  it('renders the column headers', () => {
    renderTable(products)
    ;['ID', 'SKU', 'Product', 'Category', 'Price', 'Stock'].forEach((h) =>
      expect(screen.getByText(h)).toBeInTheDocument()
    )
  })

  it('renders one row per product with formatted price', () => {
    renderTable(products)
    expect(screen.getByText('Classic Leather Handbag')).toBeInTheDocument()
    expect(screen.getByText('KSh 6,200')).toBeInTheDocument()
    expect(screen.getAllByRole('row')).toHaveLength(3) // header + 2 products
  })

  it('links each product name to its details page', () => {
    renderTable(products)
    const link = screen.getByRole('link', { name: /Urban Sneakers/ })
    expect(link).toHaveAttribute('href', '/products/2')
  })

  it('shows product images with alt text', () => {
    renderTable(products)
    expect(screen.getByAltText('Urban Sneakers')).toHaveAttribute('src', 'shoes.jpg')
  })

  it('shows "No products found." for an empty list', () => {
    renderTable([])
    expect(screen.getByText('No products found.')).toBeInTheDocument()
  })
})

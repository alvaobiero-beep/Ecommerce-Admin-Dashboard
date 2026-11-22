import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

// replace every page with a label so only the routing is tested
vi.mock('./pages/ProductsPage', () => ({ default: () => <div>Products Page</div> }))
vi.mock('./pages/ProductDetailsPage', () => ({ default: () => <div>Details Page</div> }))
vi.mock('./components/Overview', () => ({ default: () => <div>Overview Page</div> }))
vi.mock('./components/Analytics', () => ({ default: () => <div>Analytics Page</div> }))
vi.mock('./components/Store', () => ({ default: () => <div>Store Page</div> }))
vi.mock('./components/Createproduct', () => ({ default: () => <div>Create Page</div> }))
vi.mock('./components/Editproduct', () => ({ default: () => <div>Edit Page</div> }))

const renderAt = (path) => {
  window.history.pushState({}, '', path)
  return render(<App />)
}

describe('App routing', () => {
  it('redirects / to /products', () => {
    renderAt('/')
    expect(screen.getByText('Products Page')).toBeInTheDocument()
    expect(window.location.pathname).toBe('/products')
  })

  it.each([
    ['/store', 'Store Page'],
    ['/overview', 'Overview Page'],
    ['/analytics', 'Analytics Page'],
    ['/create', 'Create Page'],
    ['/edit/3', 'Edit Page'],
    ['/products/3', 'Details Page'],
  ])('renders %s', (path, label) => {
    renderAt(path)
    expect(screen.getByText(label)).toBeInTheDocument()
  })
})

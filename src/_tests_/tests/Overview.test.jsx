import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import Overview from './Overview'

vi.mock('chart.js/auto', () => ({ Chart: {} }))
vi.mock('react-chartjs-2', () => ({
  Bar: ({ data }) => (
    <div data-testid="bar-chart">
      {JSON.stringify({ labels: data.labels, values: data.datasets[0].data })}
    </div>
  ),
}))

const products = [
  { id: 1, category: 'Accessories', stock: 18 },
  { id: 2, category: 'Footwear', stock: 32 },
  { id: 3, category: 'Accessories', stock: 40 },
]

beforeEach(() => {
  vi.stubGlobal('fetch', vi.fn(() =>
    Promise.resolve({ ok: true, json: () => Promise.resolve(products) })
  ))
})
afterEach(() => vi.unstubAllGlobals())

describe('Overview', () => {
  it('combines stock per category so each category appears once', async () => {
    render(<Overview />)
    await waitFor(() =>
      expect(screen.getByTestId('bar-chart')).toHaveTextContent(
        '{"labels":["Accessories","Footwear"],"values":[58,32]}'
      )
    )
  })

  it('fetches products from the API', async () => {
    render(<Overview />)
    await waitFor(() =>
      expect(fetch).toHaveBeenCalledWith('http://localhost:3001/products')
    )
  })
})

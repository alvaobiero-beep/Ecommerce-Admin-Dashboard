import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Analytics from './Analytics'

// jsdom has no canvas, so replace the chart with a simple element
vi.mock('chart.js/auto', () => ({ Chart: {} }))
vi.mock('react-chartjs-2', () => ({
  Line: ({ data }) => (
    <div data-testid="line-chart">
      {JSON.stringify({ labels: data.labels, prices: data.datasets[0].data })}
    </div>
  ),
}))

const products = [
  { id: 1, name: 'A', price: 100 },
  { id: 2, name: 'A', price: 100 }, // duplicate name
  { id: 3, name: 'B', price: 200 },
]

beforeEach(() => {
  vi.stubGlobal('fetch', vi.fn(() =>
    Promise.resolve({ ok: true, json: () => Promise.resolve(products) })
  ))
})
afterEach(() => vi.unstubAllGlobals())

const renderAnalytics = (props) =>
  render(
    <MemoryRouter>
      <Analytics {...props} />
    </MemoryRouter>
  )

describe('Analytics', () => {
  it('plots one point per unique product name', async () => {
    renderAnalytics()
    await waitFor(() =>
      expect(screen.getByTestId('line-chart')).toHaveTextContent(
        '{"labels":["A","B"],"prices":[100,200]}'
      )
    )
  })

  it('hides the Home link by default', () => {
    renderAnalytics()
    expect(screen.queryByText('Home')).not.toBeInTheDocument()
  })

  it('shows the Home link when showBack is true', () => {
    renderAnalytics({ showBack: true })
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/')
  })
})

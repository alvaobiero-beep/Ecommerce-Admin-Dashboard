import { describe, it, expect, vi, afterEach } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import useProducts from './useProducts'

const mockProducts = [{ id: 1, name: 'Urban Sneakers' }]

afterEach(() => vi.unstubAllGlobals())

describe('useProducts', () => {
  it('starts loading, then returns products', async () => {
    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve({ ok: true, json: () => Promise.resolve(mockProducts) })
    ))

    const { result } = renderHook(() => useProducts())
    expect(result.current.loading).toBe(true)

    await waitFor(() => expect(result.current.loading).toBe(false))
    expect(result.current.products).toEqual(mockProducts)
    expect(result.current.error).toBeNull()
    expect(fetch).toHaveBeenCalledWith('http://localhost:3001/products')
  })

  it('sets an error when the response is not ok', async () => {
    vi.stubGlobal('fetch', vi.fn(() => Promise.resolve({ ok: false })))

    const { result } = renderHook(() => useProducts())

    await waitFor(() => expect(result.current.loading).toBe(false))
    expect(result.current.error).toBe('Failed to fetch products')
    expect(result.current.products).toEqual([])
  })

  it('sets an error when the network fails', async () => {
    vi.stubGlobal('fetch', vi.fn(() => Promise.reject(new Error('Network down'))))

    const { result } = renderHook(() => useProducts())

    await waitFor(() => expect(result.current.error).toBe('Network down'))
    expect(result.current.loading).toBe(false)
  })
})

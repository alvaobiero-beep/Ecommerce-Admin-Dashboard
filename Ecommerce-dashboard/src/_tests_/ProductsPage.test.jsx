
import { render, screen, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProductsPage from '../pages/ProductsPage';

describe('ProductsPage', () => {
  it('displays all 12 products', () => {
    render(<ProductsPage />);

    expect(screen.getByText('Classic Leather Handbag')).toBeInTheDocument();
    expect(screen.getByText('Urban Sneakers')).toBeInTheDocument();
    expect(screen.getByText('Signature Perfume')).toBeInTheDocument();
    expect(screen.getByText('Minimalist Watch')).toBeInTheDocument();
    expect(screen.getByText('Everyday Hoodie')).toBeInTheDocument();
    expect(screen.getByText('Travel Backpack')).toBeInTheDocument();
    expect(screen.getByText('Wireless Headphones')).toBeInTheDocument();
    expect(screen.getByText('Hydrating Face Cream')).toBeInTheDocument();
    expect(screen.getByText('Classic Leather Wallet')).toBeInTheDocument();
    expect(screen.getByText('Modern Table Lamp')).toBeInTheDocument();
    expect(screen.getByText('Casual Flat Sandals')).toBeInTheDocument();
    expect(screen.getByText('Reusable Water Bottle')).toBeInTheDocument();

    const productCard = screen.getByText('Total Products').parentElement;
    expect(within(productCard).getByText('12')).toBeInTheDocument();
  });

  it('displays the correct number of categories', () => {
    render(<ProductsPage />);

    const categoriesCard = screen.getAllByText('Categories')
      .find((element) => element.tagName === 'H3')
      .parentElement;

    expect(within(categoriesCard).getByText('6')).toBeInTheDocument();
  });

  it('displays the total stock', () => {
    render(<ProductsPage />);

    const stockCard = screen.getByText('Stock Update').parentElement;

    expect(within(stockCard).getByText(/222 units/)).toBeInTheDocument();
  });

  it('displays the inventory value', () => {
    render(<ProductsPage />);

    const inventoryCard = screen.getByText('Inventory Value').parentElement;

    expect(within(inventoryCard).getByText(/687,700/)).toBeInTheDocument();
  });
});


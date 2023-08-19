import React from 'react';
import { render, screen } from '@testing-library/react';
import Product from './Product'; // Adjust the import path based on your project structure

describe('Product Component', () => {
  test('renders product cards', () => {
    render(<Product />);
    
    const productCards = screen.getAllByTestId('product-card'); // Add data-testid="product-card" to the card div
    expect(productCards.length).toBeGreaterThan(0);
  });

  test('renders filter buttons', () => {
    render(<Product />);
    
    const allButton = screen.getByText('ALL');
    const lunchButton = screen.getByText('LUNCH');
    const snackButton = screen.getByText('SNACKS');
    const breakfastButton = screen.getByText('BREAKFAST');
    
    expect(allButton).toBeInTheDocument();
    expect(lunchButton).toBeInTheDocument();
    expect(snackButton).toBeInTheDocument();
    expect(breakfastButton).toBeInTheDocument();
  });

});

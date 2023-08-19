import React from 'react';
import { render, screen } from '@testing-library/react';
import Book from './Book'; // Adjust the import path based on your project structure

describe('Book Component', () => {
  test('renders slideshow', () => {
    render(<Book />);
    
    const slideshow = screen.getByTestId('slideshow'); // Add data-testid="slideshow" to the slideshow div
    expect(slideshow).toBeInTheDocument();
  });

  test('renders booking main', () => {
    render(<Book />);
    
    const bookingMain = screen.getByTestId('booking-main'); // Add data-testid="booking-main" to the booking main div
    expect(bookingMain).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home'; // Adjust the import path based on your project structure

describe('Home Component', () => {
  test('renders welcome message', () => {
    render(<Home />);
    const welcomeMessage = screen.getByText('Welcome to');
    expect(welcomeMessage).toBeInTheDocument();
  });

  test('renders Little Lemon text', () => {
    render(<Home />);
    const littleLemonText = screen.getByText('Little Lemon');
    expect(littleLemonText).toBeInTheDocument();
  });

  test('renders lorem ipsum text', () => {
    render(<Home />);
    const loremIpsumText = screen.getByText('Lorem ipsum dolor, sit amet consectetur adipisicing elit.');
    expect(loremIpsumText).toBeInTheDocument();
  });

  test('renders reserve button', () => {
    render(<Home />);
    const reserveButton = screen.getByText('RESERVE TABLE NOW');
    expect(reserveButton).toBeInTheDocument();
  });

  test('renders 30% off message', () => {
    render(<Home />);
    const thirtyPercentOff = screen.getByText('30% off !');
    expect(thirtyPercentOff).toBeInTheDocument();
  });

  test('renders Black Friday discount message', () => {
    render(<Home />);
    const blackFridayDiscount = screen.getByText('Black Friday discount');
    expect(blackFridayDiscount).toBeInTheDocument();
  });
});

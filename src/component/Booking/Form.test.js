import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form'; // Adjust the import path based on your project structure

describe('Form Component', () => {
  test('renders form fields', () => {
    render(<Form />);
    
    const nameInput = screen.getByPlaceholderText('Enter your name');
    const phoneInput = screen.getByPlaceholderText('XXX-XXX-XXXX');
    const datePickerInput = screen.getByLabelText('Selected Date:');
    const numberOfPeople = screen.getByText('Number of People:');
    const selectTimeField = screen.getByLabelText('Select time');
    const submitButton = screen.getByText('Book table');
    
    expect(nameInput).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
    expect(datePickerInput).toBeInTheDocument();
    expect(numberOfPeople).toBeInTheDocument();
    expect(selectTimeField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('updates name field value', () => {
    render(<Form />);
    
    const nameInput = screen.getByPlaceholderText('Enter your name');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    
    expect(nameInput).toHaveValue('John Doe');
  });

  test('updates phone field value', () => {
    render(<Form />);
    
    const phoneInput = screen.getByPlaceholderText('XXX-XXX-XXXX');
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    
    expect(phoneInput).toHaveValue('1234567890');
  });

  test('updates select time value', () => {
    render(<Form />);
    
    const selectTimeField = screen.getByLabelText('Select time');
    fireEvent.change(selectTimeField, { target: { value: '14' } });
    
    expect(selectTimeField).toHaveValue('14');
  });

  test('increments number of people', () => {
    render(<Form />);
    
    const incrementButton = screen.getByText('+');
    const numberOfPeople = screen.getByText('1');
    
    fireEvent.click(incrementButton);
    expect(numberOfPeople).toHaveTextContent('2');
  });

  test('decrements number of people', () => {
    render(<Form />);
    
    const decrementButton = screen.getByText('-');
    const numberOfPeople = screen.getByText('1');
    
    fireEvent.click(decrementButton);
    expect(numberOfPeople).toHaveTextContent('1');
  });

});

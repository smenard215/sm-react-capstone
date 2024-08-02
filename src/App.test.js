// BookingForm Test

import React from 'react';
import { render, fireEvent } from '@testing-library/react'; 
import BookingForm from './Components/BookingForm';
import Main from './Components/Main';

describe('<BookingForm />', () => {
  it('submits the form correctly', () => {
    const mockSubmitForm = jest.fn(); // Create a mock submitForm function
    const { getByLabelText, getByText } = render(<BookingForm submitForm={mockSubmitForm} />);

    // Simulate input changes
    fireEvent.change(getByLabelText('Name:'), { target: { value: 'John Doe' } });
    fireEvent.change(getByLabelText('Email:'), { target: { value: 'john@example.com' } });
    fireEvent.change(getByLabelText('Phone Number:'), { target: { value: '(123) 456-7890' } });
    fireEvent.change(getByLabelText('Select a Date:'), { target: { value: '2024-08-10' } });
    fireEvent.change(getByLabelText('Select Time:'), { target: { value: '18:00' } });
    fireEvent.change(getByLabelText('Number of Guests:'), { target: { value: '4' } });
    fireEvent.change(getByLabelText('Occasion:'), { target: { value: 'Birthday' } });

    // Simulate form submission
    fireEvent.click(getByText('Confirm Your Reservation'));

    // Check if submitForm was called with the correct data
    expect(mockSubmitForm).toHaveBeenCalledWith({
      occasion: 'Birthday',
      guests: '4',
      date: '2024-08-10',
      times: '18:00',
      phoneNumber: '(123) 456-7890',
    });
  });
});

// Testing API
jest.mock('./api', () => ({
  submitAPI: jest.fn(),
}));

describe('<Main />', () => {
  it('submits the form correctly', () => {
      // Arrange
      const formData = { occasion, guests, date, times, phoneNumber };
      const { getByText } = render(<Main />);

      // Act
      fireEvent.click(getByText('Confirm Your Reservation'));

      // Assert
      expect(submitAPI).toHaveBeenCalledWith(formData);
  });
});


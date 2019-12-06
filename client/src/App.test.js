import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App loads and finds the menu', () => {
  const { getAllByTestId, getByTestId } = render(<App />);
  
  getByTestId(/menu/i)

});

test('Test if data loads', () => {
  const { getAllByTestId} = render(<App />);

  getAllByTestId(/united states/i)
})
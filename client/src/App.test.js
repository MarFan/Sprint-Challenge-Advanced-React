import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App loads', () => {
  const { getAllByTestId, getByTestId } = render(<App />);
  
  getByTestId(/menu/i)

  //getAllByTestId(/united states/i)
});

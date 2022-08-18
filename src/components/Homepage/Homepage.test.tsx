import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';

test('Renders Homepage', () => {
  render(<App />);
  const pageHeading = screen.getByTestId('homepage-heading')
  const pageDescription = screen.getByTestId('homepage-description')
  expect(pageHeading).toBeInTheDocument()
  expect(pageHeading).toHaveTextContent('Homepage')
  expect(pageDescription).toBeInTheDocument()
  expect(pageDescription).toHaveTextContent('Homepage content goes here')
});

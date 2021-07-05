import { render, screen } from '@testing-library/react';
import App from './App';

import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';
jest.mock('bulma-carousel/dist/js/bulma-carousel.min.js', () => ({
  attach: jest.fn()
}));

test('renders title', () => {
  render(<App />);
  const title = screen.getByText(/Instituto de Computação/i);
  expect(title).toBeInTheDocument();
});

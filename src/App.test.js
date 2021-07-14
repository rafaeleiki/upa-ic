import { render, screen } from '@testing-library/react'

jest.mock('bulma-carousel/dist/js/bulma-carousel.min.js', () => ({
  __esModule: true,
  default: {
    attach: () => [],
  },
}))

import App from './App'

test('renders title', () => {
  render(<App />)
  const title = screen.getByText(/Instituto de Computação/i)
  expect(title).toBeInTheDocument()
})

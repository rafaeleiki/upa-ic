import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import App from './App'

jest.mock('bulma-carousel/dist/js/bulma-carousel.min.js', () => ({
  __esModule: true,
  default: {
    attach: () => [],
  },
}))

test('renders app', () => {
  render(<App />, { wrapper: MemoryRouter })
})

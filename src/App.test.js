import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import App from './App'

import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js'
jest.mock('bulma-carousel/dist/js/bulma-carousel.min.js', () => ({
  attach: jest.fn(),
}))

test('renders app', () => {
  render(<App />, { wrapper: MemoryRouter })
})

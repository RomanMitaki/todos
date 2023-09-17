import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from './Button'

describe('Button', () => {
  test('should render', () => {
    render(<Button>TEXT</Button>)
    expect(screen.getByText('TEXT')).toBeInTheDocument()
  })

  test('should have theme class', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEXT</Button>)
    expect(screen.getByText('TEXT')).toHaveClass('clear')
    screen.debug()
  })
})

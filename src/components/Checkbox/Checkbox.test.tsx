import { render, screen } from '@testing-library/react'
import Checkbox from './Checkbox'
import userEvent from '@testing-library/user-event'

describe('Checkbox', () => {
  const mockHandleChecked = jest.fn()
  const mockIsChecked = false

  test('should handle click correctly', async () => {
    render(<Checkbox isChecked={mockIsChecked} handleChecked={mockHandleChecked}/>)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
    const user = userEvent.setup()
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    await user.click(screen.getByTestId('Checkbox'))
    expect(mockHandleChecked.mock.calls.length).toBe(1)
  })
})

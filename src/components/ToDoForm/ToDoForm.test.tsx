import { render, screen } from '@testing-library/react'
import ToDoForm from './ToDoForm'
import userEvent from '@testing-library/user-event'

describe('ToDoForm', () => {
  const mockOnSubmit = jest.fn()

  test('should render form', () => {
    render(<ToDoForm onSubmit={mockOnSubmit}/>)
    expect(screen.getByTestId('ToDoForm')).toBeInTheDocument()
  })

  test('should render text', async () => {
    render(<ToDoForm onSubmit={mockOnSubmit}/>)
    const input: HTMLInputElement = screen.getByTestId('ToDoForm__input')
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    await userEvent.type(input, 'Add todo')
    expect(input.value).toBe('Add todo')
    screen.debug()
  })

  test('should create todo', async () => {
    render(<ToDoForm onSubmit={mockOnSubmit}/>)
    const input: HTMLInputElement = screen.getByTestId('ToDoForm__input')
    const button = screen.getByTestId('ToDoForm__btn')
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    await userEvent.type(input, 'Test todo')
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    await userEvent.click(button)
    expect(mockOnSubmit.mock.calls.length).toBe(1)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(mockOnSubmit.mock.calls[0][0].text).toBe('Test todo')
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(mockOnSubmit.mock.calls[0][0].isCompleted).toBeFalsy()
    screen.debug()
  })
})

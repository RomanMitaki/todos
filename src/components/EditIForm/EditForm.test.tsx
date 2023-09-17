import { render, screen, waitFor } from '@testing-library/react'
import EditForm from './EditForm'
import userEvent from '@testing-library/user-event'
import { type IToDo } from '../../types/types'

describe('Editform', () => {
  const mockOnSubmit = jest.fn()
  const mockTodo: IToDo = { id: '1', isCompleted: false, text: 'initial value' }
  const mockIsEdit = jest.fn()

  test('should render form', () => {
    render(<EditForm onSubmit={mockOnSubmit} todo={mockTodo} isEdit={mockIsEdit}/>)
    expect(screen.getByTestId('EditForm')).toBeInTheDocument()
  })

  test('should update text', async () => {
    render(<EditForm onSubmit={mockOnSubmit} todo={mockTodo} isEdit={mockIsEdit}/>)
    const input: HTMLInputElement = screen.getByTestId('EditForm__input')
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    await userEvent.type(input, ' + add value')
    expect(input.value).toBe('initial value + add value')
    screen.debug()
  })

  test('should update todo', async () => {
    render(<EditForm onSubmit={mockOnSubmit} todo={mockTodo} isEdit={mockIsEdit}/>)
    const input: HTMLInputElement = screen.getByTestId('EditForm__input')
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    await userEvent.type(input, ' + add value{enter}')
    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith({
        id: '1',
        text: 'initial value + add value',
        isCompleted: false
      })
    })
    screen.debug()
  })
})

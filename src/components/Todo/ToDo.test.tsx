import { render, screen } from '@testing-library/react'
import ToDo from './ToDo'
import userEvent from '@testing-library/user-event'
import { type IToDo, type IToDos } from '../../types/types'

describe('ToDo', () => {
  const mockTodoCompleted: IToDo = { id: '1', isCompleted: true, text: 'initial value' }
  const mockTodoActive: IToDo = { id: '2', isCompleted: false, text: 'initial value' }
  const mockTodos: IToDos = [mockTodoActive, mockTodoCompleted]
  const mockDeleteTodo = jest.fn()
  const mockUpdateTodo = jest.fn()
  const mockSetTodos = jest.fn()

  test('should render todo', () => {
    render(<ToDo todo={mockTodoActive} todos={mockTodos} setTodos={mockSetTodos} deleteTodo={mockDeleteTodo} updateTodo={mockUpdateTodo}/>)
    expect(screen.getByTestId('ToDo')).toBeInTheDocument()
  })

  test('should have checked-status - true', () => {
    render(<ToDo todo={mockTodoCompleted} todos={mockTodos} setTodos={mockSetTodos} deleteTodo={mockDeleteTodo} updateTodo={mockUpdateTodo}/>)
    expect(screen.getByRole<HTMLInputElement>('checkbox').checked).toBeTruthy()
  })

  test('should have checked-status - false', () => {
    render(<ToDo todo={mockTodoActive} todos={mockTodos} setTodos={mockSetTodos} deleteTodo={mockDeleteTodo} updateTodo={mockUpdateTodo}/>)
    expect(screen.getByRole<HTMLInputElement>('checkbox').checked).toBeFalsy()
  })

  test('should have class text__checked', () => {
    render(<ToDo todo={mockTodoCompleted} todos={mockTodos} setTodos={mockSetTodos} deleteTodo={mockDeleteTodo} updateTodo={mockUpdateTodo}/>)
    expect(screen.getByTestId('ToDo__text')).toHaveClass('text__checked')
  })

  test('should calls mockDeleteTodo', async () => {
    render(<ToDo todo={mockTodoCompleted} todos={mockTodos} setTodos={mockSetTodos} deleteTodo={mockDeleteTodo} updateTodo={mockUpdateTodo}/>)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    await userEvent.click(screen.getByTestId('ToDo__deleteBtn'))
    expect(mockDeleteTodo.mock.calls.length).toBe(1)
  })
})

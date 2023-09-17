import { render, screen } from '@testing-library/react'
import ToDoList from './ToDoList'
import userEvent from '@testing-library/user-event'
describe('ToDoList', () => {
  test('should render page', () => {
    render(<ToDoList />)
    expect(screen.getByTestId('ToDoList')).toBeInTheDocument()
  })

  test('should add todo', async () => {
    render(<ToDoList />)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    await userEvent.type(screen.getByTestId('ToDoForm__input'), '1st element')
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    await userEvent.click(screen.getByTestId<HTMLInputElement>('ToDoForm__btn'))
    expect(screen.getByText('1st element')).toBeInTheDocument()
  })

  test('should marks added todo as completed', async () => {
    render(<ToDoList />)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    await userEvent.click(screen.getByRole('checkbox'))
    expect(screen.getByText('1st element')).toHaveClass('text__checked')
    screen.debug()
  })

  test('should delete added todo', async () => {
    render(<ToDoList />)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    await userEvent.click(screen.getByTestId('ToDo__deleteBtn'))
    expect(screen.queryByText('1st element')).not.toBeInTheDocument()
  })

  test('should render only completed todos after pressing Completed-btn', async () => {
    render(<ToDoList />)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    await userEvent.type(screen.getByTestId('ToDoForm__input'), '2nd element')
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    await userEvent.click(screen.getByTestId<HTMLInputElement>('ToDoForm__btn'))
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    await userEvent.type(screen.getByTestId('ToDoForm__input'), '3rd element')
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    await userEvent.click(screen.getByTestId<HTMLInputElement>('ToDoForm__btn'))
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    await userEvent.click(screen.getAllByRole('checkbox')[0])
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    await userEvent.click(screen.getByText('Completed'))
    expect(screen.queryByText('2nd element')).not.toBeInTheDocument()
    expect(screen.getByText('3rd element')).toBeInTheDocument()
  })

  test('should clear completed todos', async () => {
    render(<ToDoList />)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    await userEvent.click(screen.getByText('Clear completed'))
    expect(screen.queryByText('3rd element')).not.toBeInTheDocument()
  })

  test('should render active todos', async () => {
    render(<ToDoList />)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    await userEvent.click(screen.getByText('Active'))
    expect(screen.getByText('2nd element')).toBeInTheDocument()
  })

  test('should render all todos', async () => {
    render(<ToDoList />)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    await userEvent.click(screen.getByText('All'))
    expect(screen.getByText('2nd element')).toBeInTheDocument()
    expect(screen.queryByText('3rd element')).not.toBeInTheDocument()
  })
})

export interface IToDo {
  id: string
  text: string
  isCompleted: boolean
}

export interface IToDos extends Array<IToDo> {}

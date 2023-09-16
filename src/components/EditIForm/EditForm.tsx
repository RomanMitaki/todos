import React, { type ChangeEvent, type Dispatch, type FormEvent, type SetStateAction, useEffect, useRef, useState } from 'react'

interface EditFormProps {
  className?: string
  text: string
  id: string
  onSubmit: (id: string, text: string) => void
  isEdit: Dispatch<SetStateAction<boolean>>
}

const EditForm = (props: EditFormProps) => {
  const { text, id, onSubmit, isEdit } = props
  const [input, setInput] = useState<string>(text)

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  })
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(input, id)
    isEdit((prev) => !prev)
    setInput('')
  }

  return (
      <form onSubmit={handleSubmit}>
          <input onChange={handleChange}
                 ref={inputRef}
                 value={input}
                 name='text'
          />
      </form>
  )
}

export default EditForm

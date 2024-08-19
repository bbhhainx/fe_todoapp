'use client'
import { ITodo } from '@/interface'
import { IHomeLayoutContext } from '@/interface/context'
import { createContext, useContext, useState } from 'react'

// khởi tạo giá trị mặc định cho context
const homeLayoutContextDefaultValues: IHomeLayoutContext = {
  todos: [],
  setTodos: () => {},
  todo: {
    title: '',
    description: '',
    status: 'PENDING',
  },
  setTodo: () => {},
  todo_index: -1,
  setTodoIndex: () => {},
  is_call_api: false,
  setIsCallApi: () => {},
}

// tạo context
const HomeLayoutContext = createContext<IHomeLayoutContext>(
  homeLayoutContextDefaultValues
)

// tạo hook
export function useHomeLayout() {
  return useContext(HomeLayoutContext)
}

type Props = {
  children: React.ReactNode
}

// tạo provider
export function HomeLayoutProvider({ children }: Props) {
  const [todos, setTodos] = useState<ITodo[]>([])

  const [todo, setTodo] = useState<ITodo>({
    title: '',
    description: '',
    status: 'PENDING',
  })

  const [todo_index, setTodoIndex] = useState<number>(-1)

  const [is_call_api, setIsCallApi] = useState<boolean>(false)

  const value = {
    todos,
    setTodos,
    todo,
    setTodo,
    todo_index,
    setTodoIndex,
    is_call_api,
    setIsCallApi,
  }

  return (
    <>
      <HomeLayoutContext.Provider value={value}>
        {children}
      </HomeLayoutContext.Provider>
    </>
  )
}

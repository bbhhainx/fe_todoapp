'use client'
import { ITodo } from '@/interface'
import { IHomeLayoutContext } from '@/interface/context'
import { createContext, useContext, useState } from 'react'

// khởi tạo giá trị mặc định cho context
const homeLayoutContextDefaultValues: IHomeLayoutContext = {
  todos: [],
  setTodos: () => {},
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

  const value = {
    todos,
    setTodos,
  }

  return (
    <>
      <HomeLayoutContext.Provider value={value}>
        {children}
      </HomeLayoutContext.Provider>
    </>
  )
}

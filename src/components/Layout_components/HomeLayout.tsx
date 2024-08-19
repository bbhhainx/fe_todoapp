'use client'

import LeftBar from '@/components/Layout_components/LeftBar'
import Tags from '@/components/Layout_components/Tags'
import ListTodo from '@/components/Layout_components/ListTodo'
import CreateEditForm from '@/components/Layout_components/CreateEditForm'

import { ICategory, ITodo } from '@/interface'
import { useHomeLayout } from '@/context/HomeLayoutContext'
import { useEffect } from 'react'
import { removeCache } from '@/actions'

interface IProps {
  todosAPI: ITodo[]
  categoriesAPI: ICategory[]
}

function HomeLayout(props: IProps) {
  const { todosAPI, categoriesAPI } = props
  const { setTodos, is_call_api } = useHomeLayout()

  // lưu state danh sách todo từ api trả về
  useEffect(() => {
    setTodos(todosAPI)    
  }, [todosAPI])

  return (
    <main className="w-vw h-dvh flex">
      <LeftBar />
      <Tags categories={categoriesAPI} />
      <ListTodo />
      <CreateEditForm />
    </main>
  )
}

export default HomeLayout

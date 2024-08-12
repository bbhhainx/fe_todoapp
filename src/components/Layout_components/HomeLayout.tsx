'use client'
import LeftBar from '@/components/Layout_components/LeftBar'
import Tags from '@/components/Layout_components/Tags'
import ListTodo from '@/components/Layout_components/ListTodo'
import CreateEditForm from '@/components/Layout_components/CreateEditForm'
import { ICategory, ITodo } from '@/interface'

interface IProps {
  todos: ITodo[]
  categories: ICategory[] 
}

function HomeLayout(props:IProps) {
  const {todos, categories} = props
  return (
    <main className="w-vw h-dvh flex">
      <LeftBar />
      <Tags categories={categories}/>
      <ListTodo todos={todos} />
      <CreateEditForm />
    </main>
  )
}

export default HomeLayout

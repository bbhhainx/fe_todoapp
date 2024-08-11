'use client'
import LeftBar from '@/components/Layout_components/LeftBar'
import Tags from '@/components/Layout_components/Tags'
import ListTodo from '@/components/Layout_components/ListTodo'
import CreateEditForm from '@/components/Layout_components/CreateEditForm'

function HomeLayout() {
  return (
    <main className="w-vw h-dvh flex">
      <LeftBar />
      <Tags />
      <ListTodo />
      <CreateEditForm />
    </main>
  )
}

export default HomeLayout

'use client'
import { useState } from 'react'

import { useHomeLayout } from '@/context/HomeLayoutContext'
import { createTodo } from '@/api/todo'
import { removeCache } from '@/actions'
import { ITodo } from '@/interface'

function CreateEditForm() {
  // lấy todo từ context ra
  const { todos, setTodos } = useHomeLayout()

  // state cho các input
  const [todo, setTodo] = useState<ITodo>({
    title: '',
    description: '',
    status: 'PENDING',
  })

  const handleCreateTodo = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault()
      if (!todo.title) return

      // call api tạo todo
      const res = await createTodo({ body: todo })

      // loại bỏ cache bên server
      removeCache()

      // lưu todo mới tạo vào mảng
      setTodos([...todos, res])

      // reset các giá trị của input
      setTodo({
        title: '',
        description: '',
        status: 'PENDING',
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className="w-96 flex-shrink-0 p-4 text-sm">
      <form className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="">Tiêu đề</label>
          <input
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            type="text"
            className="border border-blue-100 focus:outline-none rounded-md py-1 px-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Mô tả chi tiết</label>
          <textarea
            value={todo.description}
            onChange={(e) => setTodo({ ...todo, description: e.target.value })}
            className="border border-blue-100 focus:outline-none rounded-md py-1 px-2"
          />
        </div>
        <button
          onClick={handleCreateTodo}
          className="bg-blue-400 text-white rounded-md p-2 w-full hover:bg-blue-700"
        >
          Tạo mới
        </button>
      </form>
    </section>
  )
}

export default CreateEditForm

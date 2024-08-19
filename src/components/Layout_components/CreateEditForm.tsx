'use client'

import { useHomeLayout } from '@/context/HomeLayoutContext'
import { createTodo, updateTodo } from '@/api/todo'
import { removeCache } from '@/actions'

function CreateEditForm() {
  // lấy data từ context ra
  const { todos, setTodos, todo, setTodo, todo_index, setIsCallApi } = useHomeLayout()

  /** nội dung của nút submit */
  const textOfButton = todo_index === -1 ? 'Tạo mới' : 'Cập nhật'

  /** hàm tạo mới hoặc sửa todo */
  const handleCreateOrEditTodo = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault()

      // nếu tiêu đề rỗng thì không tiếp tục nữa
      if (!todo.title) return

      // nếu bằng -1 là tạo mới còn không là tạo mới
      if(todo_index === -1) {
        // call api tạo todo
        const res = await createTodo({ body: todo })
        // lưu todo mới tạo vào mảng
        setTodos([...todos, res])
      }else{
        // call api sửa todo
        const res = await updateTodo({ body: todo, id: todo.todo_id })        

        // lưu todo được sửa được mảng
        setTodos([
          ...todos.slice(0, todo_index),
          res,
          ...todos.slice(todo_index + 1),
        ])
      }

      removeCache()

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
          onClick={handleCreateOrEditTodo}
          className="bg-blue-400 text-white rounded-md p-2 w-full hover:bg-blue-700"
        >
          {textOfButton}
        </button>
      </form>
    </section>
  )
}

export default CreateEditForm

import { removeCache } from '@/actions'
import { deleteTodo } from '@/api/todo'
import { useHomeLayout } from '@/context/HomeLayoutContext'
import { ITodo } from '@/interface'
import Image from 'next/image'

function ListTodo() {
  // lấy todo từ context ra
  const { todos, setTodos ,setTodo, setTodoIndex, setIsCallApi } = useHomeLayout()

  /** hàm xử lý khi chọn todo */
  const handleChooseTodo = (todo: ITodo, index: number) => () => {
    setTodo(todo)
    setTodoIndex(index)
  }

  /** hàm xóa todo */
  const handleDeleteTodo = async (e: React.MouseEvent<HTMLElement>, todo: ITodo, index: number) => {
    try {
      e.stopPropagation()
      await deleteTodo({ id: todo.todo_id })
      setTodos([...todos.slice(0, index), ...todos.slice(index + 1)])

      // remove cache
      removeCache()
    } catch (error) {
      console.log(error);
    }  
  }
  return (
    <section className="flex-grow flex flex-col border-r p-4 text-sm gap-4">
      <div className="flex gap-4">
        <select className="appearance-none px-2 py-1 rounded-md border">
          <option value="">All</option>
          <option value="">Active</option>
          <option value="">Completed</option>
        </select>
        <input
          type="date"
          className="appearance-none px-2 py-1 rounded-md border"
        />
      </div>
      <div>
        <ul className="flex flex-col gap-1">
          {!!todos.length &&
            todos?.map((todo, index) => {
              return (
                <li
                  key={todo.todo_id}
                  className="cursor-pointer flex gap-1 items-center p-2 hover:bg-blue-100 rounded-md relative bg-slate-100"
                  onClick={handleChooseTodo(todo, index)}
                >
                  <input type="checkbox" />
                  <p>{todo.title}</p>
                  <Image
                    onClick={(e)=>handleDeleteTodo(e,todo, index)}
                    className='absolute right-2'
                    src="/icons/delete.svg"
                    alt="delete"
                    width={20}
                    height={20}
                  ></Image>
                </li>
              )
            })}
        </ul>
      </div>
    </section>
  )
}

export default ListTodo

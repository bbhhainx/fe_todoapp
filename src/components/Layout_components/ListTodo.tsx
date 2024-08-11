function ListTodo() {
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
        <ul className="flex flex-col">
          <li className="cursor-pointer flex gap-1 items-center p-2 hover:bg-blue-100 rounded-md">
            <input type="checkbox" />
            <p>Tìm hiểu về Next</p>
          </li>
          <li className="cursor-pointer flex gap-1 items-center p-2 hover:bg-blue-100 rounded-md">
            <input type="checkbox" />
            <p>Tìm hiểu về Vue</p>
          </li>
          <li className="cursor-pointer flex gap-1 items-center p-2 hover:bg-blue-100 rounded-md">
            <input type="checkbox" />
            <p>Tìm hiểu về Nest</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default ListTodo

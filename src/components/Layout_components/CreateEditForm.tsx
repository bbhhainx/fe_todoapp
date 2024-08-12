function CreateEditForm() {
  return (
    <section className="w-96 flex-shrink-0 p-4 text-sm">
      <form className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="">Tiêu đề</label>
          <input
            type="text"
            className="border border-blue-100 focus:outline-none rounded-md py-1 px-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Mô tả chi tiết</label>
          <textarea className="border border-blue-100 focus:outline-none rounded-md py-1 px-2" />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault()
          }}
          className="bg-blue-400 text-white rounded-md p-2 w-full hover:bg-blue-700"
        >
          Tạo mới
        </button>
      </form>
    </section>
  )
}

export default CreateEditForm

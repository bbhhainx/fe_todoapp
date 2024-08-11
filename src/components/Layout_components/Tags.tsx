import Image from 'next/image'

function Tags() {
  return (
    <section className="text-sm p-4 w-60 border-r">
      <div className="w-full flex justify-between">
        <h1 className="text-xs font-medium text-slate-500">Tags</h1>
        <p className='cursor-pointer'>+</p>
      </div>
      <ul className="w-full flex flex-col gap-1 mt-4">
        <li className="flex gap-1.5 justify-between">
          <div className="flex gap-1.5">
            <Image
              src="/icons/tag.svg"
              alt="tag"
              width={14}
              height={14}
            ></Image>
            <p>Tất cả</p>
          </div>
          <p>0</p>
        </li>
        <li className="flex gap-1.5 justify-between">
          <div className="flex gap-1.5">
            <Image
              src="/icons/tag.svg"
              alt="tag"
              width={14}
              height={14}
            ></Image>
            <p>React</p>
          </div>
          <p>0</p>
        </li>
        <li className="flex gap-1.5 justify-between">
          <div className="flex gap-1.5">
            <Image
              src="/icons/tag.svg"
              alt="tag"
              width={14}
              height={14}
            ></Image>
            <p>Vue</p>
          </div>
          <p>0</p>
        </li>
        <li className="flex gap-1.5 justify-between">
          <div className="flex gap-1.5">
            <Image
              src="/icons/tag.svg"
              alt="tag"
              width={14}
              height={14}
            ></Image>
            <p>Nest</p>
          </div>
          <p>0</p>
        </li>
      </ul>
    </section>
  )
}

export default Tags

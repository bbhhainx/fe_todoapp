import { ICategory } from '@/interface'
import Image from 'next/image'

interface IProps {
  categories: ICategory[]
}

function Tags(props: IProps) {
  const { categories } = props  
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
        {
          !!categories.length && categories?.map((category) => {
            return (
              <li className="flex gap-1.5 justify-between" key={category.category_id}>
                <div className="flex gap-1.5">
                  <Image
                    src="/icons/tag.svg"
                    alt="tag"
                    width={14}
                    height={14}
                  ></Image>
                  <p>{category?.category_name || ''}</p>
                </div>
                <p>0</p>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}

export default Tags

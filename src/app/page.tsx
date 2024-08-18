import HomeLayout from '@/components/Layout_components/HomeLayout'
import { getCategory, getTodo } from '@/api/todo'
import { ICategory, ITodo } from '@/interface'
import { HomeLayoutProvider } from '@/context/HomeLayoutContext'

interface IProps {
  todosAPI: ITodo[]
  categoriesAPI: ICategory[]
}
/** hàm call api lấy dữ liệu */
async function getData(): Promise<IProps> {
  try {
    let res = await Promise.all([getTodo({}), getCategory({})])
    let [todosAPI, categoriesAPI] = res
    return {
      todosAPI,
      categoriesAPI,
    }
  } catch (error) {
    console.log(error)
    return {
      todosAPI: [],
      categoriesAPI: [],
    }
  }
}

export default async function Home() {
  let res = await getData()
  let { todosAPI, categoriesAPI } = res
  return (
    <HomeLayoutProvider>
      <HomeLayout
        todosAPI={todosAPI}
        categoriesAPI={categoriesAPI}
      />
    </HomeLayoutProvider>
  )
}

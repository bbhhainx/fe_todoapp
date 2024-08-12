import HomeLayout from '@/components/Layout_components/HomeLayout'
import { getCategory, getTodo } from '@/api/todo'
import { ICategory, ITodo } from '@/interface'

interface IProps {
  todos: ITodo[]
  categories: ICategory[]
}
async function getData(): Promise<IProps> {
  try {
    let res = await Promise.all([getTodo({}), getCategory({})])
    let [todos, categories] = res
    return {
      todos: todos,
      categories : categories
    }
  } catch (error) {
    console.log(error)
    return {
      todos: [],
      categories: []
    } 
  }
}

export default async function Home() {
  let res = await getData()
  let {todos, categories} = res
  return <HomeLayout todos={todos} categories={categories}/>
}

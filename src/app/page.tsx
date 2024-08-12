import HomeLayout from '@/components/Layout_components/HomeLayout'
import { getCategory, getTodo } from '@/api/todo'

export default async function Home() {
  let res = await Promise.all([getTodo({}), getCategory({})])
  let [todos, categories] = res
    return <HomeLayout todos={todos} categories={categories}/>
}

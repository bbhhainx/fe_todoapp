import { ITodo } from "@/interface";

export interface IHomeLayoutContext {
    /** danh sách todo */
    todos: ITodo[],

    /** cập nhật danh sách todo */
    setTodos: Function

    /** giá trị của todo hiện tại đang tạo mới hoặc đang cập nhật */
    todo: ITodo,

    /** cập nhật giá trị todo hiện tại */
    setTodo: Function,

    /** index của todo cần sửa */
    todo_index: number,

    /** cập nhật giá trị index của todo cần sửa */
    setTodoIndex: Function

    /** có call lại api không */
    is_call_api: boolean,

    /** cập nhật giá trị call api */
    setIsCallApi: Function
}
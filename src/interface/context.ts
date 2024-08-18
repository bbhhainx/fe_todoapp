import { ITodo } from "@/interface";
import { Dispatch, SetStateAction } from "react";

export interface IHomeLayoutContext {
    /** danh sách todo */
    todos: ITodo[],

    /** cập nhật danh sách todo */
    setTodos: Function
}
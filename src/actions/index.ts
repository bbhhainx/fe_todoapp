'use server'

import { createTodo } from "@/api/todo"

import { ITodo } from "@/interface"
import { revalidatePath } from "next/cache"

export async function removeCache() {
    revalidatePath('/')
}
export interface ITodo {
    todo_id: string,
    title: string,
    user_id: string,
    description: string,
    status: 'PENDING'|'COMPLETED',
    created_at: string,
    update_at: string
  }
/** kiểu dữ liệu của 1 todo */
export interface ITodo {
  /** id của todo */
  todo_id?: string

  /** tiêu đề */
  title?: string

  /** id của người tạo */
  user_id?: string

  /** mô tả chi tiết */
  description?: string

  /** trạng thái của todo */
  status?: 'PENDING' | 'COMPLETED'

  /** thời gian tạo */
  created_at?: string
  
  /** thời gian cập nhật */
  update_at?: string
}

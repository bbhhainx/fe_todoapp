import { IParamsResquestAPI } from '@/interface'
import { token } from './env'
/** hàm gọi api chung */
async function request(params: IParamsResquestAPI) {
  try {
    let { body, headers, method, end_point } = params
    let res = await fetch('http://localhost:5000' + end_point, {
      method: method || 'GET',
      body: JSON.stringify(body),
      headers: {
        Authorization: `Bearer ${token}`,
        ...headers,
      },
    })
    return res.json()
  } catch (error) {
    throw error
  }
}

/** lấy danh sách todo */
export async function getTodo(params: any) {
  try {
    return request({
      end_point: '/todo',
      method: 'GET',
      ...params,
    })
  } catch (error) {
    throw error
  }
}

/** lấy danh sách danh mục */
export async function getCategory(params: any) {
  try {
    return request({
      end_point: '/category',
      method: 'GET',
      ...params,
    })
  } catch (error) {
    throw error
  }
}   

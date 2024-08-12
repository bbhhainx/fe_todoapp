/** đối số truyền vào 1 hàm gọi api */
export interface IParamsResquestAPI{
    /** tham số body */
    body ?: any,
    /** tham số header*/
    headers ?: any
    /** phương thức */
    method : string
    /** đuôi api */
    end_point : string
}
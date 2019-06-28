import request from '@/utils/ajax'

export const getCategorys = (params = {}) => {
  return request({
    url: '/category',
    method: 'get',
    params
  })
}

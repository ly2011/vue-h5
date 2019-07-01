import request from '@/utils/ajax'

export const getGoodDetail = (params = {}) => {
  return request({
    url: '/details',
    method: 'get',
    params
  })
}

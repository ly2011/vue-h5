import request from '@/utils/ajax'

export const getArticles = (params = {}) => {
  return request({
    url: 'topics',
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    params
  })
}

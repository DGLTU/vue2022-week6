import axios from 'axios'
export const api = (method, api, data = null) => {
  const config = {
    method: method,
    url: api,
    data: { data },
    'Content-Type': 'application/json',
    baseURL: 'https://vue3-course-api.hexschool.io/v2/'
  }
  return axios(config)
}

import axios from 'axios'

axios.headers = {'Content-Type': 'application/json; charset=utf-8'}

export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params
    })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export function post (url, data ={}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}

import axios from 'axios'

const http = axios.get({
  baseURL: proccess.env.REACT_APP_API_URL
})

const getLIst = () => {
  Promise.response(data => {
    console.log(data)
  }) 
}

export default {
  getList,
}
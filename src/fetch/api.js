//引入axios
import axios from 'axios'
import qs from 'qs'
import auth from '@/util/auth';

axios.defaults.timeout = 4000
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://www.geneme.com.cn'

axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = toData(config.data)
  }
  return config
})
// axios.interceptors.response.use((config) => {
  // console.log(config.data.status)
  // if(config.data.status == 316){
  //   auth.removeUserInfo();
  //   location.reload()
  // }
// })

export function post (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        if(response.data.status.code == 316){
          auth.removeUserInfo();
          location.reload()
          reutrn;
        }
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function get (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params})
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

function toData(json) {
  var data = JSON.stringify(json);
  data = aesEncrypt(data);
  return "data=" + data;
}

const API = {
  detectionGoods(params){
    return post('/detectionGoods!request.action',params)
  },
  userInfo(params){
    return post('/userInfo!request.action',params)
  },
  communitys(params){
    return post('/communitys!request.action',params)
  },
  posts(params){
    return post('/posts!request.action',params)
  },
  area(params){
    return post('/area!request.action',params)
  },
  userSample(params){
    return post('/userSample!request.action',params)
  },
  userOrder(params){
    return post('/userOrder!request.action',params)
  },
  comments(params){
    return post('/comments!request.action',params)
  },
  appUserWechatLogin(params){
    return post('/pay!appUserWechatLogin.action',params)
  }
}

export default API;

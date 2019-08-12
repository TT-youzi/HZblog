import axios from 'axios'

let httpInstance = axios.create()

// httpInstance.defaults.baseURL = 'http://172.20.10.2:3001'//iphone热点
// httpInstance.defaults.baseURL = 'http://172.30.10.143:3001' //公司ip
//httpInstance.defaults.baseURL = 'http://39.97.114.146:3001' //服务器地址
// httpInstance.defaults.baseURL = 'http://192.168.1.109:3001' //软件园5号楼宿舍

httpInstance.defaults.timeout = 5000
//POST 请求
httpInstance.formurl = (url, data, config) => {
  return httpInstance.post(url, data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    ...config
  })
};
//GET 请求
httpInstance.formurl = (url, data, config) => {
  return httpInstance.get(url, data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    ...config
  })
};

//  request拦截器
httpInstance.interceptors.request.use(
  config => {
    //这里写拦截后你需要的操作
    //例如：
    // if (store.getters.token) {
    //   config.headers['Authoriztion'] = store.getters.token; //让每个请求都携带token
    // }
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    return config
  },
  error => {
    console.log('err' + error) //only for debug ～～～
    return Promise.reject(error)
  }
)
//  reponse拦截器
httpInstance.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response)
    }
  },
  error => {
    return Promise.reject(error)
  }
)
export default httpInstance

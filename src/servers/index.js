import axios from 'axios';

var baseURL
if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://39.108.12.45:9531/api';
} else {
    baseURL = 'http://39.108.12.45:9531/api';
    // baseURL = 'https://w.gpstoken.io/api';//正式服务器
}

const xhr = axios.create({
  baseURL,
  timeout: 10000,
});

// post请求,needHeader参数用于判断是否需要认证
const postData = (url, data, needHeader) => {
  let headers = {};
  return new Promise((resolve, reject) => {
    xhr({ url, data, headers, method: 'post' })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => reject(err))
  })
}

// get请求,needHeader参数用于判断是否需要认证
const getData = (url, params, needHeader) => {
  let headers = {};
  return new Promise((resolve, reject) => {
    xhr({ url, params, headers })
      .then(res => resolve(res.data))
      .catch(err => reject(err))
  })
}

// 获取配置
const getConfig = (reqData) => {
  const url = '/common/config';
  const data = reqData;
  return getData(url, data);
}



export {
  getConfig,
}


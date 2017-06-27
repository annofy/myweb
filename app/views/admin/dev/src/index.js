import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'react-quill/dist/quill.snow.css'
import registerServiceWorker from './registerServiceWorker';
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'
import {message} from 'antd'
import {Redirect} from 'react-router-dom'

axios.interceptors.request.use(req => {
  console.log('[#] 发起了请求')
  NProgress.start()
  return req;
}, err => {
  message.error('意外错误了 ' + err)
  NProgress.done()
  return Promise.reject(err)
})

axios.interceptors.response.use(res => {
  console.log('[#] 得到一个响应')
  if (res.data.ok && res.data.reason) {
    message.success(res.data.reason)
  }
  NProgress.done()
  return res.data
}, err => {
  message.error('意外错误了 ' + err)
  NProgress.done()
  return Promise.reject(err)
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

import axios from 'axios'
import { Message } from 'element-ui'
const http = axios.create({
    baseURL: '后端接口地址',
    // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 50000
    // request timeout
})
// 设置 post、put 默认 Content-Type
http.defaults.headers.post['Content-Type'] = 'application/json'
http.defaults.headers.put['Content-Type'] = 'application/json'

// request interceptor 请求拦截(请求发出前处理请求)
http.interceptors.request.use(
    config => {
        // do something before request is sent
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor 响应拦截器（处理响应数据）
http.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
        const res = response.data
        const ressuc = res.success
        // 后端返回成功失败是用 success 的true 和 false 判断，所以在这里就获取 response.data 的 success
        if (ressuc) {
            console.log('response', response)
            return res
        } else {
            Message({
                message: res.message || 'error',
                type: 'error',
                duration: 5 * 1000
            })
        }
    },
    error => {
        console.log('err' + error) // for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

// 封装get方法
export function get({ url, params }) {
    return new Promise((resolve, reject) => {
        http.get(url, {
            params: params
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}

// 封装post方法
export function post({ url, data }) {
    return new Promise((resolve, reject) => {
        http.post(url, data).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}

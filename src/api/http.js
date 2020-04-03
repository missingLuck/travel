import axios from 'axios'
const _http = axios.create();

// 基础配置
_http.defaults.timeout = 5 * 1000;       // 请求超时
_http.defaults.retry = 2;                 // 超时重发次数
_http.defaults.retryDelay = 1000;     // 超时重发间隔
_http.defaults.withCredentials = false;   // 请求头cookie携带
_http.defaults.crossDomain = true;        // 跨域配置,本地开发仍需要做代理处理
_http.defaults.validateStatus = (status) => {
    return status >= 200 && status < 510
};


// 根据NODE_ENV配置设置不同环境的baseURL
if (process.env.NODE_ENV === 'development') {
    _http.defaults.baseURL = 'http://localhost:8080'
}else if (process.env.NODE_ENV === 'production') {
    _http.defaults.baseURL = 'http://localhost:8080'
}


// request interceptor 请求拦截(请求发出前处理请求)
_http.interceptors.request.use(
    config => {
        // do something before request is sent
        const reqConfig = { ...config }
        // 配置参数 容错处理
        if (!reqConfig.url) {
            // 提示
            console.error('request need url')
            /*throw new Error({
                source: 'axiosInterceptors',
                message: '请求地址为空',
            })*/
        }
        if (!reqConfig.method) {
            // 默认使用 get 请求
            reqConfig.method = 'post'
        }

        // 参数容错
        if (reqConfig.method === 'get') {
            if (!reqConfig.params) {
                reqConfig.params = reqConfig.data || {}
            }
        } else if (reqConfig.method === 'post') {
            if (!reqConfig.data) {
                reqConfig.data = reqConfig.params || {}
            }

            // 检测是否包含文件类型, 若包含则进行 formData 封装
            let hasFile = false
            Object.keys(reqConfig.data).forEach(key => {
                if (typeof reqConfig.data[key] === 'object') {
                    const item = reqConfig.data[key]
                    if (item instanceof FileList || item instanceof File || item instanceof Blob) {
                        hasFile = true
                    }
                }
            })

            // 检测到存在文件使用 FormData 提交数据
            if (hasFile) {
                const formData = new FormData()
                Object.keys(reqConfig.data).forEach(key => {
                    formData.append(key, reqConfig.data[key])
                })
                reqConfig.data = formData
            }
        } else {
            // TODO: 其他类型请求数据格式处理
            console.warn(`其他请求类型: ${reqConfig.method}, 暂无自动处理`)
        }
        // 如 双令牌刷新机制
        // if (reqConfig.url === 'api/v1/user/refresh') {
        //     // const refreshToken = getToken('refresh_token')
        //     const refreshToken =  undefined
        //     if (refreshToken) {
        //         reqConfig.headers.Authorization = refreshToken
        //     }
        // } else {
        //     // access_token
        //     // const accessToken = getToken('access_token')
        //     const accessToken =  undefined
        //     if (accessToken) {
        //         reqConfig.headers.Authorization = accessToken
        //     }
        // }
        return reqConfig
    },
    error => {
        return Promise.reject(error)
    }
)

// response interceptor 响应拦截器（处理响应数据）
_http.interceptors.response.use(
    response => {
        if (response.status.toString().charAt(0) === '2') {
            return response.data
        }
        return new Promise(async (resolve, reject) => {
            let { errorCode, msg } = response.data // 后端接口返回的json结构体
            const { params, url } = response.config

            // 双令牌的机制业务
            // refresh_token 异常，直接登出
            // if (errorCode === 10101 || errorCode === 10102) {
            //     setTimeout(() => {
            //         store.dispatch('loginOut')
            //         const { origin } = window.location
            //         window.location.href = origin
            //     }, 1500)
            //     resolve(null)
            //     return
            // }

            // 双令牌的刷新令牌操作(重发处理逻辑)
            // 实现类似无感知令牌刷新, 让请求正常响应
            // if (errorCode === 19001) {
            //     const cache = {}
            //     if (cache.url !== url) {
            //         const refreshResult = await _http('api/v1/user/refresh')
            //         // save token 处理
            //         // 用新的token, 将上次失败请求重发
            //         const result = await _http(res.config)
            //         resolve(result)
            //         return
            //     }
            // }

            // 弹出提示处理
            // TODO
            alert('弹出提示,请求异常')

            reject()
        })

    },
    error => {
        if (!error.response) {
            console.error(error)
        }
        // 判断请求超时
        if (error.code === 'ECONNABORTED' && error.message.includes('timeout')) {
            console.warn('请求超时 重分处理')
            axiosTimeOutRetry(error)
        }
        return Promise.reject(error)
    }
)

// 请求超时重发处理
function axiosTimeOutRetry(error) {
    const config = error.config

    if(!config || !config.retry) {
        return Promise.reject(error)
    }

    config.__retryCount = config.__retryCount || 0

    if(config.__retryCount >= config.retry) {
        return Promise.reject(error)
    }

    config.__retryCount += 1;

    let backoff = new Promise(function(resolve) {
        setTimeout(function() {
            resolve()
        }, config.retryDelay || 1)
    })

    return backoff.then(function() {
        return _http(config)
    })
}


export function get(url, params = {}) {
    return  _http({
        method: 'get',
        url,
        params
    })
}

export function post(url, data = {}) {
    return _http({
        method: 'post',
        url,
        data
    })
}

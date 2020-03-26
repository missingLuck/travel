import { get, post } from './http' // 导入axios实例文件中方法

const server = {
    //带参数的 get 方法
    getById(param) {
        return get({
            url: '/role/getById',
            method: 'get',
            params: param
        })
    },
    //不带参数的 get 方法
    getAll() {
        return get({
            url: '/role/getAll',
            method: 'get'
        })
    },
    // post 方法
    save(param) {
        return post({
            url: '/role/save',
            method: 'post',
            data: param
        })
    }
}

export default server

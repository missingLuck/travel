import { get, post } from './http' // 导入axios实例中方法
const server = {
    getCity() {
        get(
            '/city.json'
        )
    }
}

export default server

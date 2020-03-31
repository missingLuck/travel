import { get, post } from './http' // 导入axios实例文件中方法
const server = {
    getById() {
        get(
            '/test.json',
        )
    }
}

export default server

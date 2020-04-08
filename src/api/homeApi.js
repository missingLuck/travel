import { get, post } from './http' // 导入axios实例中方法
const server = {
    getgetHomeInfo(city) {
        get(
            '/home.json',
            {city}
        )
    },
    getCity() {
        get(
            '/city.json'
        )
    },
    getDetailInfo() {
        get(
            '/detailInfo.json'
        )
    }
}

export default server

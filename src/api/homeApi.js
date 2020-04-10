import { get, post } from './http' // 导入axios实例中方法
const server = {
    getHomeInfo() {
        // get('/getHomeInfo.json').then(res=>{
        //     console.log(res)
        //     return res
        // })
        get('/getHomeInfo.json')
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

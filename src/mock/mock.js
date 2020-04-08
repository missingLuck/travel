import Mock from 'mockjs'
import homeData from './mockData/homeData'
import cityData from './mockData/cityData'
import detailData from './mockData/detailData'

Mock.mock('/getHomeInfo.json', 'get', homeData)
Mock.mock('/city.json', 'get', cityData)
Mock.mock('/getDetailInfo.json', 'get', detailData)

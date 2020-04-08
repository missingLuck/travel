import Mock from 'mockjs'
import homeData from './mockData/homeData'
import cityData from './mockData/cityData'

Mock.mock('/getHomeInfo.json', 'get', homeData)
Mock.mock('/city.json', 'get', cityData)

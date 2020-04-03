import Mock from 'mockjs'
import tableData from './mockData/homeData'
import cityData from './mockData/cityData'

Mock.mock('/test', 'get', tableData)
Mock.mock('/city.json', 'get', cityData)

// import { combineReducers } from 'redux';
import products from './products';//定義有哪些能夠對products做操作的方法
import cars from './cars';//定義有哪些能夠對cars做操作的方法


//設定Provider(使用redux時候的最上層)有哪些state
// export default combineReducers({
//     products,
//     cars
// })
export default {
    products,
    cars
}
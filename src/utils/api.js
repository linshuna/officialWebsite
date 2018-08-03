import axios from './axios'
// API请求方法'http://rap2api.taobao.org/app/mock/20322'
const httpUrl = ''
// const httpUrl = "http://w.hhqccar.cn"
//关键字描述
function description(params = {}) {
    return axios.get('/myapp.php/Index/index', params)
}
//首页 轮播图
function banner(params = {}){
  return axios.get('/myapp.php/Index/banner',params)
}
//首页 最新活动
function activityLatest(params = {}){
  return axios.get('/myapp.php/Index/activity_latest',params)
}
//首页 汽车服务 
function carServer(params = {}){
  return axios.get('/myapp.php/Index/product',params)
}
//首页 资讯 
function newsCategory(params = {}){
  return axios.post('/myapp.php/Index/news',params)
}
//首页 推荐门店
function shop_recommend(params = {}){
  return axios.get('/myapp.php/Index/shop_recommend',params)
}
//底部 友情链接
function link(params = {}){
  return axios.get('/myapp.php/Index/link',params)
}

export {
  description,//关键字描述
  banner,//首页 轮播图
  activityLatest,//首页 最新活动
  carServer,//首页 汽车服务 
  newsCategory,//首页 资讯 
  shop_recommend,//首页 推荐门店
  link,//底部 友情链接
}
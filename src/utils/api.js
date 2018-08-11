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
//首页 选择车辆
function IndexCarnat(params = {}) {
  // return axios.post('/myapp.php/Index/carnat', params)
  return axios.post('/myapp.php/Maintain/series ',params)
}
//首页洗车 IndexCarmodel
function IndexCarmodel(params = {}) {
  // return axios.post('/myapp.php/Index/carmodel', params)
  return axios.post('/myapp.php/Maintain/carmodel_carnat', params)
}
//首页 车品牌
function IndexCarplate(params = {}) {
  return axios.post('/myapp.php/Index/carplate',params)
  
}
//车牌的款式 seriesCarPlate
function seriesCarPlate(params = {}) {
  return axios.post('/myapp.php/Maintain/series',params)
}

//保养 车系名称 carmodelTitle
function carmodelTitle(params = {}) { 
  return axios.post('/myapp.php/Maintain/carmodel',params)
}
//保养 报价 carOffer
function carOffer(params = {}) {
  return axios.post('/myapp.php/Maintain/offer',params)
}

//首页 推荐分类
function topNewsCategory(params = {}) {
  return axios.get('/myapp.php/Index/top_news_category', params)
}

//首页 广告IndexAd
function IndexAd(params = {}) {
  return axios.get('/myapp.php/Index/ad',params)
}

//底部 友情链接
function link(params = {}){
  return axios.get('/myapp.php/Index/link',params)
}

//自助保养 里程
function MaintainMiles(params = {}) {
  return axios.post('/myapp.php/Maintain/miles', params)
}



//获取省,市，区
function province(params = {}) { 
  return axios.get('/myapp.php/Service/province',params)
}
function city(params = {}) { 
  return axios.post('/myapp.php/Service/city',params)
}
function dist(params = {}) { 
  return axios.post('/myapp.php/Service/dist',params)
}

//最新活动页面
function activityIndex(params = {}){
  return axios.get('/myapp.php/Activity/index',params)
}
//最新活动详情页面 
function activityDetail(params = {}){
  return axios.get('/myapp.php/Activity/details',params)
}

//服务门店列表 
function stopList(params = {}) {
  // return axios.post('/myapp.php/Service/shop',params)
  return axios.post('/myapp.php/Service/shop_new',params)
}
//服务门店详情 
function stopDetail(params = {}) { 
  return axios.post('/myapp.php/Service/details',params)
}
//服务门店评价 /myapp.php/Service/evaluate
function evaluate(params = {}) { 
  return axios.post('/myapp.php/Service/evaluate',params)
}
//服务门店 预约
function AppointOrder(params = {}) {
  return axios.post('/myapp.php/Appoint/order', params)
}
//服务门店 项目名称
function AppointService(params = {}) {
  return axios.post('/myapp.php/Appoint/servicelist', params)
}


//搜索
function search(params = {}) { 
  return axios.post('/myapp.php/Search/index',params)
}
//新闻搜索
function newsSearch(params = {}) { 
  return axios.post('/myapp.php/Search/news',params)
}
//门店搜索
function shopSearch(params = {}) { 
  return axios.post('/myapp.php/Search/shop',params)
}

//详情 
function newsDetail(params = {}) { 
  return axios.get('/myapp.php/News/details',params)
}

//车主心声
function CarOwnersVoice(params = {}) {
  return axios.get('/myapp.php/News/evaluate', params)
}

//保险资讯
function NewsIndex(params = {}) {
  return axios.post('/myapp.php/News/index', params)
}
//最新活动 儿子
function NewsActivityLatest(params = {}) {
  return axios.get('/myapp.php/News/activity_latest', params)
}
//底部轮播
function bottom(params = {}) {
  return axios.get('/myapp.php/Index/bottom', params)
}
export {
  description,//关键字描述
  banner,//首页 轮播图
  activityLatest,//首页 最新活动
  carServer,//首页 汽车服务 
  newsCategory,//首页 资讯 
  shop_recommend,//首页 推荐门店
  IndexCarnat,//首页 选择车辆
  IndexCarmodel,//首页 选择车系
  IndexCarplate,//首页 车品牌
  seriesCarPlate,//车牌的款式 
  carmodelTitle,//保养 车系名称 
  carOffer,//保养 报价 
  topNewsCategory,// 推荐分类
  IndexAd,//首页 广告

  link,//底部 友情链接
  MaintainMiles,//里程
  
  activityIndex,//最新活动页面
  activityDetail,//最新活动详情页面 
  province,//获取省,市区
  city,
  dist,
  stopList,//服务门店详情 
  stopDetail,//服务门店详情 
  evaluate,//服务门店评价
  AppointOrder,//服务门店 预约
  AppointService,//服务门店 项目名称
  search,//搜索 
  newsSearch,//新闻搜索 
  shopSearch,//门店搜索 
  newsDetail,//详情

  CarOwnersVoice,//车主心声
  NewsIndex,//保险资讯
  NewsActivityLatest,//最新活动 儿子
  bottom//底部轮播 
  
}
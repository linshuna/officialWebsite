import axios from './axios'
// API请求方法'http://rap2api.taobao.org/app/mock/20322'
const httpUrl = ''
// const httpUrl = "http://w.hhqccar.cn"
//先判断客户是否存在
function isExistCustomer(params = {}) {
    return axios.post('/cliapi.php/Client/phone_register', params)
}

//注册
function getCode(params) {
    return axios.get('/cliapi.php/Client/sendcode', params)
}

function saveRegister(params) {
    return axios.post('/cliapi.php/Client/register', params);
}

//登录
function login(params) {
    return axios.post("/cliapi.php/Client/login", params)
}

//忘记密码
function forget(params) {
    return axios.post("/cliapi.php/Client/forget", params)
}

// 首页 轮播图
function getIndexBanner(params = {}) {
    return axios.post('/cliapi.php/Index/banner', params)
}

// 首页 商品推荐
function getRecommendList(params = {}) {
    return axios.post('/cliapi.php/Index/maintain_recommend', params)
}

// 首页 最近门店
function getNearbyStores(params = {}) {
    return axios.post('/cliapi.php/Index/store_nearest', params)
}
//首页 默认车辆
function IndexDefaultCar(params = {}) {
  return axios.post('/cliapi.php/Index/defaultCar', params)
}


// 我的 我的评价
function getEvaluate(params = {}) {
    return axios.post('/cliapi.php/Client/evaluate', params)
}

// // 我的 我的预约
function getMyAppoint(params = {}) {
    return axios.post('/cliapi.php/Client/appoint', params)
}
//我的 订单
function getOrderIndex(params = {}) {
  return axios.post('/cliapi.php/Order/index_new', params)
}

//我的 推荐好友
function getClientTclient(params = {}) {
  return axios.post('/cliapi.php/Client/t_client', params)
}


//取消理由
function cancelReason(params = {}) {
  return axios.get('/cliapi.php/Client/cancelreason', params)
}
//取消订单
function cancelOrder(params = {}) {
  return axios.post('/cliapi.php/Client/ordercancel', params)
}
//我的预约详情
function getMyAppointDetail(params = {}) {
  return axios.post('/cliapi.php/Client/orderdetail', params)
}
//我的预约编辑
function MyAppointEdit(params = {}) {
  return axios.post('/cliapi.php/Client/orderedit', params)
}

//我的车账本
function carCountList(params = {}) {
  return axios.post('/cliapi.php/ClientRecord/index', params)
}
//结算
function pays(params = {}) {
  return axios.post('/cliapi.php/ClientRecord/pays', params)
}
//预约详情
function orderDetail(params = {}) { 
  return axios.get('/cliapi.php/ClientRecord/detail', params)
}
//检测报告
function check(params = {}) { 
  return axios.get('/cliapi.php/ClientRecord/check', params)
}
//查看点评
function evaldetails(params = {}) { 
  return axios.post('/cliapi.php/AppendixStore/evaldetails', params)
}
//保存点评
function evaluatestores(params = {}) { 
  return axios.post('/cliapi.php/AppendixStore/evaluatestores', params)
}



// 我的 我的首页
function getIndex(params) {
    return axios.post('/cliapi.php/Client/Index', params)
}

// 我的 个人信息列表
function getMyCenter(params = {}) {
    return axios.post('/cliapi.php/Client/data', params)
}

//我的 个人信息编辑
function editorMyCenter(params = {}) { 
  return axios.post('/cliapi.php/Client/client_edit',params)
}

//上传头像
function changeHeadimg(params = {}) {
    return axios.post('/cliapi.php/Client/avatar_adds', params)
}

// 我的 帮助中心
function getHelpCenter(params = {}) {
    return axios.post('/cliapi.php/Client/help', params)
}

// 我的 帮助中心
function getHelpDetails(params = {}) {
    return axios.post('/cliapi.php/Client/help_details', params)
}

//附近
// 附近门店
function getStoreList(params = {}) {
    return axios.post('/cliapi.php/AppendixStore/index', params)
}
//门店详情
function storeDetail(params = {}) { 
  return axios.get('/cliapi.php/Index/shop_details',params)
}
//门店点评
function shopevaluate(params = {}) { 
  return axios.post('/cliapi.php/AppendixStore/shopevaluate',params)
}

//筛选城市
function getCityList(params = {}) {
    return axios.get('/cliapi.php/AppendixStore/provinceAndcity', params)
}

//预约
// 立即预约
function getAppointShop(params = {}) {
    return axios.post('/cliapi.php/Appoint/appoint_shop', params)
}
//服务类型
function serverList(params = {}) { 
  return axios.post('/cliapi.php/Appoint/servicelist',params)
}
//预约时间
function orderTime(params = {}) { 
  return axios.post('/cliapi.php/Appoint/shop_time',params)
}
//立即预约保存
function reservations(params = {}) {
  return axios.post('/cliapi.php/Appoint/immediate_reservations',params)
}

// 首页轮播图
function getIndexBanner(params = {}) {
    return axios.post('/cliapi.php/Index/banner', params)
}

// 首页商品推荐
function getRecommendList(params = {}) {
    return axios.post('/cliapi.php/Index/maintain_recommend', params)
}

// 首页最近门店
function getNearbyStores(params = {}) {
    return axios.post('/cliapi.php/Index/store_nearest', params)
}

// 首页 特惠
function activity(params = {}) {
    return axios.post('/cliapi.php/Discount/activity', params)
}
//首页  救援
function getClientRescue(params = {}) {
  return axios.post('/cliapi.php/ClientRescue/index', params)
}


//车辆列表
function carList(params = {}) {
    return axios.post('/cliapi.php/Car/index', params)
}

//新增车辆
function addCar(params = {}) {
    return axios.post('/cliapi.php/Car/addcar', params)
}

//删除车辆
function delCar(params = {}) {
    return axios.post('/cliapi.php/Car/delcar', params)
}

//设置默认车辆
function setCarDefault(params = {}) {
    return axios.post('/cliapi.php/Car/car_default', params)
}


//具体车辆信息/cliapi.php/Car/editcar/carvid/:carvid
function carMsg(params = {}) {
  return axios.get('/cliapi.php/Car/editcar',params)
}
//编辑保存车辆信息
function editCar(params = {}) { 
  return axios.post('/cliapi.php/Car/editcar',params)
}
//消费记录 
function carLog(params = {}) { 
  return axios.post('/cliapi.php/Car/car_log',params)
}

//我的  特惠
function getActivity(params = {}) {
    return axios.post('/cliapi.php/Discount/activity', params)
}
//找师傅 
function findTecherList(params = {}) {
  return axios.get('/cliapi.php/Tech/index', params)
}
//充值优惠 信息
function recharge(params = {}) {
  return axios.post('/cliapi.php/Chong/index', params)
}
//充值接口
function payRecharge(params = {}) {
  return axios.post('/cliapi.php/Chong/pays', params)
}


//首页  车险
function getClientRiskIndex(params = {}) {
    return axios.post('/cliapi.php/ClientRisk/index', params)
}

//首頁 商城廣告
function getShopBanner(params = {}) {
  return axios.post('/cliapi.php/Shop/banner', params)
}
//首頁 商城推薦
function getShopRecommend(params = {}) {
  return axios.get('/cliapi.php/Shop/recommend', params)
}
//首頁 商城门店
function getShopStore(params = {}) {
  return axios.post('/cliapi.php/Shop/shop_store', params)
}
//商城 分类
function shopProject(params = {}) {
  return axios.post('/cliapi.php/Shop/project', params)
}
//商城 商品列表 
function getShopList(params = {}) {
  return axios.post('/cliapi.php/Shop/store_goods', params)
}
//商城 商品详情 
function getShopDetail(params = {}) {
  return axios.get('/cliapi.php/Goods/index', params)
}
//商城 商品立即购买buyGoods /cliapi.php/Goods/goods_buy
function buyGoods(params = {}) {
  return axios.post('/cliapi.php/Goods/goods_buy', params)
}
//商城 商品立即详情 /cliapi.php/Goods/paystep
function paystep(params = {}) {
  return axios.get('/cliapi.php/Goods/paystep', params)
}
//商城 商品订单删除 
function goodsCancels(params = {}) {
  return axios.post('/cliapi.php/Goods/cancels', params)
}
//商城 商品立即支付goodsPay
function goodsPay(params = {}) {
  return axios.post('/cliapi.php/Goods/pay', params)
}

//我的 钱包
function getWalletIndex(params = {}) {
  return axios.post('/cliapi.php/Wallet/index', params)
}
//我的 钱包消费
function getWalletAmountlog(params = {}) {
  return axios.post('/cliapi.php/Wallet/amount_log', params)
}
//我的 钱包消费
function getWalletRechargelog(params = {}) {
  return axios.post('/cliapi.php/Wallet/recharge_log', params)
}
//我的 钱包分红
function getWalletBonuslog(params = {}) {
  return axios.post('/cliapi.php/Wallet/bonus_log', params)
}


//我的  洗车
function getCarwashIndex(params = {}) {
    return axios.post('/cliapi.php/Carwash/index', params)
}
//洗车列表
function getCarwashList(params = {}) { 
  return axios.get('/cliapi.php/Carwash/project', params)
}
//洗车详情
function getCarwashDetail (params = {}) { 
  return axios.get('/cliapi.php/Carwash/details', params)
}
//洗车 车辆列表
function getCarwashCarList(params = {}) { 
  return axios.post('/cliapi.php/Appoint/client_car', params)
}
//确定保存
function carwashOrder(params = {}) { 
  return axios.post('/cliapi.php/Carwash/order', params)
}
//查看洗车服务详情支付 /cliapi.php/Carwash/pay
function carwashPayList(params = {}) { 
  return axios.post('/cliapi.php/Carwash/pay', params)
}
//洗车结账详情 cliapi.php/Carwash/orderdetails
function carwashOrderList(params = {}) { 
  return axios.post('/cliapi.php/Carwash/orderdetails', params)
}
//洗车删除订单 
function carwashOrderCancel(params = {}) { 
  return axios.post('/cliapi.php/Carwash/cancels', params)
}

//车辆型号
function bandList(params = {}) {
    return axios.post('/api.php/TechCarModels/index', params)
}

function carModules(params = {}) {
    return axios.post('/api.php/TechCarModels/carmodels', params)
}

function carYearPl(params = {}) {
    return axios.post('/api.php/TechCarModels/yearPl', params)
}



export {
  isExistCustomer,
  getCode,
  saveRegister,
  login,
  forget,
  getIndexBanner,
  getRecommendList,
  getNearbyStores,
  IndexDefaultCar,//首页 我的默认车辆

  carList,//车辆列表
  addCar,//新增车辆
  delCar,//删除车辆
  setCarDefault,//设备默认车辆
  carMsg,//具体车辆信息
  editCar,//编辑保存车辆信息
  carLog,//车辆消费信息
  bandList,//车辆型号
  carModules,//车辆模型
  carYearPl,//车系

  getEvaluate, //我的评价
  getMyAppoint,//我的预约
  cancelReason,//取消理由
  cancelOrder,//取消订单
  getMyAppointDetail,//预约详情
  MyAppointEdit,//预约编辑
  getOrderIndex,//我的 订单 

  getClientTclient,//我的 推荐好友

  getIndex, //我的首页
  getMyCenter, //我的 个人信息列表
  editorMyCenter,//我的 个人信息编辑

  getHelpCenter,// 我的 帮助中心
  getStoreList,// 附近 附近门店，和预约是调用同一个接口
  storeDetail,//门店详情，和预约是调用同一个接口
  shopevaluate,//门店点评 
  getHelpDetails,//我的 帮助中心
  getAppointShop,// 预约 立即预约
  serverList,//服务列表
  orderTime,//预约时间
  reservations,//立即预约保存
  getActivity,//首页  特惠
  findTecherList,//找师傅
  recharge,//充值优惠
  payRecharge,//充值接口
  getClientRiskIndex,//首页 车险
  getClientRescue,//首页 救援
  
  getCarwashIndex,//首页 洗车
  getCarwashList,//洗车列表
  getCarwashDetail,//洗车详情
  getCarwashCarList,//洗车车辆列表
  carwashOrder,//保存洗车单
  carwashPayList,//洗车支付
  carwashOrderList,//洗车详情
  carwashOrderCancel,//删除洗车订单
  

  changeHeadimg,//上传头像
  getCityList,//筛选城市
  carCountList,//我的车账本
  pays,//结算
  orderDetail,//预约详情
  check,//检测报告
  evaldetails,//查看点评
  evaluatestores,//保存门店点评


  getShopBanner,//首頁 商城廣告
  getShopRecommend,//首页 商城推薦
  getShopStore,//首页 商城门店
  shopProject,//商城 分类
  getShopList,//商城 商品列表
  getShopDetail,// 商城 商品详情
  buyGoods,//商城 商品立即购买
  paystep,//商品 商品购买 详情
  goodsCancels,//商品 删除订单
  goodsPay,//商城 商品立即支付

  getWalletIndex,//我的 钱包
  getWalletAmountlog,//我的 钱包消费记录
  getWalletRechargelog,//我的 钱包充值
  getWalletBonuslog,//我的  钱包分红
}
const openMap = function (long,lat,dist,address) { 
  window.location.href = `https://apis.map.qq.com/tools/poimarker?type=0&marker=coord:${lat},${long};title:${dist};addr:${address};&key=IK2BZ-QCAKQ-QJ45W-GCLNJ-JCWSK-GWBYA&referer=myapp `        
}
exports.install = function (Vue,option) { 
  Vue.prototype.map = openMap
}
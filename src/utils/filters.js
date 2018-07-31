const filters = {
  distanceFilter: function (value) {
    // 返回处理后的值
    let gainKm = Math.round(value)
    if (gainKm > 1000) {
      return (gainKm / 1000).toFixed(2) + 'km'
    } else {
      return gainKm + "m"
    }
    // Math.round(item.distance)<1000?Math.round(item.distance)+'m':(Math.round(item.distance)/1000).toFixed(2)+'km'
  },
  serverTypeFilter: function (value) {
    console.log(value)
    let type = '';
    type = (value == 0 ? '休息中' :
      (value == 1 ? '接受预约' :
        (value == 2 ? '预约火爆' :
          (value == 3 ? '今日已满' : '待定'))))
    return type;
  },
  noDataTip: function (value) {
    if (!value) return '暂无';
    else return value;
  },
  noAssessTip: function (value) { 
    if (!value || value == '') return '此用户没有填写评价';
    else return value;
  },
  unescape:function (html) {
    return html
      .replace(html ? /&(?!#?\w+;)/g : /&/g, '&amp;')
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, "\"")
      .replace(/&#39;/g, "\'");  
  },
}
export default filters;
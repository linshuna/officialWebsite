import axios from 'axios'
import Qs from 'qs'
const service = axios.create()

service.get = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: data
      })
      .then(response => {
        if (response.data.errorCode == 200) {
          resolve(response.data.data);
          return
        }
        // alert({
        //   message: response.data.message,
        //   type: 'warning'
        // });
        alert(response.data.message)
        resolve(response.data); 
      
        
      }, err => {
        // alert({
        //   message: '网络出错,请稍后重试',
        //   type: 'warning'
        // });
        alert('网络出错,请稍后重试')
        reject(err)
      })
  })
}

service.post = (url, data = {}, config = {}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, Qs.stringify(data), config)
      .then(response => {
        if (response.data.errorCode == 200) {
          resolve(response.data.data);
          return
        }
        resolve(response.data);
        // alert({
        //   message: response.data.message,
        //   type: 'warning'
        // });
        alert(response.data.message)
      }, err => {
        // alert({
        //   message: '网络出错,请稍后重试',
        //   type: 'warning'
        // });
        alert('网络出错,请稍后重试')
        reject(err)
      })
  })
}

export default service

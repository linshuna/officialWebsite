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
        this.$message({
          message: response.data.message,
          type: 'warning'
        });
        resolve(response.data); 
      
        
      }, err => {
        this.$message({
          message: '网络出错,请稍后重试',
          type: 'warning'
        });
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
        this.$message({
          message: response.data.message,
          type: 'warning'
        });
      }, err => {
        this.$message({
          message: '网络出错,请稍后重试',
          type: 'warning'
        });
        reject(err)
      })
  })
}

export default service

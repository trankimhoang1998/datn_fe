import axios from "axios";
import { getAccessToken } from "../../helper/localStorage";

class axiosService {
  constructor() {
    const instance = axios.create();
    //instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    instance.defaults.baseURL = "http://103.200.20.171/api/";
    //instance.defaults.baseURL = "http://127.0.0.1:8000/api/";
    instance.interceptors.response.use(this.handlesuccess, this.handleError);
    instance.interceptors.request.use(
      (config) => {
        try {
          const token = getAccessToken();
          // console.log("11111111");
          //    if(checkTokenExpration(token)){
          //     config.headers.Authorization = token ? `Bearer ${token}`:"";
          //    }
          //    else{
          //        clearAccesstoken();
          //        history.push('/login')
          //    }
          config.headers.Authorization = token ? `Bearer ${token}` : "";
        } catch (e) {}

        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );
    this.instance = instance;
  }
  handlesuccess = (res) => {
    return res;
  };
  handleError = (error) => {
    return Promise.reject(error.response);
  };
  get = (url) => {
    return this.instance.get(url);
  };
  post = (url, data) => {
    return this.instance.post(url, data);
  };
  put = (url, data) => {
    return this.instance.put(url, data);
  };
  delete = (url, data) => {
    return this.instance.delete(url, data);
  };
  patch = (url, data) => {
    return this.instance.patch(url, data);
  };
}
export default new axiosService();

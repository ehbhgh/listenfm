import axios from 'axios';
import QS from 'qs';
axios.defaults.timeout = 10000;
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
//请求携带cookie
// axios.defaults.withCredentials = true;

export default function commonHttp(methods,url,params){
    if(methods=="get"){
        return getAxios(url,params)
    }
    else if(methods=="post"){
        return postAxios(url,params)
    }

}
//get请求
function getAxios(url,params){
    return new Promise((resolve,reject)=>{
        axios.get(url,params).then((res)=>{
            resolve(res.data)
        }).catch((err)=>{
            reject(err.data)
        })
    })
}

//post请求
function postAxios(url,params){
    return new Promise((resolve,reject)=>{
        axios.post(url, QS.stringify(params)).then((res)=>{
            resolve(res.data)
        }).catch((err)=>{
            reject(err.data)
        })
    })
}
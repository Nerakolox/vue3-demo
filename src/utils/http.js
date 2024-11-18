import axios from 'axios'
import cookie from 'js-cookie'

import { userStore } from '../stores/stores'
import { ElMessage } from 'element-plus'

import { createPinia } from 'pinia'
export const pinia = createPinia()

const userInfo = userStore(pinia)

// 创建通用的 axios 配置
const createAxiosInstance = (baseURL) => {
    const httpx = axios.create({
        baseURL: baseURL,
        timeout: 50000,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer yourToken'
        }
    })

    httpx.interceptors.request.use(config => {
        const token = cookie.get('x-vue-demo-Token')
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`  // 将 Token 添加到请求头
        }
        return config
    }, error => {
        return Promise.reject(error)
    })

    httpx.interceptors.response.use(response => {
        const newToken = response.headers['X-VUE-DEMO-token']
        if (newToken) {
            cookie.set('x-vue-demo-Token', newToken)
        }
        return response
    }, error => {
        if (error.response.status === 401) {
            cookie.remove('x-vue-demo-Token')
            ElMessage({
                message: error.response.data.msg,
                type: 'error',
                plain: true,
            })
            userInfo.logOut()
        } else {
            return Promise.reject(error)
        }
    })

    return httpx
}

const rootDomain = {
    target: '',
}

// const http = createAxiosInstance(`https://api.${rootDomain.target}`)

export { http, httpStatic }
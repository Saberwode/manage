/***
 * 环境变量配置
 */
const env = import.meta.env.MODE || 'production';
const EnvConfig = {
  dev: {
    baseApi: 'http://localhost:3000/api',
    mockApi: 'https://www.fastmock.site/mock/3e6d55f607e287c78c97f316f7dd6ff8/api'
  },
  test: {
    baseApi: '/api',
    mockApi: 'https://www.fastmock.site/mock/3e6d55f607e287c78c97f316f7dd6ff8/api'
  },
  production: {
    baseApi: '/api',
    mockApi: 'https://www.fastmock.site/mock/3e6d55f607e287c78c97f316f7dd6ff8/api'
  },
}

export default {
  env,
  mock: false,
  namespace: 'manager',
  ...EnvConfig[env]
}
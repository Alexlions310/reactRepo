import axios, { AxiosRequestConfig, Method } from 'axios'

export const DEV = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'

export const PROD_CONFIG = {
  baseURL: 'https://dev.mcsgr.ru/api/v1',
  timeout: 10000,
}

export const DEV_CONFIG = {
  baseURL: 'http://217.28.228.152:9006/api/v1',
  timeout: 60000,
}

export const API_CONFIG = DEV ? DEV_CONFIG : PROD_CONFIG

const getURL = (path: string) => `${API_CONFIG.baseURL}/${path}`

const getHeaders = (userToken: string | null) => {
  const headers = {
    Authorization: <string | undefined>undefined,
  }
  if (userToken) {
    headers.Authorization = `Bearer ${userToken}`
  }
  return headers
}

export type APITracker = {
  changeToken: (headers: Record<string, string | undefined>) => unknown
  request: (method: string, url: string, params?: unknown) => unknown
  response: (method: string, url: string, responseData?: unknown) => unknown
  error: (method: string, url: string, error: Error, requestParams?: unknown) => unknown
}
const trackAPI = () => null
const defaultAPITracker: APITracker = {
  changeToken: trackAPI,
  request: trackAPI,
  response: trackAPI,
  error: trackAPI,
}

/**
 * класс api
 */
export const api = {
  /**
   * токен юзера
   */
  userToken: <string | null>null,
  /**
   * @private
   */
  trackAPI: defaultAPITracker,
  setAPITracker: (trackAPI: APITracker) => {
    api.trackAPI = trackAPI
  },

  /**
   * проставить токен юзера
   * @param {String} token
   */
  setUserToken: (token: string) => {
    api.userToken = token
    // so it can be used inside reducer
    Promise.resolve(null).then(() => {
      api.trackAPI.changeToken(getHeaders(token))
    })
    return api
  },

  request: <T>(method: Method, path: string, params?: AxiosRequestConfig) => {
    const url = getURL(path)
    return Promise.resolve(null)
      .then(() => {
        api.trackAPI.request(method, url, params)
      })
      .then(() =>
        axios
          .create({
            headers: getHeaders(api.userToken),
            timeout: API_CONFIG.timeout,
          })
          .request<T>({
            method,
            url,
            validateStatus(status) {
              return status >= 200
            },
            ...params,
          }),
      )
      .then((resp) => {
        api.trackAPI.response(method, url, resp.data)
        return resp
      })
      .catch((err) => {
        api.trackAPI.error(method, url, err, params)
        throw err
      })
  },

  get: <T extends unknown>(path: string, params?: AxiosRequestConfig['params']) =>
    api.request<T>('GET', path, { params }),

  post: <T>(path: string, data: AxiosRequestConfig['data']) => api.request<T>('POST', path, { data }),

  put: <T>(path: string, data: AxiosRequestConfig['data']) => api.request<T>('PUT', path, { data }),

  patch: <T>(path: string, data: AxiosRequestConfig['data']) => api.request<T>('PATCH', path, { data }),

  delete: <T extends unknown = void>(path: string) => api.request<T>('DELETE', path),

  sendFile: <T>(path: string, data: AxiosRequestConfig['data']) =>
    api.request<T>('POST', path, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data,
    }),
}

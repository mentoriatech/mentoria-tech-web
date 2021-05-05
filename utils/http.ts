import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

interface RequestResponseType {
  status: number;
  code: number;
  data: any;
}

export async function request(
  options: AxiosRequestConfig,
): Promise<RequestResponseType> {
  if (!options.url || !options.method) {
    return {
      status: 1,
      code: 400,
      data: 'Both URL and method are required',
    }
  }

  try {
    const response: AxiosResponse = await axios(options)

    return {
      status: response.status > 199 || response.status < 300 ? 0 : 1,
      code: response.status,
      data: response.data,
    }
  } catch (error) {
    return {
      status: 1,
      code: error.response.status,
      data: error.response.data.message,
    }
  }
}

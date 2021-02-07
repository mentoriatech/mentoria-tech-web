import axios from 'axios';

export async function request(options: any) {
  if (!options.url || !options.method) {
    return {
      status: 1,
      code: 400,
      data: 'Both URL and method are required',
    }
  }

  try {
    const response = await axios(options)

    return {
      status: response.status > 199 || response.status < 300 ? 0 : 1,
      code: response.status,
      data: response.data,
    }

  } catch(error) {
    return {
      status: 1,
      code: error.response.status,
      data: error.response.data.message,
    }
  }
} 

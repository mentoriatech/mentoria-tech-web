import { NextApiRequest } from 'next'
import axios from "axios"
import { queryStringify } from '../../../../utils/index'


export default async function handler(req: NextApiRequest) {
  const url = `${process.env.TRELLO_ROOT_URL}/authorize`
  
  const parsedQueryParams = {
    key: process.env.TRELLO_KEY,
    return_url: 'http://localhost:3000/dashboard/',
    callback_method: 'fragment',
    expiration: 'never',
    name: 'mentoria.tech',
    scope: 'write,read,account',
    response_type: 'fragment'
  }

  const querystring = queryStringify(parsedQueryParams)

  try {
    const { data } = await axios.get(`${url}?${querystring}`)

    return { successful: true, data }

  } catch(error) {
    return { successful: false, data: error }
  }
}

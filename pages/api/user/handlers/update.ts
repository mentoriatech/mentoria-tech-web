import axios from 'axios'
import { NextApiRequest } from 'next'
import { queryStringify } from '../../../../utils'

export default async function handler(req: NextApiRequest) {
  const { email } = req.query

  const body = req.body

  if(!body || !Object.keys(body)) {
    return { successful: false, data: { message: 'Please provide a body' }}
  }

  const encodedEmail = queryStringify(email)

  const url = `${process.env.MENTORIA_TECH_SERVER_URL}/user/${encodedEmail}`
  try {
    const { data } = await axios.put(url, { data: body })
    
    return { successful: true, data }
  } catch (error) {
    return { successful: false, data: error }
  }
}

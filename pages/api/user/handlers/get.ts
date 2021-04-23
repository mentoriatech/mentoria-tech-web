import axios from 'axios'
import { NextApiRequest } from 'next'
import { queryStringify } from '../../../../utils'

export default async function handler(req: NextApiRequest) {  
  const { email } = req.query

  const encodedEmail = queryStringify(email)

  const url = `${process.env.MENTORIA_TECH_SERVER_URL}/user/${encodedEmail}`
  try {
    const { data } = await axios(url)
    
    return { successful: true, data }
  } catch (error) {
    return { successful: false, data: error }
  }
}

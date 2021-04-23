import axios from 'axios'
import { ApiResponse } from '../../../../types'

export default async function listSubscriptions(): Promise<ApiResponse> {
  const url = `${process.env.MENTORIA_TECH_SERVER_URL}/subscription`

  try {
    const { data } =  await axios(url)

    return { successful: true, data }

  } catch(error) {
    return { successful: false, data: error }
  }
}

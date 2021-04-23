import axios from 'axios'
import { ApiResponse } from '../../../../types'

interface CancelSubscription {
  email: string;
}

export default async function cancelSubscription(body: CancelSubscription): Promise<ApiResponse> {
  if (!body.email) {
    return {
      status: 400,
      data: "Email field is required",
      successful: false
    }
  }

  const url = `${process.env.MENTORIA_TECH_SERVER_URL}/subscription`

  try {
    const { data } = await axios.delete(url, { data: body })

    return { successful: true, data }
  } catch(error) {
    return { successful: false, data: error }
  }
}

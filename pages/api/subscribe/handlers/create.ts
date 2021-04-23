import axios from 'axios'
import { ApiResponse } from '../../../../types'

interface Subscribe {
  name: string;
  email: string;
  permissions: [string];
}

export default async function createSubscription(body: Subscribe): Promise<ApiResponse> {
  if (!body.email || !body.name) {
    return {
      successful: false,
      data: "Both fields are required",
      status: 400,
    }
  }

  const url = `${process.env.MENTORIA_TECH_SERVER_URL}/subscription`

  try {
    const { data } = await axios.post(url, { data: body })

    return { successful: true, data }

  } catch(error) {

  }
}

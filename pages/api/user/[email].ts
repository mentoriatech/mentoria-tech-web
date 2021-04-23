import { NextApiRequest, NextApiResponse } from 'next'
import getUser from './handlers/get'
import updateUser from './handlers/update'

const functionMapping = {
  GET: getUser,
  UPDATE: updateUser,
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  
  const subscriptionAction = functionMapping[method];

  if (!subscriptionAction) {
    return res.status(400).json(
      { successful: false, data: { message: `No request matched ${method} method`}}
    )
  }

  try {
    const response = await subscriptionAction(req);

    const status = response.status || 200
    
    res.status(status).json(response)

  } catch (error) {
    const status = error.status || 400
    res.status(status).json(error)
  }
}

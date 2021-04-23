import { NextApiRequest, NextApiResponse } from 'next'
import createSubscription from './handlers/create'
import listSubscriptions from './handlers/getAll'
import cancelSubscription from './handlers/delete'

const functionMapping = {
  POST: createSubscription,
  GET: listSubscriptions,
  DELETE: cancelSubscription,
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  
  const subscriptionAction = functionMapping[method];

  try {
    const response = await subscriptionAction(req.body);

    const status = response.status || 200

    res.status(status).json(response)

  } catch (error) {
    const status = error.status || 400
    
    res.status(status).json(error)
  }
}

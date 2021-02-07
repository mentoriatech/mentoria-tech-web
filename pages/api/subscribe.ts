import createSubscription from '../../server/functions/subscribe/createSubscription'
import listSubscriptions from '../../server/functions/subscribe/listSubscriptions'
import cancelSubscription from '../../server/functions/subscribe/cancelSubscription'

const functionMapping = {
  POST: createSubscription,
  GET: listSubscriptions,
  DELETE: cancelSubscription,
}

export default async function handler(req, res) {
  const { method } = req;
  
  const subscriptionAction = functionMapping[method];

  try {
    const response = await subscriptionAction(req.body);

    if (response.status) {
      return res.status(response.code).json(response)
    }
    
    res.status(200).json(response)

  } catch (error) {
    res.status(400).json(error)
  }
}

import { Request, Response } from 'express'
import getUser from '../../../server/functions/user/getUser'
import updateUser from '../../../server/functions/user/updateUser'

const functionMapping = {
  GET: getUser,
  UPDATE: updateUser,
}

export default async function handler(req: Request, res: Response) {
  const { method } = req;
  
  const subscriptionAction = functionMapping[method || 'GET'];

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

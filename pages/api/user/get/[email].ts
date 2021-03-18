import { Request, Response } from 'express'
import getUser from '../../../../server/functions/user/getUser'

export default async function handler(req: Request, res: Response) {
  const { method } = req;
  
  const { email } = req.query

  const stringEmail = email.toString().replace('@', '%40')

  try {
    const response = await getUser(stringEmail);

    if (response.status) {
      return res.status(response.code).json(response)
    }
    
    res.status(200).json(response)

  } catch (error) {
    res.status(400).json(error)
  }
}

import { Request, Response } from 'express'
import updateUser from '../../../../server/functions/user/updateUser'

export default async function handler(req: Request, res: Response) {
  const { userId } = req.query

  try {
    const response = await updateUser(req.body, userId.toString());

    if (response.status) {
      return res.status(response.code).json(response)
    }
    
    res.status(200).json(response)

  } catch (error) {
    res.status(400).json(error)
  }
}

import { NextApiRequest, NextApiResponse } from 'next'
import getBoard from './handlers/getOne'
import createBoard from './handlers/create'

const functionMapping = {
  POST: createBoard,
  GET: getBoard,
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  
  const boardAction = functionMapping[method];

  try {
    const response = await boardAction(req);

    const status = response.status || 200
    
    res.status(status).json(response)

  } catch (error) {
    const status = error.status || 400
    res.status(status).json(error)
  }
}

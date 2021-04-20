import { Request, Response } from 'express'
import axios from 'axios'
import { queryStringify } from '../../../../../src/utils' 

export default async function handler(req: Request, res: Response) {
  const url = `https://api.trello.com/1/boards`
  
  const { token } = req.query
  
  const parsedQueryParams = {
    key: process.env.TRELLO_KEY,
    token: token,
    idBoardSource: '607c511af177f001ab035cd1',
    keepFromSource: 'cards',
    name: `mentoria.tech | Jornada Front-End 3`,
    prefs_permissionLevel: 'private',
  }

  const querystring = queryStringify(parsedQueryParams)

  try {
    const { data } = await axios.post(`${url}?${querystring}`)

    res.status(200).json(data)
  } catch(error) {
    console.log('🚀 ~ file: [token].ts ~ line 26 ~ handler ~ error', error);
    res.status(400).json(error)
  }
}

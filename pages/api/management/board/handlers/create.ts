import { NextApiRequest } from 'next'
import axios from 'axios'
import { queryStringify } from '../../../../../src/utils' 

export default async function handler(req: NextApiRequest) {
  const url = `https://api.trello.com/1/boards`
  
  const { token, email } = JSON.parse(req.body)
  
  const parsedQueryParams = {
    key: process.env.TRELLO_KEY,
    token: token,
    idBoardSource: '607c511af177f001ab035cd1',
    keepFromSource: 'cards',
    name: `mentoria.tech | Jornada Front-End`,
    prefs_permissionLevel: 'private',
  }

  const querystring = queryStringify(parsedQueryParams)

  try {
    const { data: { id, shortUrl } } = await axios.post(`${url}?${querystring}`)
  
    const { data } =  await axios.post(`http://localhost:2107/api/v1/board`, {
      board_id: id, 
      url: shortUrl, 
      user_id: email 
    })
    
    return { successful: true, data }
  } catch(error) {
    return { successful: false, data: error }
  }
}

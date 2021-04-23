import { NextApiRequest } from 'next'
import axios from 'axios'
import { queryStringify, encodeEmail } from '../../../../../src/utils' 

export default async function handler(req: NextApiRequest) {
  const url = `http://localhost:2107/api/v1`
  const trelloUrl = `https://api.trello.com/1/batch`

  const { email, token } = req.query

  const encodedEmail = encodeEmail(email.toString())

  const parsedQueryParams = {
    key: process.env.TRELLO_KEY,
    token
  }

  const querystring = queryStringify(parsedQueryParams)
  
  try {
    const { data: { board_id } } =  await axios(`http://localhost:2107/api/v1/board/${encodedEmail}`)

    if (!board_id) {
      return { successful: false, data: 'No board', status: 404 }
    }

    const urls = [
      `/boards/${board_id}`,
      `/boards/${board_id}/lists`,
      `/boards/${board_id}/cards`
    ].join(',')

    const { data } = await axios(`${trelloUrl}/?${querystring}&urls=${urls}`)

    return { successful: true, data }

  } catch(error) {
    return { successful: false, data: error }
  }
}

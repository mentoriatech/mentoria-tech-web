import { Request, Response } from 'express'

import axios from "axios";

const queryStringify = (obj) => {
  return Object.keys(obj).map((prop) => `${prop}=${obj[prop]}`).join('&')

}

export default async function handler(req: Request, res: Response) {
  const url = `https://api.trello.com/1/boards`

  const parsedQueryParams = {
    apiKey: process.env.TRELLO_KEY,
    token: process.env.TRELLO_TOKEN,
    name: `mentoria.tech | ${req.body.name}`
  }

  const querystring = queryStringify(parsedQueryParams)

  const { data } = await axios.post(`${url}?${querystring}`)
  console.log('🚀 ~ file: board.ts ~ line 20 ~ handler ~ data', data.json());

  


}

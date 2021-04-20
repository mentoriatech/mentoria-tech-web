import { Request, Response } from 'express'

import axios from "axios";

const queryStringify = (obj) => {
  return Object.keys(obj).map((prop) => `${prop}=${obj[prop]}`).join('&')
};

export default async function handler(req: Request, res: Response) {
  const url = `${process.env.TRELLO_ROOT_URL}/authorize`;

  console.log({ url });
  
  const parsedQueryParams = {
    key: process.env.TRELLO_KEY,
    return_url: 'http://localhost:3000/dashboard/',
    callback_method: 'fragment',
    expiration: 'never',
    name: 'mentoria.tech',
    scope: 'write,read,account',
    response_type: 'fragment'
  }

  const querystring = queryStringify(parsedQueryParams);

  try {
    const { data } = await axios.get(`${url}?${querystring}`);

    res.status(200).json({ data });

  } catch(error) {
    res.status(400).json(error)
  }
}

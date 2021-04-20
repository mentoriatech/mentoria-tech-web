import { Request, Response } from 'express'

import axios from "axios";

export default async function handler(req: Request, res: Response) {
  const body = req.body

  const url = `https://raw.githubusercontent.com/mentoriatech/mentoria-tech-content/master/dashboard/journeys`


  const { data } = await axios.post(`${url}/`)
}

import { queryStringify, encodeEmail } from '../../../utils'

const getTrelloToken = (email: string) => 
  fetch(`/api/user/get/${email}`).then((data) => data.json()).catch((error) => null)

export const saveTrelloAuthorization = (email: string) => {
  const options = {
    method: 'PUT',
    body: JSON.stringify({ board_auth: true })
  }

  const encodedEmail = encodeEmail(email)

  fetch(`api/user/update/${encodedEmail}`, options).then((data) => data.json())
}

export const createBoard = async (token: string) => {
  const options = {
    method: 'POST',
  }

  return fetch(`/api/management/post/board/${token}`, options).then((data) => data.json())
}

export const getBoardAuthUrl = () => {
  const url = `${process.env.NEXT_PUBLIC_TRELLO_ROOT_URL}/authorize`
  
  const parsedQueryParams = {
    key: process.env.NEXT_PUBLIC_TRELLO_KEY,
    return_url: 'http://localhost:3000/dashboard/',
    callback_method: 'fragment',
    expiration: 'never',
    name: 'mentoria.tech',
    scope: 'write,read',
    response_type: 'token'
  }

  const querystring = queryStringify(parsedQueryParams)

  const authUrl = `${url}?${querystring}`

  return authUrl
}

export const saveToken = (email, token) => {
  const encodedEmail = encodeEmail(email)

  try {
    return saveTrelloAuthorization(encodedEmail)
  } catch(error) {
    console.log(error)
  }
}

export const fetchBoardData = async (email: string) => {
  try {
    fetch('/api/management/board')
  } catch (error) {
    console.log(error)
  }
}



import { queryStringify, encodeEmail } from '../../../utils'
import { CardType, ListType, BoardType } from './types'

export const saveTrelloAuthorization = (email: string) => {
  const options = {
    method: 'PUT',
    body: JSON.stringify({ board_auth: true })
  }

  const encodedEmail = encodeEmail(email)

  fetch(`api/user/update/${encodedEmail}`, options).then((data) => data.json())
}

export const createBoard = async (token: string, email: string) => {
  const options = {
    method: 'POST',
    body: JSON.stringify({ token, email })
  }

  return fetch(`/api/management/board`, options).then((data) => data.json())
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

export const saveToken = (email: string) => {
  const encodedEmail = encodeEmail(email)

  try {
    return saveTrelloAuthorization(encodedEmail)
  } catch(error) {
    return error
  }
}

export const fetchBoardData = (email: string, token: string) =>
  fetch(`/api/management/board/${email}?token=${token}`).then((data) => data.json())

export const mountManagementContent = (board: any) : BoardType => {

  if (!board?.data?.length) {
    return null
  }

  const rawBoard = board.data[0]['200']
  const rawLists = board.data[1]['200']
  const rawCards = board.data[2]['200']

  const mountCards = (id: string) => rawCards.reduce((acc: object, curr: CardType) => {
    if (curr.idList !== id) {
      return acc
    }

    return {
      ...acc,
      [curr.idList]: {
        id: curr.id,
        name: curr.name,
        url: curr.shortUrl,
        idList: curr.idList,
      }
    }
  }, {})

  const lists = rawLists.map((item: ListType) => ({
      id: item.id,
      name: item.name,
      cards: mountCards(item.id)
  }))

  return {
    id: rawBoard.id,
    name: rawBoard.name,
    url: rawBoard.shortUrl,
    lists,
  }
}

import { queryStringify, encodeEmail } from '../../../utils'
import { CardType, ListType, BoardDataType, BoardType } from './types'
import { BOARD_COLUMNS_RAW } from 'dashboard/constants'

export const saveTrelloAuthorization = (email: string): void => {
  const options = {
    method: 'PUT',
    body: JSON.stringify({ board_auth: true }),
  }

  const encodedEmail = encodeEmail(email)

  fetch(`api/server/user/${encodedEmail}`, options).then((data) => data.json())
}

export const createBoard = async (
  userId: number,
  journey: string,
): Promise<unknown> => {
  const options = {
    method: 'POST',
    body: JSON.stringify({ userId, journey }),
  }
  console.log('🚀 ~ file: ManageJourneyService.ts ~ line 24 ~ options', options)

  return fetch(`/api/server/board`, options).then((data) => data.json())
}

export const fetchBoardData = (email: string): Promise<unknown> =>
  fetch(`/api/server/board/${email}`).then((data) => data.json())

export const calculateProgress = (lists = []): number => {
  const done = lists.find(
    (list: ListType) => list.name === BOARD_COLUMNS_RAW.DONE,
  )
  const total = lists.reduce(
    (acc: number, curr: ListType) => curr.cards.length + acc,
    0,
  )

  return (done.cards.length * 100) / total
}

interface ManagementContentProps {
  data: unknown[];
}

export const mountManagementContent = (
  board: ManagementContentProps,
): BoardDataType => {
  if (!board?.data?.length) {
    return null
  }

  const rawBoard = board.data[0]['200']
  const rawLists = board.data[1]['200']
  const rawCards = board.data[2]['200']

  const mountCards = (id: string) =>
    rawCards.reduce((acc: [], curr: CardType) => {
      if (curr.idList !== id) {
        return acc
      }

      return [
        ...acc,
        {
          id: curr.id,
          name: curr.name,
          url: curr.shortUrl,
          idList: curr.idList,
        },
      ]
    }, [])

  const lists = rawLists.reduce((acc: [], curr: ListType) => {
    const list = {
      id: curr.id,
      name: curr.name,
      cards: mountCards(curr.id),
    }

    return [...acc, list]
  }, [])

  return {
    id: rawBoard.id,
    name: rawBoard.name,
    url: rawBoard.shortUrl,
    lists,
  }
}

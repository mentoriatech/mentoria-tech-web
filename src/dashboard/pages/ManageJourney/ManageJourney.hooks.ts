import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { BoardType } from './types'

import { 
  createBoard,
  fetchBoardData,
  saveTrelloAuthorization,
  mountManagementContent 
} from './ManageJourneyService'

export const useBoardToken = (email: string, path: string) => {
  const [boardToken, setToken] = useState(null)
  const [tokenReady, setTokenReady] = useState(false)
  const [cookies, setCookie] = useCookies()

  useEffect(() => {
    if(path.includes('#token=') && !boardToken) {
      const token = path.split('#token=')[1]
      
      if (token?.length && email?.length) {
        saveTrelloAuthorization(email)
        setToken(token)
        setTokenReady(true)
        setCookie('BoardToken', token)
      }
    }
  }, [path, email])

  useEffect(() => {
    if (cookies.BoardToken) {
      setToken(cookies.BoardToken)
    }
  }, [])

  return { boardToken, tokenReady }
}

export const useCreateBoard = (token: string, tokenReady: boolean, email: string) => {
  const [board, setBoard] = useState<BoardType>({ successful: false, data: {} })

  useEffect(() => {
    const boardCreation = async () => {
      try {
        const { id, url } = await createBoard(token, email)

        setBoard({ successful: true, data: { id, url }})
      } catch(error) {
        setBoard({ successful: false, data: error})
      }
    }

    if (!board.successful && tokenReady) {
      boardCreation()
    }
  }, [token, tokenReady])

  return { board }
}

export const useBoardData = (email: string, token: string) => {
  const [board, setBoard] = useState({ successful: false, data: {}})

  useEffect(() => {
    const getBoardData = async () => {
      try {
        const board = await fetchBoardData(email, token)
        const formattedBoard = mountManagementContent(board)
        setBoard({ successful: true, data: formattedBoard })
      } catch(error) {
        setBoard(error)
        return null
      }
    } 
  
    if (!board.successful && email?.length && token?.length){
      getBoardData()
    }
  }, [email, token])

  return { board, setBoard }
}

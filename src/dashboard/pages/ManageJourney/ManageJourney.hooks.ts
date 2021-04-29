import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { BoardType, BoardDataType } from './types'
import { BOARD_COLUMNS_RAW } from 'dashboard/constants'

import { 
  createBoard,
  fetchBoardData,
  saveTrelloAuthorization,
  mountManagementContent,
  calculateProgress,
  removeList
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
      setTokenReady(true)
    }
  }, [])

  return { boardToken, tokenReady }
}

export const useCreateBoard = (token: string, tokenReady: boolean, email: string) => {
  const [board, setBoard] = useState<BoardType>({ successful: false, data: {} })
  const [isBoardCreationLoading, setLoading] = useState(true)

  useEffect(() => {
    const boardCreation = async () => {
      try {
        const { id, url } = await createBoard(token, email)
        
        setBoard((prev) => (
          { 
            ...prev,
            successful: true, 
            data: { id, url }
          }
          ))
        setLoading(false)
      } catch(error) {
        setLoading(false)
        setBoard((prev) => (
          { 
            ...prev,
            successful: false, 
            data: error
          }
        ))
      }
    }

    console.log(!!board.successful, !!tokenReady, !!email?.length)
    if (!board.successful && tokenReady && email?.length) {
      console.log('aqui')
      boardCreation()
    }
  }, [token, tokenReady, email])

  return { board, isBoardCreationLoading }
}

export const useBoardData = (email: string, token: string) => {
  const [board, setBoard] = useState<BoardType>({ successful: false, data: {}, progress: 0 })

  useEffect(() => {
    const getBoardData = async () => {
      try {
        const board = await fetchBoardData(email, token)
        const formattedBoard = mountManagementContent(board)
        const filteredBoard = removeList(formattedBoard, BOARD_COLUMNS_RAW.DONE)
        const progress = calculateProgress(formattedBoard?.lists)
        setBoard({ successful: true, data: filteredBoard, progress })
      } catch(error) {
        setBoard(error)
      }
    }

    !board.successful && email?.length && token?.length && getBoardData()
  }, [email, token])

  return { board, setBoard }
}

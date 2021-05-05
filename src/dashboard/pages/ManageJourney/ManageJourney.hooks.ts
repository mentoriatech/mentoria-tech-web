import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { BoardType } from './types'
import { BOARD_COLUMNS_RAW } from 'dashboard/constants'

import {
  createBoard,
  fetchBoardData,
  saveTrelloAuthorization,
  mountManagementContent,
  calculateProgress,
  removeList,
} from './ManageJourneyService'

interface BoardToken {
  boardToken: string;
  tokenReady: boolean;
}

export const useBoardToken = (email: string, path: string): BoardToken => {
  const [boardToken, setToken] = useState(null)
  const [tokenReady, setTokenReady] = useState(false)
  const [cookies, setCookie] = useCookies()

  useEffect(() => {
    if (path.includes('#token=') && !boardToken) {
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

type SetBoardType = (prev: unknown) => void

interface CreateBoardReturn {
  isBoardCreationLoading: boolean;
}

export const useCreateBoard = (
  token: string,
  tokenReady: string,
  email: string,
  board: BoardType,
  setBoard: SetBoardType,
): CreateBoardReturn => {
  const [isBoardCreationLoading, setLoading] = useState(false)

  useEffect(() => {
    const boardCreation = async () => {
      try {
        const { id, url } = await createBoard(token, email)

        setBoard((prev) => ({
          ...prev,
          successful: true,
          data: { id, url },
        }))
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setBoard((prev) => ({
          ...prev,
          successful: false,
          data: error,
        }))
      }
    }

    if (!board.successful && tokenReady && email?.length) {
      setLoading(true)
      boardCreation()
    }
  }, [token, tokenReady, email])

  return { isBoardCreationLoading }
}

interface BoardDataReturn {
  board: BoardType;
  setBoard: (board: BoardType) => void;
}

export const useBoardData = (email: string, token: string): BoardDataReturn => {
  const [board, setBoard] = useState<BoardType>({
    successful: false,
    data: {},
    progress: 0,
  })

  useEffect(() => {
    const getBoardData = async () => {
      try {
        const board = await fetchBoardData(email, token)
        const formattedBoard = mountManagementContent(board)
        const filteredBoard = removeList(formattedBoard, BOARD_COLUMNS_RAW.DONE)
        const progress = calculateProgress(formattedBoard?.lists)
        setBoard({ successful: true, data: filteredBoard, progress })
      } catch (error) {
        setBoard(error)
      }
    }

    !board.successful && email?.length && token?.length && getBoardData()
  }, [email, token])

  return { board, setBoard }
}

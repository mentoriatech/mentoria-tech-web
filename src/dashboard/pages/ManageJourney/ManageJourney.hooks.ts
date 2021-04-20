import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { createBoard, fetchBoardData, saveTrelloAuthorization } from './ManageJourneyService'

export const useBoardToken = (email: string, token: string, path: string) => {
  const [boardToken, setToken] = useState(null)
  const [cookies, setCookie] = useCookies()

  useEffect(() => {
    if(path.includes('#token=') && !boardToken) {
      const token = path.split('#token=')[1]
      
      if (token?.length && email?.length) {
        saveTrelloAuthorization(email)
        setToken(token)
        setCookie('BoardToken', token)
      }
    }
  }, [path, email])

  useEffect(() => {
    if (cookies.BoardToken) {
      setToken(cookies.BoardToken)
    }
  }, [])

  return { boardToken }
}

export const useCreateBoard = async (token: string) => {
  const [board, setBoard] = useState(null)

  useEffect(() => {
    const boardCreation = async () => {
      console.log('eitcha lele')
      try {
        const result = await createBoard(token)
        console.log('🚀 ~ file: ManageJourney.hooks.ts ~ line 37 ~ boardCreation ~ result', result);
        setBoard(result)
      } catch(error) {
        console.log(error)
      }
    }

    if (!board || token.length) {
      boardCreation()
    }
  }, [token])

  return { board }
}

export const useBoardData = (email: string) => {
  const [board, setBoard] = useState(null)

  useEffect(() => {
    const getBoardData = async () => {
      try {
        const board = await fetchBoardData(email)
        setBoard(board)
      } catch(error) {
        console.log(error)
        return null
      }
    } 
  
    if (!board){
      getBoardData
    }
  }, [])

  return { board }
}

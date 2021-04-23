import { FC, useCallback } from 'react'
import { useRouter } from 'next/router'
import RocketIncon from 'svg/rocket'
import BoardIcon from 'svg/board'
import Layout from 'dashboard/containers/Layout'
import StepsManagement from 'dashboard/containers/StepsManagement'
import NoContent from 'dashboard/components/NoContent'

import { ManageJourneyProps } from './types'

import { 
  getBoardAuthUrl,
  createBoard 
} from './ManageJourneyService'

import { CustomButton, IconWrapper } from './ManageJourney.styles'
import { useBoardToken, useCreateBoard, useBoardData } from './ManageJourney.hooks'

export const ManageJourney: FC<ManageJourneyProps> = ({ content, ...props }) => {
  const { user } = props
  const router = useRouter()
  
  const { boardToken, tokenReady } = useBoardToken(user.email, router.asPath)
  
  useCreateBoard(boardToken, tokenReady, user.email)

  const { board, setBoard } = useBoardData(user.email, boardToken)

  const handleAuthorizeClick = useCallback(() => {
    const boardAuthUrl = getBoardAuthUrl()
    window.location.href = boardAuthUrl
  }, [])

  const handleCreateBoard = useCallback(() => (async () => {
    try {
      const board = await createBoard(boardToken, user.email)
      setBoard(board)
  
    } catch(error) {
      setBoard(error)
    }
  })(), [boardToken, user.email])

  const titleIcon = <RocketIncon />

  return (
    <Layout content={content} icon={titleIcon}>
      {!boardToken && !board && (
        <NoContent>
          <>
            <IconWrapper>
              <BoardIcon />
            </IconWrapper>
            Quando você começar sua jornada, poderá gerenciar por aqui, mas para isso precisamos criar um quadro no Trello para você.
              <CustomButton onClick={handleAuthorizeClick} variant="tertiary" size="normal">Criar quadro no Trello</CustomButton>
          </>
        </NoContent>
      )}
      {boardToken && !board.successful && (
        <NoContent>
          <>
            <IconWrapper>
              <BoardIcon />
            </IconWrapper>
            Parece que você ainda não tem um quadro no Trello para gerenciar sua jornada. Deseja criar um?
              <CustomButton onClick={handleCreateBoard} variant="tertiary" size="normal">Criar quadro no Trello</CustomButton>
          </>
        </NoContent>
      )}
      {console.log(board.data)}
      {board.successful && (
      <StepsManagement 
        // title={board.data.name}
        steps={[{}, {}]} 
      />)}
    </Layout>
  )
}

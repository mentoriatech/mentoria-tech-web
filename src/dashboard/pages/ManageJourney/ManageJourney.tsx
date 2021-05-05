import { FC, useCallback } from 'react'
import { useRouter } from 'next/router'
import RocketIncon from 'svg/rocket.svg'
import BoardIcon from 'svg/board.svg'
import Layout from 'dashboard/containers/Layout'
import Loading from 'shared/components/Loading'
import StepsManagement from 'dashboard/containers/StepsManagement'
import NoContent from 'dashboard/components/NoContent'
import Progress from 'dashboard/components/Progress'
import { ManageJourneyProps } from './types'

import { getBoardAuthUrl, createBoard } from './ManageJourneyService'

import { CustomButton, IconWrapper, StepsWrapper } from './ManageJourney.styles'
import {
  useBoardToken,
  useCreateBoard,
  useBoardData,
} from './ManageJourney.hooks'

export const ManageJourney: FC<ManageJourneyProps> = ({
  content,
  ...props
}) => {
  const { user } = props
  const router = useRouter()

  const { boardToken, tokenReady } = useBoardToken(user.email, router.asPath)

  const { board, setBoard } = useBoardData(user.email, boardToken)

  const { isBoardCreationLoading } = useCreateBoard(
    boardToken,
    tokenReady,
    user.email,
    board,
    setBoard,
  )

  const handleAuthorizeClick = useCallback(() => {
    const boardAuthUrl = getBoardAuthUrl()
    window.location.href = boardAuthUrl
  }, [])

  const handleCreateBoard = useCallback(
    () =>
      (async () => {
        try {
          const board = await createBoard(boardToken, user.email)
          setBoard(board)
        } catch (error) {
          setBoard(error)
        }
      })(),
    [boardToken, user.email],
  )

  const titleIcon = <RocketIncon />

  return (
    <Layout content={content} icon={titleIcon}>
      {isBoardCreationLoading && <Loading label="Aguarde..." />}
      {!boardToken && !board.successful && (
        <NoContent>
          <>
            <IconWrapper>
              <BoardIcon />
            </IconWrapper>
            Quando você começar sua jornada, poderá gerenciar por aqui, mas para
            isso precisamos criar um quadro no Trello para você.
            <CustomButton
              onClick={handleAuthorizeClick}
              variant="tertiary"
              size="normal"
            >
              Criar quadro no Trello
            </CustomButton>
          </>
        </NoContent>
      )}
      {boardToken && !board.successful && (
        <NoContent className="NoContent">
          <>
            <IconWrapper>
              <BoardIcon />
            </IconWrapper>
            Nenhum quadro foi encontrado 😔 Deseja criar um?
            <CustomButton
              onClick={handleCreateBoard}
              variant="tertiary"
              size="normal"
            >
              Criar quadro no Trello
            </CustomButton>
          </>
        </NoContent>
      )}
      {board.successful && (
        <StepsWrapper>
          <>
            {board.data?.lists?.map((list) => (
              <StepsManagement cards={list.cards} listName={list.name} />
            ))}
          </>
          <Progress num={board.progress} />
        </StepsWrapper>
      )}
    </Layout>
  )
}

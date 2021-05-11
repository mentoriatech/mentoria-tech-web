import { FC, useCallback, useState, useEffect } from 'react'
import RocketIncon from 'svg/rocket.svg'
import BoardIcon from 'svg/board.svg'
import Layout from 'dashboard/containers/Layout'
import Loading from 'shared/components/Loading'
import StepsManagement from 'dashboard/containers/StepsManagement'
import NoContent from 'dashboard/components/NoContent'
import Progress from 'dashboard/components/Progress'
import { ManageJourneyProps } from './types'
import { setUser } from 'store/userStore'

import { createBoard } from './ManageJourneyService'

import { CustomButton, IconWrapper, StepsWrapper } from './ManageJourney.styles'

export const ManageJourney: FC<ManageJourneyProps> = ({
  content,
  dispatch,
  ...props
}) => {
  const [loading, isLoading] = useState(true)
  const { user } = props
  console.log('🚀 ~ file: ManageJourney.tsx ~ line 23 ~ user', user)

  useEffect(() => {
    return user?.name && isLoading(false)
  }, [user?.name])

  const handleCreateBoard = useCallback(
    () =>
      (async () => {
        try {
          const boards = await createBoard(user.id)
          dispatch(setUser({ user: { ...user, boards } }))
          // setUser(board)
        } catch (error) {
          // setBoard(error)
        }
      })(),
    [user.email],
  )

  const layoutProps = {
    content,
    icon: <RocketIncon />,
  }
  return (
    <Layout {...layoutProps}>
      {loading && <Loading label="Aguarde..." />}
      {!user.boards?.id && (
        <NoContent>
          <>
            <IconWrapper>
              <BoardIcon />
            </IconWrapper>
            Quando você começar sua jornada, poderá gerenciar por aqui, mas para
            isso precisamos criar um projeto no GitHub para você.
            <CustomButton
              onClick={handleCreateBoard}
              variant="primary"
              size="normal"
            >
              Criar projeto
            </CustomButton>
          </>
        </NoContent>
      )}
      {user.boards?.id && (
        <StepsWrapper>
          <>
            {/* {user.boards?.lists?.map((list) => (
              <StepsManagement cards={list.cards} listName={list.name} />
            ))} */}
          </>
          {/* <Progress num={boardProgress} /> */}
        </StepsWrapper>
      )}
    </Layout>
  )
}

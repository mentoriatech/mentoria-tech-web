import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import RocketIncon from 'svg/rocket'
import BoardIcon from 'svg/board'
import Layout from 'dashboard/containers/Layout'
import StepsManagement from 'dashboard/containers/StepsManagement'
import NoContent from 'dashboard/components/NoContent'
import { getBoardAuthUrl } from './ManageJourneyService'
import { CustomButton, IconWrapper } from './ManageJourney.styles'
import { useBoardToken, useCreateBoard } from './ManageJourney.hooks'

export interface ManageJourneyProps {
  content: {
    title: string;
    description?: string;
  },
  dispatch?: (action: any) => void;
  user: {
    name: string;
    trelloToken: string;
    email: string;
  };
}

export const ManageJourney: FC<ManageJourneyProps> = ({ content, ...props }) => {
  const { user } = props
  const router = useRouter()
  
  const { boardToken } = useBoardToken(user.email, user.trelloToken, router.asPath)
  const { board } = useCreateBoard(boardToken)


  const handleAuthorizeClick = () => {
    const boardAuthUrl = getBoardAuthUrl()
    window.location.href = boardAuthUrl
  }

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
      {boardToken && board && <StepsManagement steps={[{}]} />}
    </Layout>
  )
}

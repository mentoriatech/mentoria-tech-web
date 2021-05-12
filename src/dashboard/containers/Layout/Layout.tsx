import React, { FC, useEffect, useState } from 'react'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import Sidebar from 'dashboard/containers/Sidebar'
import { actionType } from 'types'
import {
  Content,
  ContentHeader,
  ContentBody,
} from 'dashboard/containers/Content'
import Wrapper from 'dashboard/containers/Wrapper'
import MainWrapper from 'dashboard/components/MainWrapper'
import { DefaultHead } from 'shared/components/DefaultHead'
import TopBar from 'dashboard/containers/TopBar'
import { setUser } from 'store/userStore'
import { getUser } from './LayoutService'

interface LayoutProps {
  content?: {
    title: string,
    description?: string,
  };
  direction: string;
  icon?: Record<string, unknown>;
  dispatch?: (action: actionType) => void;
  user?: {
    name: string,
    email: string,
    trelloToken: string,
    ready?: boolean,
  };
}

export const Layout: FC<LayoutProps> = ({
  content,
  children,
  direction,
  icon,
  ...props
}) => {
  const [hasFullUser, setFullUser] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const { dispatch, user } = props
  const [session] = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!session) {
      router.push('/entrar')
      return
    }

    if (session && !user?.name?.length) {
      dispatch(setUser({ user: { ...user, ...session?.user, ready: true } }))
    }
  }, [session, user])

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true)
      try {
        const { data } = await getUser(session?.user?.email)

        dispatch(setUser({ user: { ...user, ...data, ready: false } }))
        setFullUser(true)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.log(
          '🚀 ~ file: Layout.tsx ~ line 61 ~ fetchUser ~ error',
          error,
        )
      }
    }

    if (!hasFullUser && session?.user?.email && !isLoading) {
      fetchUser()
    }
  }, [user.ready, session?.user?.email])

  return (
    <>
      <DefaultHead title={content.title} description={content.description} />
      <MainWrapper>
        <Wrapper>
          <Sidebar user={session?.user} />
          <Content>
            <ContentHeader>
              <TopBar title="Dashboard" icon={icon} />
            </ContentHeader>
            <ContentBody direction={direction}>{children}</ContentBody>
          </Content>
        </Wrapper>
      </MainWrapper>
    </>
  )
}

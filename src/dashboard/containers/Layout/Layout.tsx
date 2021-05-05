import React, { FC, useEffect, cloneElement } from 'react'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import Sidebar from 'dashboard/containers/Sidebar'
import { Content, ContentHeader, ContentBody } from 'dashboard/containers/Content'
import Wrapper from 'dashboard/containers/Wrapper'
import MainWrapper from 'dashboard/components/MainWrapper'
import { DefaultHead } from 'shared/components/DefaultHead'
import TopBar from 'dashboard/containers/TopBar'
import { setUser } from 'store/userStore'

interface LayoutProps {
  content: {
    title: string;
    description?: string;
  },
  icon?: object;
  dispatch?: (action: any) => void;
  user: {
    name: string;
    email: string;
    trelloToken: string;
  };
}


export const Layout: FC<LayoutProps> = ({ content, children, icon, ...props }) => {
  const { dispatch, user } = props
  const [session] = useSession()
  const router = useRouter()
  useEffect(() => {
    if (!session) {
      router.push('/entrar')
      return;
    } 
    
    if (session && !user?.name?.length) {
      dispatch(setUser({ user: { ...user, ...session?.user } }))
    }
    
  }, [session])
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
            <ContentBody>
              {children}
            </ContentBody>
          </Content>
        </Wrapper>
      </MainWrapper>
    </>
  )
}



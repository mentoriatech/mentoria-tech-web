import { FC } from 'react'
import Sidebar from 'dashboard/containers/Sidebar'
import { Content, ContentHeader, ContentBody } from 'dashboard/containers/Content'
import Wrapper from 'dashboard/containers/Wrapper'
import MainWrapper from 'dashboard/components/MainWrapper'
import { DefaultHead } from 'shared/components/DefaultHead'
import TopBar from 'dashboard/containers/TopBar'

interface LayoutProps {
  content: {
    title: string;
    description?: string;
  }
}

export const Layout: FC<LayoutProps> = ({ content, children }) => {
  return (
    <>
      <DefaultHead title={content.title} description={content.description} />
      <MainWrapper>
        <Wrapper>
          <Sidebar />
          <Content>
            <ContentHeader>
              <TopBar title="Dashboard" />
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



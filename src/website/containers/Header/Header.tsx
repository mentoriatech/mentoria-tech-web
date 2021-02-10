import TopBar from 'website/components/TopBar'
import Button from 'shared/components/Button'
import { Title, Subtitle } from 'shared/components/Typography'
import Container from 'shared/components/Container'
import { HeaderStyled, HeaderContent, SubtitleWrapper } from './Header.style'

export default function Header() {
  return (
    <HeaderStyled>
      <TopBar />
      <HeaderContent>
        <Container>
          <Title>mentoria em<br/>tecnologia<strong>_</strong></Title>
          <SubtitleWrapper>
            <Subtitle>Lorem ipsum dolor sit amet, consectetur adipis
  cing elit. Ex Jornada Front-End ex, et pellentesque
  orci sagittis eget. Sed tristique nibh lorem.</Subtitle>
            <Button>começar agora</Button>
          </SubtitleWrapper>
        </Container>
      </HeaderContent>
    </HeaderStyled>
  )
}

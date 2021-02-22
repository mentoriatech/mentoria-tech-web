import { 
  ChatWrapper, 
  ChatColumn, 
  ContainerStyled, 
  ChatIcon,
  ChatLabel,
  ChatImage,
 } from './Chat.styles'

 import Input from 'shared/components/Input'

 import Container from 'shared/components/Container'
 

export default function Chat() {
  return (
    <ChatWrapper className="ChatWrapper">
      <Container>
        <ContainerStyled>
          <ChatColumn>
            <ChatIcon src="/icons/slack.svg" />
            <ChatLabel>Lorem ipsum dolor sit amet, consectetur adipiscing</ChatLabel>
            <Input 
              buttonInline={true}
              buttonLabel="enviar"
              placeholder="seu@email.com" />
          </ChatColumn>
          <ChatColumn>
            <ChatImage src="/icons/chat.svg" />
          </ChatColumn>
        </ContainerStyled>
      </Container>
    </ChatWrapper>
  )
}

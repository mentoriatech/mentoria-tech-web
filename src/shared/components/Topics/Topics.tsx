import { FC } from 'react'
import { TopicsStyled , Topic } from './Topics.styles'

interface TopicsProps {
  data: Array<string>
}

export const Topics: FC<TopicsProps> = ({ data }) => {
  return (
    <TopicsStyled>
      {data.map((item) => <Topic>{item}</Topic>)}
    </TopicsStyled>
  )
}

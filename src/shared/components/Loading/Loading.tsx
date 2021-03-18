import { FC } from 'react'
import { Label, Spinner, Wrapper } from './Loading.styles'

interface LoadingProps {
  label?: string;
}

export const Loading: FC<LoadingProps> = ({ label }) => {
  return (
    <Wrapper>
      <Spinner>
        <div></div>
      </Spinner>
      <Label>{label}</Label>
    </Wrapper>
  )
}

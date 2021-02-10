import { TitleStyled, SubstitleStyled } from './Typography.styles';

export function Title({ children }) {
  return (
    <TitleStyled>{children}</TitleStyled>
  )
}

export function Subtitle({ children }) {
  return (
    <SubstitleStyled>{children}</SubstitleStyled>
  )
}

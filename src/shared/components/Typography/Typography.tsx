import { TitleStyled, SubstitleStyled } from './Typography.styles';

interface Title {
  children: any;
  color: string;
}

interface Subtitle {
  children: any;
  color: string; 
}

export function Title(props: Title) {
  return (
    <TitleStyled {...props}>{props.children}</TitleStyled>
  )
}

export function Subtitle(props: Subtitle) {
  return (
    <SubstitleStyled {...props}>{props.children}</SubstitleStyled>
  )
}

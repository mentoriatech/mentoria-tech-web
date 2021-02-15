import { TitleStyled, SubstitleStyled, SectionTitleStyled } from './Typography.styles';

interface Title {
  children: any;
  color: string;
}

interface Subtitle {
  children: any;
  color: string; 
}

interface SectionTitle {
  children: any;
  color: string; 
  prefix: string;
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

export function SectionTitle(props: SectionTitle) {
  return (
    <SectionTitleStyled {...props}>
      <strong>{props.prefix}</strong>
      {props.children}
    </SectionTitleStyled>
  )
}

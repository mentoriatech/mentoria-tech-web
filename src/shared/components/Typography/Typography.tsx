import { TitleStyled, SubtitleStyled, SectionTitleStyled, CustomLink } from './Typography.styles';

interface SectionTitle {
  children: any;
  color: string; 
  prefix: string;
}

export function SectionTitle(props: SectionTitle) {
  return (
    <SectionTitleStyled {...props}>
      <strong>{props.prefix}</strong>
      {props.children}
    </SectionTitleStyled>
  )
}

export { TitleStyled as Title, SubtitleStyled as Subtitle, CustomLink }

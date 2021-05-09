import Link from 'next/link'

import {
  SectionStyled,
  SectionTitleStyled,
  SectionDescription,
  SectionContentWrapper,
  SectionLinkWrapper,
  SectionLinkStyled,
} from './Section.styles'

interface Section {
  title?: string;
  description?: string;
  direction?: string;
  children: any;
}

export default function Section({
  title,
  description,
  direction,
  children,
}: Section) {
  return (
    <SectionStyled>
      {title && (
        <SectionTitleStyled spaceBottom={!description}>
          {title}
        </SectionTitleStyled>
      )}
      {description && <SectionDescription>{description}</SectionDescription>}
      <SectionContentWrapper direction={direction}>
        {children}
      </SectionContentWrapper>
    </SectionStyled>
  )
}

export function SectionLink({ href, label }) {
  return (
    <SectionLinkWrapper>
      <Link href={href}>
        <SectionLinkStyled>{label}</SectionLinkStyled>
      </Link>
    </SectionLinkWrapper>
  )
}

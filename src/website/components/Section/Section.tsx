import { FC } from 'react'
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
}

interface SectionLinkProps {
  href: string;
  label: string;
}

const Section: FC<Section> = ({ title, description, direction, children }) => (
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
const SectionLink: FC<SectionLinkProps> = ({ href, label }) => (
  <SectionLinkWrapper>
    <Link href={href}>
      <SectionLinkStyled>{label}</SectionLinkStyled>
    </Link>
  </SectionLinkWrapper>
)

export default Section
export { SectionLink }

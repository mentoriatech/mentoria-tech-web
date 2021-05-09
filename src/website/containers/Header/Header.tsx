import { FC } from 'react'
import { PrimaryButton } from 'shared/components/Button'
import { Title, Subtitle } from 'shared/components/Typography/'
import Link from 'next/link'

import {
  HeaderStyled,
  HeaderContent,
  SubtitleWrapper,
  HeaderChildren,
  HeaderContainer,
} from './Header.style'

interface HeaderProps {
  direction?: string;
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  buttonDestination?: string;
}

export const Header: FC<HeaderProps> = ({
  children,
  direction,
  title,
  subtitle,
  buttonLabel,
  buttonDestination,
}) => {
  return (
    <HeaderStyled className="Header">
      <HeaderContainer className="HeaderContainer">
        <HeaderContent className="Content" direction={direction}>
          {title && <Title>{title}</Title>}
          {subtitle && (
            <SubtitleWrapper>
              <Subtitle>{subtitle}</Subtitle>
              {buttonLabel && buttonDestination && (
                <Link href={buttonDestination}>
                  <PrimaryButton variant="primary" size="normal">
                    começar agora
                  </PrimaryButton>
                </Link>
              )}
            </SubtitleWrapper>
          )}
        </HeaderContent>
        <HeaderChildren>{children}</HeaderChildren>
      </HeaderContainer>
    </HeaderStyled>
  )
}

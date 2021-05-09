import { FC } from 'react'
import { LogoWrapper } from './Logo.style'

interface Logo {
  size: string;
}

export const Logo: FC<Logo> = ({ size }) => {
  return (
    <LogoWrapper size={size}>
      <img src="/icons/logo.svg" />
    </LogoWrapper>
  )
}

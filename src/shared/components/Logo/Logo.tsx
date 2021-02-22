import { LogoWrapper } from './Logo.style';

interface Logo {
  size: string;
}

export default function Logo({ size }: Logo) {
  return (
    <LogoWrapper size={size}>
      <img src="/icons/logo_negativo.svg" />
    </LogoWrapper>
  )
}

import { LogoWrapper } from './Logo.style';

interface Logo {
  size: string;
}

export default function Logo({ size }: Logo) {
  console.log('🚀 ~ file: Logo.tsx ~ line 8 ~ Logo ~ size', size);
  return (
    <LogoWrapper size={size}>
      <img src="/logo_negativo.svg" />
    </LogoWrapper>
  )
}

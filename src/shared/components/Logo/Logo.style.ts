import styled from 'shared/styles/styled'
import { css } from '@emotion/react'

const sizes = {
  mobile: {
    small: '140px',
    medium: '150px',
    large: '200px',
  },
  normal: {
    small: '200px',
    medium: '250px',
    large: '300px',
  },
}

export const LogoWrapper = styled('div')(
  ({ theme, size }) => css`
    width: ${size ? sizes.mobile[size] : sizes.mobile.medium};
    z-index: 1;

    @media screen and (min-width: ${theme.breakpoints.mega}px) {
      width: ${size ? sizes.normal[size] : sizes.normal.medium};
    }
  `,
)

export const Logo = styled('img')(
  () => css`
    width: 100%;
  `,
)

import styled from 'shared/styles/styled'
import Container from 'shared/components/Container'
import { css } from '@emotion/react'

export const ContainerStyled = styled(Container)(() => css`
  display: flex;
  padding: 16px 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`)

export const TopBarStyled = styled('div')(({ background }) => css`
  ${background && `
    background: rgb(61,5,123);
    background: linear-gradient(140deg, rgb(62, 8, 116) 0%, rgb(125, 9, 50) 100%);
  `}
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2;
`)

import { css } from '@emotion/react'
import styled from 'shared/styles/styled'
import Card from 'dashboard/components/Card'

export const ProgressNumber = styled('div')(({ theme }) => css`
  font-size: ${theme.typography.headings.tera.fontSize};
  color: ${theme.colors.brandPrimary.normal}
`); 

export const ProgressWrapper = styled('div')(({ theme }) => css`
  position: relative;
`);

export const ProgressAnimation = styled('div')(({ theme, animate }) => css`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 4px dotted ${theme.colors.brandPrimary.light};
  position: absolute;
  top: 0;
  margin auto 0 auto;
  opacity: 0;
  z-index: -1;
  

  ${animate && `animation: bg-animate .3s ease forwards;`}

  @keyframes bg-animate {
    from {
      opacity: .5;
      top: -5px;
      left: -5px;
      width: 210px;
      height: 210px;
      background-color: ${theme.colors.brandSupport.normal};
    }
    to {
      top: -10px;
      left: -10px;
      width: 220px;
      height: 220px;
      background-color: ${theme.colors.brandSupport.normal};
    }

  }
`); 

export const ProgressCard = styled(Card)(({ theme }) => css`
  background-color: ${theme.colors.white};
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.text};
  position: relative;
  overflow: visible;
  
`);


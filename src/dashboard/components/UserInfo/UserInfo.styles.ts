import { css } from '@emotion/react'
import styled from 'shared/styles/styled'
import EditIcon from 'svg/edit.svg'

export const CustomEditIcon = styled(EditIcon)(
  ({ theme }) => css`
    fill: ${theme.colors.white};
    width: 12px;
    height: 20px;
    cursor: pointer;
    margin: 0 0 3px ${theme.spacings.kilo};

    &:hover {
      opacity: 0.7;
    }
  `,
)

export const UserContent = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
  `,
)

export const Wrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${theme.spacings.tera};
    border-bottom: 1px solid ${theme.colors.white};
  `,
)

export const UserPicture = styled('img')(
  ({ theme }) => css`
    width: 120px;
    height: 120px;
    border-radius: 50%;
  `,
)

export const UserName = styled('div')(
  ({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.typography.headings.kilo.fontSize};
    font-weight: ${theme.fontWeight.normal};
    display: flex;
    align-items: center;
    text-align: center;
    margin-top: ${theme.spacings.giga};
  `,
)

export const UserEmail = styled('div')(
  ({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.typography.text.kilo.fontSize};
  `,
)

import { css } from '@emotion/react'
import styled from 'shared/styles/styled'

export const ActionsWrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    justify-content: flex-end;

    button:not(:last-of-type) {
      margin-right: ${theme.spacings.kilo};
    }
  `,
)

export const Form = styled('form')(
  () => css`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,
)

export const InputStyled = styled('input')(
  ({ theme, stretch }) => css`
    width: ${stretch ? '100%' : 'auto'};
    background-color: ${theme.colors.grey.light};
    font-size: ${theme.typography.text.mega.fontSize};
    border-radius: 15px;
    padding: ${theme.spacings.kilo};
    border: none;
    font-family: ${theme.fontStack.default};
    outline: 0;
    color: ${theme.colors.text};

    &::-webkit-input-placeholder {
      color: ${theme.colors.grey.dark};
    }
    &:-moz-placeholder {
      /* FF 4-18 */
      color: ${theme.colors.grey.dark};
      opacity: 1;
    }
    &::-moz-placeholder {
      /* FF 19+ */
      color: ${theme.colors.grey.dark};
      opacity: 1;
    }
    &:-ms-input-placeholder {
      /* IE 10+ */
      color: ${theme.colors.grey.dark};
    }
    &::-ms-input-placeholder {
      /* Microsoft Edge */
      color: ${theme.colors.grey.dark};
    }
    &::placeholder {
      color: ${theme.colors.grey.dark};
      opacity: 0.7;
    }
  `,
)

export const Fieldset = styled('fieldset')(
  ({ theme }) => css`
    padding: 0 0 ${theme.spacings.mega};
    border: none;
  `,
)

export const Label = styled('label')(
  ({ theme }) => css`
    margin: 0 0 ${theme.spacings.byte};
    color: ${theme.colors.grey.dark};
    display: block;
  `,
)

export const Hint = styled('label')(
  ({ theme, icon, align }) => css`
    font-size: 12px;
    color: ${theme.colors.grey.dark};
    cursor: pointer;
    transition: all 0.2s linear;
    text-align: ${align || 'left'};

    &:after {
      content: '';
      width: 10px;
      height: 10px;
      background-image: url('${icon}');
      background-size: cover;
      display: inline-block;
      margin-left: ${theme.spacings.bit};
    }

    &:hover {
      color: ${theme.colors.brandPrimary.normal};
      text-decoration: underline;
    }
  `,
)

export const TextAreaStyled = styled('textarea')(
  ({ theme }) => css`
    max-width: 100%;
    width: 100%;
    min-height: 100px;
    background-color: ${theme.colors.grey.light};
    font-size: ${theme.typography.text.mega.fontSize};
    border-radius: 15px;
    padding: ${theme.spacings.kilo};
    border: none;
    font-family: ${theme.fontStack.default};
    outline: 0;
    color: ${theme.colors.text};
  `,
)

export const CustomSelect = styled('select')(
  ({ theme }) => css`
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 100%;
    background-color: ${theme.colors.grey.light};
    font-size: ${theme.typography.text.mega.fontSize};
    border-radius: 15px;
    padding: ${theme.spacings.kilo};
    border: none;
    font-family: ${theme.fontStack.default};
    outline: 0;
    color: ${theme.colors.text};
    position: relative;

    &::-webkit-input-placeholder {
      color: ${theme.colors.grey.dark};
    }
    &:-moz-placeholder {
      /* FF 4-18 */
      color: ${theme.colors.grey.dark};
      opacity: 1;
    }
    &::-moz-placeholder {
      /* FF 19+ */
      color: ${theme.colors.grey.dark};
      opacity: 1;
    }
    &:-ms-input-placeholder {
      /* IE 10+ */
      color: ${theme.colors.grey.dark};
    }
    &::-ms-input-placeholder {
      /* Microsoft Edge */
      color: ${theme.colors.grey.dark};
    }
    &::placeholder {
      color: ${theme.colors.grey.dark};
      opacity: 0.7;
    }
  `,
)

export const Option = styled('option')(({ theme }) => css``)

export const RadioLabel = styled('label')(
  ({ theme }) => css`
    padding: ${theme.spacings.byte} 0;
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
)

export const CustomRadio = styled('input')(
  ({ theme }) => css`
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    appearance: none;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    transition: all 0.15s ease-out 0s;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    margin-right: ${theme.spacings.kilo};
    outline: none;
    position: relative;
    z-index: 10;
    background-color: ${theme.colors.grey.light};

    &:checked {
      background: ${theme.colors.brandSecondary.normal};
    }

    &:hover {
      background: ${theme.colors.brandSecondary.normal};
    }

    &:checked::before {
      border: 2px solid ${theme.colors.black};
      height: 20px;
      width: 20px;
      border-radius: 50%;
      position: absolute;
      content: '✔';
      color: ${theme.colors.black};
      display: inline-block;
      font-size: 12px;
      text-align: center;
      line-height: 20px;
      z-index: 1;
      margin-left: 2px;
      margin-top: 1px;
    }

    &:checked::after {
      -webkit-animation: click-wave 0.65s;
      -moz-animation: click-wave 0.65s;
      animation: click-wave 0.65s;
      background: #40e0d0;
      content: '';
      display: block;
      position: relative;
      z-index: 100;
    }
  `,
)

import { css } from '@emotion/react'
import styled from 'shared/styles/styled'
import { colors, spacings, fontStack } from 'shared/styles/theme/light'

export const ActionsWrapper = styled('div')(({ theme }) => css`
  display: flex;
  justify-content: flex-end;

  button:not(:last-of-type) {
    margin-right: ${theme.spacings.kilo};
  }
`);

export const Form = styled('form')(() => css`
  display: flex;
  flex-direction: column;
  width: 100%;
`);

export const InputStyled = styled('input')(({ theme, stretch }) => css`
  width: ${stretch ? '100%' : 'auto'};
  background-color: ${theme.colors.grey.light};
  border-radius: 15px;
  padding: ${theme.spacings.kilo};
  border: none;
  font-family: ${theme.fontStack.default};
  outline: 0;
  color: ${theme.colors.grey.dark}
  
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
    opacity: .7;
  }
`);

export const Fieldset = styled('fieldset')(({ theme }) => css`
  padding: 0 0 ${theme.spacings.mega};
  border: none;
`);

export const Label = styled('label')(({ theme }) => css`
  margin: 0 0 ${theme.spacings.byte};
  color: ${theme.colors.grey.dark};
  display: block;
`);

export const Hint = styled('label')(({ theme, icon, align }) => css`
  font-size: 12px;
  color: ${theme.colors.grey.dark};
  cursor: pointer;
  transition: all .2s linear;
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
`);

export const TextAreaStyled = styled('textarea')(({ theme }) => css`
  max-width: 100%;
  width: 100%;
  min-height: 100px;
  background-color: ${theme.colors.grey.light};
  border-radius: 15px;
  padding: ${theme.spacings.kilo};
  border: none;
  font-family: ${theme.fontStack.default};
  outline: 0;
  color: ${theme.colors.grey.dark}
`);

export const customStyles = {
  control: (provided) => ({
    ...provided,
    border: 'none',
    paddingLeft: spacings.kilo,
    fontFamily: fontStack.default,
    fontSize: '13px',
    backgroundColor: colors.grey.light,
    borderRadius: '15px',
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: 0
  }),
  placeholder: (provided) => ({
    ...provided,
    color: colors.grey.dark,
    opacity: .7,
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: colors.grey.normal,
    
  })
}


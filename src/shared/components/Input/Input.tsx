import { InputWrapper, InputStyled, InputButton } from './Input.styles'

interface Input {
  placeholder: string;
  buttonInline?: boolean;
  buttonLabel?: string;
  onButtonClick?: string;
}

export default function Input(props : Input) {
  return (
    <InputWrapper>
      <InputStyled {...props} />
      {props.buttonInline && (
        <InputButton variant="primary" size="normal" onClick={props.onButtonClick}>{props.buttonLabel}</InputButton>
      )}
    </InputWrapper>
  )
}

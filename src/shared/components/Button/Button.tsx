import { PrimaryButton } from './Button.styles'

export default function Button(props) {
  return (
    <PrimaryButton {...props}>
      {props.children}
    </PrimaryButton>
  )
}

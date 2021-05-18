import { FC, forwardRef, MouseEvent, SyntheticEvent } from 'react'

import {
  InputStyled,
  Label,
  Hint,
  TextAreaStyled,
  Fieldset,
  Form,
  ActionsWrapper,
  CustomSelect,
  Option,
  CustomRadio,
  RadioLabel,
} from './Form.styles'

import { PrimaryButton } from 'shared/components/Button'

type OptionsProps = {
  value: string,
  label: string,
  selected?: boolean,
  default?: boolean,
}

type FieldProps = {
  name: string,
  isMulti?: boolean,
  type?: string,
  required?: boolean,
  componentType?: string,
  placeholder?: string,
  stretch?: boolean,
  label?: string,
  hint?: string,
  onHintHover?: (event: MouseEvent) => void,
  onChange?: (event: SyntheticEvent) => void,
  options?: Array<OptionsProps>,
  characterLimit?: number,
  defaultValue?: string,
}

type DefaultValuesProps = {
  name: string,
  pronouns: string,
  occupation: string,
  description?: string,
}

interface FormProps {
  register?: () => void;
  defaultValues?: DefaultValuesProps;
  submitLabel: string;
  cancelLabel?: string;
  onSubmit?: (event: SyntheticEvent) => void;
  onCancel?: (event: SyntheticEvent) => void;
  fields: Array<FieldProps>;
  submitDisabled?: boolean;
}

export const RadioButton: FC<FieldProps> = forwardRef(
  ({ label, hint, onHintHover, ...props }, ref) => {
    return (
      <Fieldset>
        {label && <Label>{label}</Label>}
        {props.options.map((option) => (
          <RadioLabel>
            <CustomRadio
              type="radio"
              name="example"
              checked
              ref={ref}
              {...props}
            />
            {option.label}
          </RadioLabel>
        ))}
        {hint && <Hint onHover={onHintHover}>{hint}</Hint>}
      </Fieldset>
    )
  },
)

export const Input: FC<FieldProps> = forwardRef(
  ({ label, hint, onHintHover, ...props }, ref) => {
    return (
      <Fieldset>
        {label && <Label>{label}</Label>}
        <InputStyled ref={ref} {...props} />
        {hint && <Hint onHover={onHintHover}>{hint}</Hint>}
      </Fieldset>
    )
  },
)

export const TextArea: FC<FieldProps> = forwardRef(
  ({ label, defaultValue, ...props }, ref) => {
    return (
      <Fieldset>
        {label && <Label>{label}</Label>}
        <TextAreaStyled
          ref={ref}
          defaultValue={defaultValue}
          {...props}
        ></TextAreaStyled>
      </Fieldset>
    )
  },
)

export const Select: FC<FieldProps> = forwardRef(
  ({ label, hint, options, onHintHover, ...props }, ref) => {
    return (
      <Fieldset>
        {label && <Label>{label}</Label>}
        <CustomSelect ref={ref} {...props}>
          {options.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </CustomSelect>
        {hint && <Hint onHover={onHintHover}>{hint}</Hint>}
      </Fieldset>
    )
  },
)

const fieldComponents = {
  input: Input,
  textarea: TextArea,
  select: Select,
  radio: RadioButton,
}

export const GeneratedForm: FC<FormProps> = ({
  register,
  defaultValues,
  fields,
  submitLabel,
  cancelLabel,
  submitDisabled,
  onSubmit,
  onCancel,
}) => {
  return (
    <>
      <Form onSubmit={onSubmit}>
        {fields.map((field) => {
          const FieldComponent = fieldComponents[field.componentType]
          const defaultValue = defaultValues ? defaultValues[field.name] : ''
          return (
            <FieldComponent
              defaultValue={defaultValue}
              key={field.name}
              {...field}
              ref={register}
            />
          )
        })}
        <ActionsWrapper>
          {onCancel && (
            <PrimaryButton variant="secondary" size="normal">
              {cancelLabel}
            </PrimaryButton>
          )}
          <PrimaryButton
            variant="primary"
            size="normal"
            type="submit"
            disabled={submitDisabled}
          >
            {submitLabel}
          </PrimaryButton>
        </ActionsWrapper>
      </Form>
    </>
  )
}

export { Hint }

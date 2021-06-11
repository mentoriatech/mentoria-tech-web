import { FC, forwardRef, MouseEvent, BaseSyntheticEvent } from 'react'

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
  onChange?: (name: string, value: string) => void,
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
  onSubmit?: (event: BaseSyntheticEvent) => void;
  onCancel?: (event: BaseSyntheticEvent) => void;
  onChange?: (name: string, value: string) => void;
  fields: Array<FieldProps>;
  submitDisabled?: boolean;
}

type onChangeType = (name: string, value: string) => void

const beforeChange = (name: string, value: string, onChange?: onChangeType) => {
  if (onChange) {
    onChange(name, value)
  }
}

export const RadioButton: FC<FieldProps> = forwardRef(
  ({ label, hint, onHintHover, onChange, ...props }, ref) => {
    return (
      <Fieldset>
        {label && <Label>{label}</Label>}
        {props.options.map((option) => (
          <RadioLabel
            onChange={(e: BaseSyntheticEvent) =>
              beforeChange(props.name, e.target.value, onChange)
            }
          >
            <CustomRadio
              value={option.value}
              type="radio"
              name="example"
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
  ({ label, hint, onHintHover, onChange, ...props }, ref) => {
    return (
      <Fieldset>
        {label && <Label>{label}</Label>}
        <InputStyled
          onChange={(e: BaseSyntheticEvent) =>
            beforeChange(props.name, e.target.value, onChange)
          }
          ref={ref}
          {...props}
        />
        {hint && <Hint onHover={onHintHover}>{hint}</Hint>}
      </Fieldset>
    )
  },
)

export const TextArea: FC<FieldProps> = forwardRef(
  ({ label, defaultValue, onChange, ...props }, ref) => {
    return (
      <Fieldset>
        {label && <Label>{label}</Label>}
        <TextAreaStyled
          ref={ref}
          onChange={(e: BaseSyntheticEvent) =>
            beforeChange(props.name, e.target.value, onChange)
          }
          defaultValue={defaultValue}
          {...props}
        ></TextAreaStyled>
      </Fieldset>
    )
  },
)

export const Select: FC<FieldProps> = forwardRef(
  ({ label, hint, options, onHintHover, onChange, ...props }, ref) => {
    return (
      <Fieldset>
        {label && <Label>{label}</Label>}
        <CustomSelect
          ref={ref}
          {...props}
          onChange={(e: BaseSyntheticEvent) =>
            beforeChange(props.name, e.target.value, onChange)
          }
        >
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
  onChange,
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
              onChange={onChange}
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

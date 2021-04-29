import { FC, forwardRef } from 'react'
import MultiSelect from 'react-select'
import { RegisterOptions } from 'react-hook-form'

import { 
  InputStyled, 
  Label, 
  Hint, 
  TextAreaStyled, 
  Fieldset,
  Form,
  ActionsWrapper,
  CustomSelect,
  Option
} from './Form.styles'

import { PrimaryButton } from 'shared/components/Button'

type OptionsProps = {
  value: string,
  label: string,
  selected?: boolean,
  default?: boolean,
}

type FieldProps = {
  name: string;
  isMulti?: boolean,
  type?: string;
  required?: boolean;
  componentType?: string;
  placeholder?: string;
  stretch?: boolean;
  label?: string;
  hint?: string;
  onHintHover?(e: any): void;
  onChange?(e: any): void;
  options?: Array<OptionsProps>;
  characterLimit?: number;
  defaultValue?: string;
}

type DefaultValuesProps = {
  name: string;
  gender: string;
  occupation: string;
  description?: string;
}

interface FormProps {
  register?(): void;
  defaultValues?: DefaultValuesProps;
  submitLabel: string;
  cancelLabel?: string;
  onSubmit?(e: any): void;
  onCancel?(e: any): void;
  fields: Array<FieldProps>;
  submitDisabled?: boolean;
}

export const Input: FC<FieldProps> = forwardRef(({
  type,
  label,
  hint,
  onHintHover = () => {},
  ...props
}, ref) => {
  return (
    <Fieldset>
      {label && <Label>{label}</Label>}
      <InputStyled
        ref={ref}
        {...props}
      />
      {hint && <Hint onHover={onHintHover}>{hint}</Hint>}
    </Fieldset>
  )
})

export const TextArea: FC<FieldProps> = forwardRef(({
  label,
  defaultValue,
  ...props
}, ref) => {
  return (
    <Fieldset>
      {label && <Label>{label}</Label>}
      <TextAreaStyled
        ref={ref}
        defaultValue={defaultValue}
        {...props}
      >
      </TextAreaStyled>
    </Fieldset>
  )
})

export const Select: FC<FieldProps> = forwardRef(({
  isMulti,
  label,
  hint,
  options,
  onHintHover = () => {},
  ...props
}, ref) => {
  return (
    <Fieldset>
      {label && <Label>{label}</Label>}
      <CustomSelect ref={ref} {...props}>
        {options.map((option) => 
          <Option key={option.value} value={option.value}>{option.label}</Option>
        )}
      </CustomSelect>
      {hint && <Hint onHover={onHintHover}>{hint}</Hint>}
    </Fieldset>
  )
})

const fieldComponents = {
  input: Input,
  textarea: TextArea,
  select: Select,
}

export const GeneratedForm: FC<FormProps> = ({
  register,
  defaultValues,
  fields,
  submitLabel,
  cancelLabel,
  submitDisabled,
  onSubmit,
  onCancel 
}) => {
    return (
      <>
        <Form onSubmit={onSubmit}>
          {fields.map((field) => {
            const FieldComponent = fieldComponents[field.componentType]
            const defaultValue = defaultValues[field.name]
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
            {onCancel && <PrimaryButton variant="secondary" size="normal">{cancelLabel}</PrimaryButton>}
            <PrimaryButton 
              variant="tertiary"
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

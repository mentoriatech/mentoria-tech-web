import { FC } from 'react'
import MultiSelect from 'react-select'
import { 
  InputStyled, 
  Label, 
  Hint, 
  TextAreaStyled, 
  Fieldset,
  Form,
  customStyles,
  ActionsWrapper,
} from './Form.styles'

import { PrimaryButton } from 'shared/components/Button'

type OptionsProps = {
  value: string,
  label: string,
  selected?: boolean,
  default?: boolean,
}

type FieldProps = {
  isMulti?: boolean,
  type?: string;
  required?: boolean;
  componentType?: string;
  placeholder?: string;
  stretch?: boolean;
  label?: string;
  hint?: string;
  onHintHover?(): any;
  onChange?(): any;
  options?: Array<OptionsProps>;
  characterLimit?: number;
}

interface FormProps {
  submitLabel: string;
  cancelLabel?: string;
  onSubmit?(e: any): void;
  onCancel?(e: any): void;
  fields: Array<FieldProps>;
}

export const Input: FC<FieldProps> = ({
  type,
  placeholder,
  stretch,
  label,
  hint,
  required,
  onHintHover = () => {}
}) => {
  return (
    <Fieldset>
      {label && <Label>{label}</Label>}
      <InputStyled
        placeholder={placeholder}
        type={type}
        stretch={stretch}
        required={required}
      />
      {hint && <Hint onHover={onHintHover}>{hint}</Hint>}
    </Fieldset>
  )
}

export const TextArea: FC<FieldProps> = ({
  characterLimit,
  placeholder,
  label,
}) => {
  return (
    <Fieldset>
      {label && <Label>{label}</Label>}
      <TextAreaStyled
        placeholder={placeholder}
        maxLength={characterLimit}
      >
      </TextAreaStyled>
    </Fieldset>
  )
}

export const Select: FC<FieldProps> = ({
  options,
  isMulti,
  label,
  placeholder,
  hint,
  onHintHover = () => {},
}) => {
  return (
    <Fieldset>
      {label && <Label>{label}</Label>}
      <MultiSelect
        styles={customStyles}
        prefix="select"
        options={options}
        isMulti={isMulti}
        placeholder={placeholder}
      />
      {hint && <Hint onHover={onHintHover}>{hint}</Hint>}
    </Fieldset>
  )
}

const fieldComponents = {
  input: Input,
  textarea: TextArea,
  select: Select,
}

export const GeneratedForm: FC<FormProps> = ({ 
  fields,
  onSubmit,
  submitLabel,
  cancelLabel,
  onCancel }) => {
  return (
    <>
      <Form onSubmit={onSubmit}>
        {fields.map((field) => {
          const FieldComponent = fieldComponents[field.componentType]
          return (
            <FieldComponent 
              {...field}
            />                                                                       
          )
        })}
        <ActionsWrapper>
          {onCancel && <PrimaryButton variant="secondary" size="normal">{cancelLabel}</PrimaryButton>}
          <PrimaryButton variant="primary" size="normal" type="submit">{submitLabel}</PrimaryButton>
        </ActionsWrapper>
      </Form>
    </>
  )
} 

export { Hint }

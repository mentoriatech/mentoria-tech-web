import { FC } from 'react'
import MultiSelect from 'react-select'
import { 
  InputStyled, 
  Label, 
  Hint, 
  TextAreaStyled, 
  Fieldset,
  Form,
  customStyles 
} from './Form.styles'

import Button from 'shared/components/Button'

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
  onSubmit?(e: any): void;
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

export const GeneratedForm: FC<FormProps> = ({ fields, onSubmit, submitLabel }) => {
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
        <Button type="submit">{submitLabel}</Button>
      </Form>
    </>
  )
} 

type OptionsProps = {
  value: string,
  label: string,
  selected?: boolean,
  default?: boolean,
}

type FieldProps = {
  name: string;
  defaultValue?: string;
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
}

type UserFields = {
  name?: string;
  gender?: string;
  occupation?: string;
  description?: string;
}

const removeEmptyFields = (fields: UserFields) => {
  const newObj = {}

    Object.keys(fields).forEach((prop) => {
      if (fields[prop]) {
        newObj[prop] = fields[prop]
      }
    })

    return newObj
}

export const getUser = (email: string) => 
  fetch(`/api/user/get/${email}`).then((data) => data.json())


export const updateUser = async (id: number, body: UserFields) => {
  const cleanBody = removeEmptyFields(body)

  const options = {
    method: 'PUT',
    body: JSON.stringify(cleanBody)
  }

  return fetch(`/api/user/update/${id}`, options).then((data) => data.json())
}

export const formatDefaultValues = (values) => {
  return {
    name: values.name,
    gender: values.gender,
    occupation: values.occupation,
    description: values.description
  }
}

export const formFields = {
  submitLabel: 'salvar',
  cancelLabel: 'cancelar',
  fields: [
    {
      name: 'name',
      componentType: 'input',
      type: 'text',
      placeholder: 'Maria Silva',
      stretch: true,
      label: 'Como devemos te chamar?',
    },
    {
      name: 'gender',
      componentType: 'select',
      placeholder: 'Selecione',
      stretch: true,
      label: 'Como você se identifica?',
      hint: 'Por que perguntamos isso?',
      onHintHover: (e: any) => {

      },
      options: [
        {
          value: 'MALE',
          label: 'Homem',
        },
        {
          value: 'FEMALE',
          label: 'Mulher',
        },
        {
          value: 'TRANS-FEMALE',
          label: 'Mulher Transsexual',
        },
        {
          value: 'TRANS-MALE',
          label: 'Homem Transsexual',
        },
        {
          value: 'NON-BINARY',
          label: 'Homem',
        }
      ]
    },
    {
      name: 'occupation',
      componentType: 'input',
      type: 'text',
      placeholder: 'Ex: Front-End na Startup Bacana',
      stretch: true,
      label: 'O que você faz hoje?',
    },
    {
      name: 'description',
      componentType: 'textarea',
      stretch: true,
      label: 'Se abresente de forma breve',
      characterLimit: 240,
    }
  ]
}

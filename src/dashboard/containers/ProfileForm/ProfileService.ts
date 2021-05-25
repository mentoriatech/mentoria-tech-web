import { UserType, UpdateUserResponse } from 'types'

type UserFields = {
  name?: string,
  gender?: string,
  occupation?: string,
  description?: string,
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

type GetUserResponse = {
  data: UserType,
}

export const getUser = (email: string): Promise<GetUserResponse> =>
  fetch(`/api/server/user/${email}`).then((data) => data.json())

export const updateUser = async (
  email: string,
  body: UserFields,
): Promise<UpdateUserResponse> => {
  const cleanBody = removeEmptyFields(body)

  const options = {
    method: 'PUT',
    body: JSON.stringify(cleanBody),
  }

  return fetch(`/api/server/user/${email}`, options).then((data) => data.json())
}

type DefaultValues = {
  name: string,
  pronouns: string,
  occupation: string,
  description: string,
}
export const formatDefaultValues = (values: UserType): DefaultValues => {
  return {
    name: values.name,
    pronouns: values.pronouns,
    occupation: values.occupation,
    description: values.description,
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
      name: 'pronouns',
      componentType: 'select',
      placeholder: 'Selecione',
      stretch: true,
      label: 'Quais são os seus pronomes?',
      options: [
        {
          value: 'SHE',
          label: 'Ela/Dela',
        },
        {
          value: 'HE',
          label: 'Ele/Dele',
        },
        {
          value: 'THEM',
          label: 'Elu/Delu',
        },
      ],
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
    },
  ],
}

import { UpdateUserResponse, UserTypeState } from 'types'
import { removeEmptyFields } from 'utils/index'

export const updateUser = async (
  email: string,
  body: UserTypeState,
): Promise<UpdateUserResponse> => {
  const cleanBody = removeEmptyFields(body)

  const options = {
    method: 'PUT',
    body: JSON.stringify({ ...cleanBody }),
  }

  return fetch(`/api/server/user/${email}`, options).then((data) => data.json())
}

export const formFields = {
  submitLabel: 'salvar',
  cancelLabel: 'cancelar',
  fields: [
    {
      name: 'weekly_time',
      componentType: 'radio',
      stretch: true,
      label: 'Qual sua disponibilidade semanal?',
      options: [
        {
          value: '2',
          label: '2 horas por semana',
        },
        {
          value: '4',
          label: '4 horas por semana',
        },
        {
          value: '6',
          label: '6 horas por semana',
        },
        {
          value: 'flex',
          label: 'Flexível',
        },
      ],
    },
    {
      name: 'journey',
      componentType: 'select',
      placeholder: 'Selecione',
      stretch: true,
      label: 'Para qual jornada você pode oferecer mentoria?',
      options: [
        {
          value: 'front-end',
          label: 'Front-End',
        },
      ],
    },
  ],
}

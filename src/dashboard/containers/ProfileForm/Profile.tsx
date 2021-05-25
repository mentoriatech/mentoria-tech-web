import { FC, SyntheticEvent, Dispatch, useState } from 'react'
import { useForm } from 'react-hook-form'
import Form from 'shared/components/Form'
import Loading from 'shared/components/Loading'
import Card from 'dashboard/components/Card'
import { formFields, updateUser } from './ProfileService'
import { actionType, UserType } from 'types'
import { setUser } from 'store/userStore'

const { GeneratedForm } = Form

type ProfileContent = {
  title: string,
  description?: string,
}

export interface ProfileProps {
  content: ProfileContent;
  user?: UserType;
  dispatch?: Dispatch<actionType>;
  beforeSubmit?: () => void;
}

export const Profile: FC<ProfileProps> = ({ user, beforeSubmit, dispatch }) => {
  console.log('🚀 ~ file: Profile.tsx ~ line 24 ~ beforeSubmit', beforeSubmit)
  const [formRequestLoading, setFormRequestLoading] = useState(false)
  const [formRequestError, setFormRequestError] = useState(false)
  const [formRequestSuccess, setFormRequestSuccess] = useState(false)

  const { register, getValues, formState } = useForm({
    mode: 'onChange',
  })

  const { isDirty } = formState

  const defaultValues = {
    name: user.name,
    pronouns: user.pronouns,
    occupation: user.occupation,
    description: user.description,
  }

  const onSubmit = async (event: SyntheticEvent) => {
    if (beforeSubmit) {
      beforeSubmit()
    }

    setFormRequestLoading(true)
    event.preventDefault()

    const values = getValues()

    try {
      const { successful } = await updateUser(user.email, values)
      if (successful) {
        setTimeout(() => {
          setFormRequestLoading(false)
          setFormRequestSuccess(true)
        }, 1000)
      }
    } catch (error: unknown) {
      setFormRequestError(true)
    }
  }

  return (
    <Card title="Editar">
      {formRequestLoading && <Loading label="Salvando alterações" />}
      <GeneratedForm
        defaultValues={defaultValues}
        onSubmit={onSubmit}
        register={register}
        submitDisabled={!isDirty}
        {...formFields}
      />
      {formRequestSuccess && 'Foi'}
      {formRequestError && 'Nao foi'}
    </Card>
  )
}

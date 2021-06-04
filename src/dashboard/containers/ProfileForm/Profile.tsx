import { FC, SyntheticEvent, Dispatch, useEffect, useMemo } from 'react'
import Loading from 'shared/components/Loading'
import { useForm } from 'react-hook-form'
import Form from 'shared/components/Form'
import Card from 'dashboard/components/Card'
import { formFields } from './ProfileService'
import { actionType, UserType } from 'types'

const { GeneratedForm } = Form

type ProfileContent = {
  title: string,
  description?: string,
}

export interface ProfileProps {
  content: ProfileContent;
  user?: UserType;
  dispatch?: Dispatch<actionType>;
  onSubmit?: (values: unknown) => void;
  onChange?: (values: unknown) => void;
  hideTitle?: boolean;
  isLoading?: boolean;
}

export const Profile: FC<ProfileProps> = ({
  user,
  onSubmit,
  hideTitle,
  onChange,
  isLoading,
}) => {
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

  const beforeSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    const values = getValues()

    onSubmit(values)
  }

  return (
    <Card title={!hideTitle && 'Editar'}>
      {isLoading && <Loading label="Salvando alterações" />}
      <GeneratedForm
        onChange={onChange}
        defaultValues={defaultValues}
        onSubmit={beforeSubmit}
        register={register}
        submitDisabled={!isDirty}
        {...formFields}
      />
    </Card>
  )
}

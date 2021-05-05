import { FC, DispatchWithoutAction, SyntheticEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import Form from 'shared/components/Form'
import Loading from 'shared/components/Loading'
import ProfileVisualization from 'dashboard/containers/ProfileVisualization'
import Card from 'dashboard/components/Card'
import ProfileIcon from 'svg/profile'
import { formFields, updateUser } from './ProfileService'
import Layout from 'dashboard/containers/Layout'

import { PageGrid } from './Profile.styles'

const { GeneratedForm } = Form

type ProfileContent = {
  title: string,
  description?: string,
}

export interface ProfileProps {
  content: ProfileContent;
  user: UserProps;
}

type UserProps = {
  image: string,
  name: string,
  description?: string,
  gender?: string,
  occupation?: string,
  email: string,
  email_verified: boolean,
  id: number,
  created_at?: string,
  updated_at?: string,
}

interface UseUserProps {
  isLoading: boolean;
  refetchUser?: DispatchWithoutAction;
  user: UserProps;
}

export const Profile: FC<ProfileProps> = ({ content, user }) => {
  const [formRequestLoading, setFormRequestLoading] = useState(false)
  const [formRequestError, setFormRequestError] = useState(false)
  const [formRequestSuccess, setFormRequestSuccess] = useState(false)

  const { register, getValues, watch, formState } = useForm({
    mode: 'onChange',
  })

  const watchFields = watch()

  const presentationFields = { ...user, ...watchFields }

  const { isDirty } = formState

  const defaultValues = {
    name: user.name,
    gender: user.gender,
    occupation: user.occupation,
    description: user.description,
  }

  const profileIcon = <ProfileIcon />

  const onSubmit = async (event: SyntheticEvent) => {
    setFormRequestLoading(true)
    event.preventDefault()

    const values = getValues()

    try {
      const { status } = await updateUser(user.email, values)

      if (!status) {
        setTimeout(() => {
          setFormRequestLoading(false)
          setFormRequestSuccess(true)
        }, 2000)
      }
    } catch (error) {
      setFormRequestError(true)
    }
  }

  return (
    <Layout content={content}>
      <PageGrid>
        <Card title="Editar">
          {formRequestLoading && <Loading label="Salvando alterações" />}
          <GeneratedForm
            defaultValues={defaultValues}
            onSubmit={onSubmit}
            register={register}
            submitDisabled={!isDirty}
            {...formFields}
          />
        </Card>
        <div>
          <ProfileVisualization
            user={presentationFields}
            title="Como outras pessoas veem o seu perfil"
          />
        </div>
      </PageGrid>
    </Layout>
  )
}

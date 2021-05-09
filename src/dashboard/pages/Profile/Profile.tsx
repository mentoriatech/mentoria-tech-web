import { FC, Dispatch, SyntheticEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import Form from 'shared/components/Form'
import Loading from 'shared/components/Loading'
import ProfileVisualization from 'dashboard/containers/ProfileVisualization'
import Card from 'dashboard/components/Card'
import ProfileIcon from 'svg/profile.svg'
import { formFields, updateUser } from './ProfileService'
import Layout from 'dashboard/containers/Layout'
import { setUser } from 'store/userStore'
import { actionType } from 'types'
import { PageGrid } from './Profile.styles'

const { GeneratedForm } = Form

type ProfileContent = {
  title: string,
  description?: string,
}

export interface ProfileProps {
  content: ProfileContent;
  user?: UserProps;
  dispatch: Dispatch<actionType>;
}

type UserProps = {
  image: string,
  name: string,
  description?: string,
  pronouns?: string,
  occupation?: string,
  email: string,
  email_verified: boolean,
  id: number,
  created_at?: string,
  updated_at?: string,
}

export const Profile: FC<ProfileProps> = ({ content, user, dispatch }) => {
  console.log('🚀 ~ file: Profile.tsx ~ line 41 ~ dispatch', dispatch)
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
    pronouns: user.pronouns,
    occupation: user.occupation,
    description: user.description,
  }

  const profileIcon = <ProfileIcon />

  const onSubmit = async (event: SyntheticEvent) => {
    setFormRequestLoading(true)
    event.preventDefault()

    const values = getValues()

    try {
      const { successful, data } = await updateUser(user.email, values)
      if (!status) {
        setTimeout(() => {
          setFormRequestLoading(false)
          setFormRequestSuccess(true)
        }, 1000)
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

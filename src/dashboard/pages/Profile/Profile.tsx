import { FC, Dispatch, SyntheticEvent } from 'react'
import { useForm } from 'react-hook-form'
import { formFields, updateUser } from './ProfileService'
import ProfileVisualization from 'dashboard/containers/ProfileVisualization'
import Layout from 'dashboard/containers/Layout'
import { actionType, UserType } from 'types'
import { PageGrid } from './Profile.styles'
import ProfileForm from 'dashboard/containers/ProfileForm'

type ProfileContent = {
  title: string,
  description?: string,
}

export interface ProfileProps {
  content: ProfileContent;
  user?: UserType;
  dispatch?: Dispatch<actionType>;
}

export const Profile: FC<ProfileProps> = ({ content, user }) => {
  const { getValues, watch } = useForm({
    mode: 'onChange',
  })

  const watchFields = watch()

  const presentationFields: UserType = { ...user, ...watchFields }

  const defaultValues = {
    name: user.name,
    pronouns: user.pronouns,
    occupation: user.occupation,
    description: user.description,
  }

  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault()

    const values = getValues()

    return updateUser(user.email, values)
  }

  return (
    <Layout content={content}>
      <PageGrid>
        <ProfileForm
          user={user}
          onSubmit={onSubmit}
          fields={formFields}
          defaultValues={defaultValues}
        />
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

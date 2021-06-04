import { FC, Dispatch, useState, useEffect } from 'react'
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
  const [formRequestLoading, setFormRequestLoading] = useState(false)

  const [presentationFields, setPresentationFields] = useState<UserType>({})

  const defaultValues = {
    name: user.name,
    pronouns: user.pronouns,
    occupation: user.occupation,
    description: user.description,
  }

  const onSubmit = async (values: UserType) => {
    setFormRequestLoading(true)

    try {
      await updateUser(user.email, values)

      setTimeout(() => {
        setFormRequestLoading(false)
      }, 1000)
    } catch (error) {
      setFormRequestLoading(false)
    }
  }

  useEffect(() => {
    setPresentationFields((prev) => ({ ...prev, ...user }))
  }, [user])

  const onChange = (name: string, value: string) => {
    setPresentationFields((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <Layout content={content}>
      <PageGrid>
        <div>
          <ProfileForm
            isLoading={formRequestLoading}
            user={user}
            onSubmit={onSubmit}
            onChange={onChange}
            fields={formFields}
            defaultValues={defaultValues}
          />
        </div>
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

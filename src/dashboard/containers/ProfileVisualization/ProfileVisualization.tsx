import { FC } from 'react'
import {
  UserDetails,
  UserName,
  Subtitle,
  Description,
  CustomCard,
} from './ProfileVisualization.styles'
import { PRONOUNS } from 'dashboard/constants'
import UserInfo from 'dashboard/components/UserInfo'
import { UserType } from 'types'

interface ProfileVisualizationProps {
  title: string;
  user: UserType;
}

export const ProfileVisualization: FC<ProfileVisualizationProps> = ({
  user,
  title,
}) => {
  console.log('🚀 ~ file: ProfileVisualization.tsx ~ line 22 ~ user', user)
  return (
    <>
      {user && (
        <CustomCard title={title} className="CustomCard">
          <UserInfo image={user.image} />
          <UserDetails>
            <UserName>
              {user.name} | ({PRONOUNS[user.pronouns]})
            </UserName>
            <Subtitle>{user.occupation}</Subtitle>
          </UserDetails>
          {user.description && <Description>{user.description}</Description>}
        </CustomCard>
      )}
    </>
  )
}

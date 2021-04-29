import { FC } from 'react'
import { UserDetails, UserName, Subtitle, Description, CustomCard } from './ProfileVisualization.styles'
import { PRONOUNS } from 'dashboard/constants'
import UserInfo from 'dashboard/components/UserInfo'

interface ProfileVisualizationProps {
  title: string;
  user: {
    image: string;
    name: string;
    description?: string;
    pronouns?: string;
    occupation?: string;
    email: string;
    email_verified: boolean;
    id: number;
    created_at?: string;
    updated_at?: string;
  };
}

export const ProfileVisualization: FC<ProfileVisualizationProps> = ({ user, title }) => {
  return (
    <>
      {user && (
        <CustomCard title={title} className="CustomCard">
          <UserInfo image={user.image} />
          <UserDetails>
            <UserName>{user.name} | ({PRONOUNS[user.pronouns]})</UserName>
            <Subtitle>{user.occupation}</Subtitle>
          </UserDetails>
          {user.description && <Description>
            {user.description}
          </Description>}
        </CustomCard>
      )}
    </>
  )
}

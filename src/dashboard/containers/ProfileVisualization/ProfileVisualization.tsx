import { FC } from 'react'
import { UserDetails, UserName, Subtitle, Badge, Description, CustomCard } from './ProfileVisualization.styles'
import Card from 'dashboard/components/Card'
import UserInfo from 'dashboard/components/UserInfo'

interface ProfileVisualizationProps {
  title: string;
  user: {
    image: string;
    name: string;
    description?: string;
    gender?: string;
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
            <UserName>{user.name}</UserName>
            <Subtitle>{user.occupation}</Subtitle>
          </UserDetails>
          <Description>
            {user.description}
          </Description>
        </CustomCard>
      )}
    </>
  )
}

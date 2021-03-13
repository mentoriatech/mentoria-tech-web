import { FC } from 'react'
import { UserDetails, UserName, Subtitle, Badge, Description, CustomCard } from './ProfileVisualization.styles'
import Card from 'dashboard/components/Card'
import UserInfo from 'dashboard/components/UserInfo'

interface ProfileVisualizationProps {
    user: {
      image: string;
      name: string;
    };
}

export const ProfileVisualization: FC<ProfileVisualizationProps> = ({ user }) => {
  return (
    <>
      {user && (
        <CustomCard>
          <UserInfo image={user.image} />
          <UserDetails>
            <UserName>{user.name}</UserName>
            <Subtitle>Software Developer na SumUp</Subtitle>
            <Badge>nível 9</Badge>
          </UserDetails>
          <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit et pellentesque orci sagittis eget. 
Sed tristique nibh lorem.
          </Description>
        </CustomCard>
      )}
    </>
  )
}

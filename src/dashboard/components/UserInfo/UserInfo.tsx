import { FC } from 'react'
import { UserPicture, UserContent, Wrapper, UserName } from './UserInfo.styles'

interface UserInfoProps {
  name?: string;
  image?: string;
}

export const UserInfo: FC<UserInfoProps> = ({ image, name }) => {
  return (
    <Wrapper>
      <UserPicture src={image} />
      {name && (
        <UserContent>
          <UserName>{name}</UserName>
        </UserContent>
      )}
    </Wrapper>
  )
}

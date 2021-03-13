import { FC } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/client'
import { 
  UserPicture,
  UserContent,
  Wrapper,
  UserName,
  UserEmail,
  CustomEditIcon
} from './UserInfo.styles'

interface UserInfoProps {
  name?: string;
  image?: string;
}

export const UserInfo: FC<UserInfoProps> = ({image, name}) => {

  return (
    <Wrapper>
      <UserPicture src={image} />
      {name && <UserContent>
        <UserName>
          {name}
        </UserName>
      </UserContent>}
    </Wrapper>
  )
}

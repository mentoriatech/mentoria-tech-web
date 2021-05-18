import { FC } from 'react'
import { signOut } from 'next-auth/client'
import Breadcrumb from 'dashboard/components/Breadcrumb'
import { CustomTopBar, Title, CustomSignOutIcon } from './TopBar.styles'
import { PrimaryButton } from 'shared/components/Button'

interface TopBarProps {
  title: string;
  icon?: object;
}

export const TopBar: FC<TopBarProps> = ({ title, icon }) => {
  return (
    <CustomTopBar className="TopBar">
      <div className="TitleWrapper">
        <Title>
          {icon}
          {title}
        </Title>
        <Breadcrumb />
      </div>
      <CustomSignOutIcon data-testid="SignOut" onClick={signOut} />
    </CustomTopBar>
  )
}

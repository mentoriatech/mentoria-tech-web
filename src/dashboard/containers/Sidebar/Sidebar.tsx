import { useSession } from 'next-auth/client'
import UserInfo from 'dashboard/components/UserInfo'
import Navigation from 'dashboard/components/Navigation'
import { SidebarStyled } from './Sidebar.styles'
import HomeIcon from 'svg/home'
import ProfileIcon from 'svg/profile'
import MentoredIcon from 'svg/mentored'
import JourneyIcon from 'svg/journey'
import GuideIcon from 'svg/guide'
import HeartIcon from 'svg/heart'

const items = [
  {
    icon: <HomeIcon fill="white" />,
    destination: '/dashboard',
    label: 'Início',
  },
  {
    icon: <ProfileIcon fill="white" />,
    destination: '/dashboard/perfil',
    label: 'Perfil',
  },
  {
    icon: <MentoredIcon fill="white" />,
    destination: 'gerenciar',
    label: 'Gerenciar',
  },
  {
    icon: <JourneyIcon fill="white" />,
    destination: 'front-end',
    label: 'Jornadas',
  },
  {
    icon: <GuideIcon fill="white" />,
    destination: 'guias',
    label: 'Guias',
  },
  {
    icon: <HeartIcon fill="white" />,
    destination: 'contribuir',
    label: 'Contribuir',
  }
]

export default function Sidebar() {
  const [session, loading] = useSession()
  console.log('🚀 ~ file: Sidebar.tsx ~ line 47 ~ Sidebar ~ loading', loading);
  console.log('🚀 ~ file: Sidebar.tsx ~ line 47 ~ Sidebar ~ session', session);

  return (
    <>
      {session && (
        <SidebarStyled>
          <div>
            <UserInfo name={session.user.name} image={session.user.image} />
          </div>
          <Navigation direction="column" items={items} />
        </SidebarStyled>
      )}
    </>
  )
}

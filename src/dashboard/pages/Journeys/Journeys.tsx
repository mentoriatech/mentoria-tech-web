import { FC } from 'react'
import { useRouter } from 'next/router'
import {
  useSession
} from 'next-auth/client'
import { JourneysWrapper } from './Journeys.styles'
import { DefaultHead } from 'shared/components/DefaultHead'
import TopBar from 'website/components/TopBar'
import Header from 'website/containers/Header'
import SingIn from 'shared/components/SignIn'
import Container from 'shared/components/Container'

type JourneysContent = {
  title: string;
  description?: string;
};

export interface JourneysProps {
  content: JourneysContent;
  providers: { 
    id: string;
    name: string;
    callbackUrl: string;
    signinUrl: string;
    type: string;
  };
}




export const Journeys: FC<JourneysProps> = ({ content, providers }) => {

  return (
    <>
      
    </>
  )
}

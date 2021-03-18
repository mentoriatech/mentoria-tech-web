import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import RocketIncon from 'svg/rocket'
import Layout from 'dashboard/containers/Layout'
import StepsManagement from 'dashboard/containers/StepsManagement'

import {
  useSession
} from 'next-auth/client'

export interface ManageJourneyProps {
  content: {
    title: string;
    description?: string;
  }
}


export const ManageJourney: FC<ManageJourneyProps> = ({ content }) => {
  const router = useRouter()
  const [session] = useSession()

  useEffect(() => {
    if (!session) {
      router.push('/entrar')
    }
  }, [session])

  const titleIcon = <RocketIncon />

  return (
    <Layout content={content}>
      <StepsManagement steps={{}} />
    </Layout>
  )
}

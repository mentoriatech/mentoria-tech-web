import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import HeartIncon from 'svg/heart'
import Layout from 'dashboard/containers/Layout'

import {
  useSession
} from 'next-auth/client'


interface ErrorProps {
  content: {
    title: string;
    description: string;
  },
  protectedRoute: boolean;
}

export const Error: FC<ErrorProps> = ({ content, protectedRoute }) => {
  const router = useRouter()
  const [session, loading] = useSession()

  useEffect(() => {
    if (!loading && !session && protectedRoute) {
      router.push('/entrar')
    }
  }, [session, loading, protectedRoute])

  const titleIcon = <HeartIncon />

  return (
    <>
      <Layout content={content}>
          Página não encontrada
      </Layout>
    </>
  )
}

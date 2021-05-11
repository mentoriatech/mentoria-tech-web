import { useEffect, useState, useReducer } from 'react'
import { useSession } from 'next-auth/client'
import { getUser, updateUser } from './ProfileService'
import { encodeEmail } from '../../../utils/'
import { UserType } from 'types'

type UseUserReturn = {
  user: UserType,
  isLoading: boolean,
}

export const useUser = (): UseUserReturn => {
  const [session, loading] = useSession()
  const [isLoading, setLoading] = useState(true)
  const [user, setUser] = useState<UserType>()

  useEffect(() => {
    if (!loading) {
      const email = encodeEmail(session?.user?.email)

      const fetchUser = async () => {
        try {
          const { data } = await getUser(email)
          setUser(data)
          setLoading(false)
        } catch (error: unknown) {
          console.log(error)
        }
      }

      if (!user.email) {
        fetchUser()
      }
    }
  }, [session, loading])

  return {
    user,
    isLoading,
  }
}

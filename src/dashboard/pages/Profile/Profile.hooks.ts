import { useEffect, useState, useReducer } from 'react'
import { useSession } from 'next-auth/client'
import { getUser, updateUser } from './ProfileService'
import { encodeEmail } from '../../../utils/'

export const useUser = () => {
  const [session, loading] = useSession()
  const [isLoading, setLoading] = useState(true)
  const [user, setUser] = useState({
    image: '',
    name: '',
    description: '',
    gender: '',
    occupation: '',
    email: '',
    email_verified: false,
    id: 0,
    created_at: '',
    updated_at: '',
  })
  const [tick, refetchUser] = useReducer((x) => x + 1, 0)

  useEffect(() => {
    if (!loading) {
      const email = encodeEmail(session?.user?.email)

      const fetchUser = async () => {
        try {
          const { data } = await getUser(email)
          setUser(data)
          setLoading(false)
        } catch (error) {
          console.log(error)
        }
      }

      if (!user.email) {
        fetchUser()
      }
    }
  }, [session, loading, tick])

  return {
    user,
    refetchUser,
    isLoading,
  }
}

import { useEffect, useState } from 'react'
import axios from 'axios'

export const useJourneys = (userId) => {
  const [journeys, setJourneys] = useState([])

  useEffect(() => {
    const fetchJourneys = async () => {
      try {
        const {
          data: { data },
        } = await axios(`/api/server/journeys/${userId}`)
        console.log(
          '🚀 ~ file: Journeys.hooks.ts ~ line 11 ~ fetchJourneys ~ data',
          data,
        )

        setJourneys(data)
      } catch (error) {
        console.log(
          '🚀 ~ file: Journeys.hooks.ts ~ line 15 ~ fetchJourneys ~ error',
          error,
        )
      }
    }

    fetchJourneys()
  }, [userId])

  return { journeys }
}

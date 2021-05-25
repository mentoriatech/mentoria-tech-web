import { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'

type JourneyType = {
  title: string,
  description: string,
  featuredImage: string,
  image: string,
  slug: string,
  type: string,
}

interface UseJourneysProps {
  journeys: JourneyType[];
}

export const useJourneys = (userId: number): UseJourneysProps => {
  const [journeys, setJourneys] = useState<JourneyType[]>([])

  useEffect(() => {
    const fetchJourneys = async () => {
      try {
        const {
          data: { data },
        } = await axios(`/api/server/journeys/${userId}`)

        setJourneys(data)
      } catch (error: unknown) {
        return error
      }
    }

    fetchJourneys()
  }, [userId])

  return { journeys }
}

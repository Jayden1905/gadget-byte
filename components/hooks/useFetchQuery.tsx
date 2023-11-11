import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

type FetchQueryProps = {
  queryKey: string[]
  fetchUrl: string
  method: string
  cacheTime?: number
  staleTime?: number
  refetch?: () => void
  enable?: boolean
}

export default function useFetchQuery({
  queryKey,
  fetchUrl,
  method,
  cacheTime,
  staleTime,
  refetch,
  enable,
}: FetchQueryProps) {
  const [fetchError, setFetchError] = useState<Error>()

  const twentyFourHours = 1000 * 60 * 60 * 24

  const res = useQuery({
    enabled: enable,
    queryKey: queryKey,
    queryFn: async () => {
      const data = await fetch(fetchUrl, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          if (!res.ok) {
            setFetchError(new Error(res.statusText))
            throw new Error(res.statusText)
          }

          const data = res.json()

          return data
        })
        .then((res) => {
          if (res.ok) {
            refetch && void refetch()
          }
        })

      return data
    },

    staleTime: staleTime ?? twentyFourHours,
  })

  return {
    ...res,
    fetchError,
  }
}

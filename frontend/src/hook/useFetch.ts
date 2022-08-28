import { useCallback } from 'react'
import { HttpMethod } from '../common/types'

type GenericFunction<T> = () => Promise<T>

const useFetch = <T>(url: string, method: HttpMethod, bodyData?: unknown): GenericFunction<T> => {
  return useCallback(async () => {
    const response = await fetch(url, {
      method,
      cache: 'no-cache',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      ...(bodyData ?? { body: JSON.stringify(bodyData) }),
    })
    return response.json()
  }, [bodyData, method, url])
}

export default useFetch

import React from 'react'
import { useQuery } from 'react-query'
import useFetch from './hook/useFetch'
import { HttpMethod, TApiResponse, Incident } from './common'

const App: React.FunctionComponent = () => {
  const fetchData = useFetch<TApiResponse>('/api/v1/state', HttpMethod.GET)
  const {
    data: response,
    error,
    isError,
    isLoading,
  } = useQuery<TApiResponse, Error>('data', fetchData)

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>Error! {error.message}</div>
  }

  return (
    <div className=''>
      <h1 className='container'>Users Name</h1>
      {response?.data?.incidents?.map((ele: Incident, id: number) => {
        return (
          <li className='container' key={id}>
            {ele.codeName}
          </li>
        )
      })}
    </div>
  )
}

export default App

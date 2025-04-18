import React from 'react'
import { useRouteError } from 'react-router'

const Error = () => {
    const error = useRouteError()
    console.log(error)
  return (
    <div>Something Went Wrong {error.status}</div>
  )
}

export default Error
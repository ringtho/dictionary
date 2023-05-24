import React from 'react'
import { PuffLoader } from 'react-spinners'

const Loading = () => {
  return (
        <div className="loader-container">
            <PuffLoader color={'#A445ED'} size={150} />
        </div>
  )
}

export default Loading

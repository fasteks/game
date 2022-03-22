import React from 'react'
import { Link } from 'react-router-dom'

const Initial = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">Welcome!</div>
          <div>
            <Link to="/dashboard">Go To Dashboard</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Initial.propTypes = {}

export default React.memo(Initial)

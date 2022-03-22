import React from 'react'
import { Link } from 'react-router-dom'
import Header from './header'

const Main = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <p>This is Main</p>
          <p>
            <Link to="/">Go To Root</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default React.memo(Main)

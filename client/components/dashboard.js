import React from 'react'
import { Link } from 'react-router-dom'
import Header from './header'

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">Dashboard</div>
          <div>
            <Link to="/">Go To Home</Link>
          </div>
          <div>
            <Link to="/dashboard/main">Go To Main</Link>
          </div>
          <div>
            <Link to="/dashboard/profile/71cfff71-34e1-46eb-95ad-29637d913771 ">Go To Profile</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default React.memo(Dashboard)

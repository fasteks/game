import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <div id="title">Dashboard</div>
      <div>
        <Link to="/">Back To Initial</Link>
      </div>
      <div>
        <Link to="/dashboard/main">Go To Main</Link>
      </div>
      <div>
        <Link to="/dashboard/profile/71cfff71-34e1-46eb-95ad-29637d913771 ">Go To Profile</Link>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default React.memo(Dashboard)

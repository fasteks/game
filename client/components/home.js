import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Home = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <p>This is Home</p>
          <p>
            <Link to="/dashboard">Go To Dashboard</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
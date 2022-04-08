import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Head from './head'

import { setCols, setRows, setArray } from '../redux/reducers/table'

const Main = () => {
  const dispatch = useDispatch()
  const { rows, cols } = useSelector((s) => s.table)

  return (
    <div>
      <Head title="Main" />
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-between p-7 h-52 bg-indigo-800 text-white font-bold rounded-lg border shadow-lg">
          <p className="mb-5">Welcome!</p>
          <label htmlFor="count-cols">
            Enter count of cols:
            <input
              type="text"
              id="count-cols"
              className="ml-4 w-24 text-black"
              value={cols}
              onChange={(e) => {
                dispatch(setCols(e.target.value))
              }}
              placeholder="digit 2-6"
              required
            />
          </label>
          <label htmlFor="count-rows" className="mt-2">
            Enter count of rows:
            <input
              type="text"
              id="count-rows"
              className="ml-2 w-24 text-black"
              value={rows}
              onChange={(e) => {
                dispatch(setRows(e.target.value))
              }}
              placeholder="digit 2-6"
              required
            />
          </label>
          <Link
            to="/game"
            className="mt-5 py-2 px-6 bg-green-500 rounded-3xl"
            onClick={(e) => {
              if (rows && cols !== '') {
                dispatch(setArray(rows, cols))
              } else {
                e.preventDefault()
              }
            }}
          >
            Play!
          </Link>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default React.memo(Main)

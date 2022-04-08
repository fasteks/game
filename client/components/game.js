import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Head from './head'
import Cell from './cell'

import { setScore, SET_TABLE } from '../redux/reducers/table'

const Game = () => {
  const dispatch = useDispatch()
  const { tableArray, tableNumbers, score } = useSelector((s) => s.table)
  const tableArrayRef = useRef()
  tableArrayRef.current = tableArray
  const getRandomNumber = (array) => array[Math.floor(Math.random() * array.length)]
  const newNmb = +getRandomNumber(tableNumbers)
  const newArray =
    tableNumbers.length > 0 ? tableNumbers.filter((it) => +it !== newNmb) : tableNumbers
  const blue = 'blue'
  const red = 'red'

  const colorizeTable = (nmb) => {
    const coloredTableArray = tableArrayRef.current.map((it) => {
      if (it.id === nmb) {
        return { ...it, color: blue }
      }
      return it
    })
    return coloredTableArray
  }

  const disableButton = (nmb) => {
    const disableArray = tableArrayRef.current.map((it) => {
      if (nmb === it.id && it.isClicked === 'no') {
        dispatch(setScore())
        return { ...it, color: red }
      }
      dispatch(setScore())
      return it
    })
    return disableArray
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({
        type: SET_TABLE,
        payload: colorizeTable(newNmb),
        numbers: newArray
      })
      const timer2 = setTimeout(() => {
        dispatch({
          type: SET_TABLE,
          payload: disableButton(newNmb),
          numbers: newArray
        })
      }, 500)
      return () => clearTimeout(timer2)
    }, 600)
    return () => clearTimeout(timer)
  }, [newArray])

  return (
    <div>
      <Head title="Game" />
      <div className="flex flex-col items-center justify-evenly h-screen">
        <div className="w-2/5 border-2 border-indigo-800">
          <div className="flex flex-wrap items-center justify-center">
            {tableArray.map((it) => {
              return <Cell key={it.id} cell={it.id} color={it.color} />
            })}
          </div>
        </div>
        <div className="flex flex-col items-center p-3 bg-indigo-800 text-white font-bold rounded-lg border shadow-lg">
          <span>Score: {score}</span>
          <Link to="/" className="mt-1">
            Back To Main
          </Link>
        </div>
      </div>
    </div>
  )
}

Game.propTypes = {}

export default React.memo(Game)

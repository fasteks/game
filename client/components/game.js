import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Head from './head'
import Cell from './cell'

import { setScore, SET_BLUE, SET_RED, COLOR_RED, COLOR_BLUE } from '../redux/reducers/table'

const Game = () => {
  const dispatch = useDispatch()
  const { tableArray, tableNumbers, score, rows, cols } = useSelector((s) => s.table)
  const tableArrayRef = useRef()
  tableArrayRef.current = tableArray
  const getRandomNumber = (array) => array[Math.floor(Math.random() * array.length)]
  const newNmb = +getRandomNumber(tableNumbers)
  const newArray =
    tableNumbers.length > 0 ? tableNumbers.filter((it) => +it !== newNmb) : tableNumbers

  const colorizeTable = (nmb) => {
    const coloredTableArray = tableArrayRef.current.map((it) => {
      if (it.id === nmb && it.isClicked === 'no') {
        return { ...it, color: COLOR_BLUE }
      }
      return it
    })
    return coloredTableArray
  }

  const disableButton = (nmb) => {
    const disableArray = tableArrayRef.current.map((it) => {
      if (nmb === it.id && it.isClicked === 'no') {
        return { ...it, color: COLOR_RED }
      }
      return it
    })
    return disableArray
  }

  const timer = useRef()
  const timer2 = useRef()

  useEffect(() => {
    dispatch(setScore())
  }, [])

  useEffect(() => {
    timer.current = setTimeout(() => {
      dispatch({
        type: SET_BLUE,
        payload: colorizeTable(newNmb),
        numbers: newArray
      })
      timer2.current = setTimeout(() => {
        dispatch({
          type: SET_RED,
          payload: disableButton(newNmb),
          numbers: newArray
        })
      }, 450)
      return () => clearTimeout(timer2.current)
    }, 500)
    return () => clearTimeout(timer.current)
  }, [newArray])

  return (
    <div className="min-h-screen min-w-min flex justify-center bg-gray-300">
      <Head title="Game" />
      <div className="h-screen flex flex-col flex-wrap items-center justify-center">
        <div className="m-auto p-10 bg-gray-900 rounded-lg">
          <div
            style={{
              width: 85 * +rows,
              height: 85 * +cols
            }}
            className="flex flex-wrap justify-center"
          >
            {tableArray.map((it) => {
              return <Cell key={it.id} cell={it.id} color={it.color} />
            })}
          </div>
        </div>
        <div className="flex flex-col items-center p-3 bg-gray-900 text-white font-bold rounded-lg border shadow-lg">
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

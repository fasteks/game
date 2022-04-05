import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Head from './head'
import TableCell from './table'

import { SET_TABLE } from '../redux/reducers/table'

const Game = () => {
  const dispatch = useDispatch()
  const { tableArray, tableNumbers } = useSelector((s) => s.table)
  const getRandomNumber = (array) => array[Math.floor(Math.random() * array.length)]
  //              [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const newNmb = +getRandomNumber(tableNumbers)
  //              5
  const newArray =
    tableNumbers.length > 0 ? tableNumbers.filter((it) => +it !== newNmb) : tableNumbers
  const blue = 'blue'
  const red = 'red'
  const colorizeTable = (nmb) => {
    const coloredTableArray = tableArray.map((it) => {
      if (it.id === nmb) {
        return { ...it, color: blue }
      }
      return it
    })
    return coloredTableArray
  }

  const disableButton = (nmb) => {
    const disableArray = tableArray.map((it) => {
      if (nmb === it.id && it.isClicked === 'no') {
        return { ...it, color: red }
      }
      return it
    })
    return disableArray
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({
        type: SET_TABLE,
        payload: colorizeTable(newNmb),
        numbers: tableNumbers
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
                return (
                  <TableCell key={it.id} cell={it.id} color={it.color} />
                )
            })}
          </div>
        </div>
        <Link to="/" className="p-5 bg-indigo-800 text-white font-bold rounded-lg border shadow-lg">
          Back To Main
        </Link>
      </div>
    </div>
  )
}

Game.propTypes = {}

export default React.memo(Game)

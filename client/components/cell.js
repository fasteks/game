import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// import classnames from 'classnames'

import {
  SET_GREEN,
  COLOR_BLUE,
  COLOR_GREEN,
  COLOR_YELLOW,
  COLOR_RED,
  setScore
} from '../redux/reducers/table'

const Table = (props) => {
  const dispatch = useDispatch()
  const { tableArray, tableNumbers } = useSelector((s) => s.table)

  let updateNumbers
  const updatedTableArray = tableArray.map((it) => {
    if (it.id === props.cell && it.color === COLOR_BLUE && it.isClicked === 'no') {
      return { ...it, color: COLOR_GREEN, isClicked: 'yes' }
    }
    if (it.id === props.cell && it.color === COLOR_YELLOW && it.isClicked === 'no') {
      updateNumbers = tableNumbers.filter((el) => {
        return el !== props.cell
      })
      return { ...it, color: COLOR_RED, isClicked: 'yes' }
    }
    return it
  })

  return (
    <button
      type="button"
      style={{
        background: props.color
      }}
      className="p-10 m-0.5 border-2 disabled rounded-lg border-lime-100"
      // className={classnames(`p-10 m-0.5 border-2 disabled rounded-lg border-lime-100`, {
      //   [`bg-${props.color}-200`]: 1
      // })}
      onClick={() => {
        dispatch({
          type: SET_GREEN,
          payload: updatedTableArray,
          numbers: updateNumbers || tableNumbers
        })
        dispatch(setScore())
      }}
    />
  )
}

Table.propTypes = {}

export default React.memo(Table)

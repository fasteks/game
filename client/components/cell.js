import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// import classnames from 'classnames'

import { setScore, SET_TABLE } from '../redux/reducers/table'

const Table = (props) => {
  const dispatch = useDispatch()
  const { tableArray, tableNumbers } = useSelector((s) => s.table)
  const yellow = 'yellow'
  const green = 'green'
  const blue = 'blue'
  const red = 'red'
  let updateNumbers
  const updatedTableArray = tableArray.map((it) => {
    if (it.id === props.cell && it.color === blue) {
      return { ...it, color: green, isClicked: 'yes' }
    }
    if (it.id === props.cell && it.color === yellow) {
      updateNumbers = tableNumbers.filter((el) => {
        return el !== props.cell
      })
      return { ...it, color: red }
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
        dispatch(setScore())
        dispatch({
          type: SET_TABLE,
          payload: updatedTableArray,
          numbers: updateNumbers || tableNumbers
        })
      }}
    />
  )
}

Table.propTypes = {}

export default React.memo(Table)

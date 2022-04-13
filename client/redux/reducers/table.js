const SET_ROWS = '@game/SET_ROWS'
const SET_COLS = '@game/SET_COLS'
const SET_SCORE = '@game/SET_SCORE'
export const SET_TABLE = '@game/SET_TABLE'
export const SET_BLUE = '@game/SET_BLUE'
export const SET_RED = '@game/SET_RED'
export const SET_GREEN = '@game/SET_GREEN'
export const COLOR_YELLOW = 'yellow'
export const COLOR_BLUE = 'blue'
export const COLOR_RED = 'red'
export const COLOR_GREEN = 'green'

const initialState = {
  tableArray: [],
  tableNumbers: [],
  rows: '',
  cols: '',
  score: 0
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ROWS: {
      return {
        ...state,
        rows: action.payload
      }
    }
    case SET_COLS: {
      return {
        ...state,
        cols: action.payload
      }
    }
    case SET_TABLE: {
      return {
        ...state,
        tableArray: action.payload,
        tableNumbers: action.numbers
      }
    }
    case SET_BLUE: {
      return {
        ...state,
        tableArray: action.payload,
        tableNumbers: action.numbers
      }
    }
    case SET_RED: {
      return {
        ...state,
        tableArray: action.payload,
        tableNumbers: action.numbers
      }
    }
    case SET_GREEN: {
      return {
        ...state,
        tableArray: action.payload,
        tableNumbers: action.numbers
      }
    }
    case SET_SCORE: {
      return {
        ...state,
        score: action.payload
      }
    }
    default:
      return state
  }
}

export function setRows(nmb) {
  const regexp = /^[2-6]{1}/
  const number = nmb.match(regexp) ? nmb.match(regexp).join() : ''
  return { type: SET_ROWS, payload: number }
}

export function setCols(nmb) {
  const regexp = /^[2-6]{1}/
  const number = nmb.match(regexp) ? nmb.match(regexp).join() : ''
  return { type: SET_COLS, payload: number }
}

export function setArray(rows, cols) {
  const length = +rows * +cols
  const array = new Array(length).fill().map((it, index) => {
    return { id: index, color: COLOR_YELLOW, isClicked: 'no' }
  })
  const arrayNumbers = array.map((it) => +it.id)
  return { type: SET_TABLE, payload: array, numbers: arrayNumbers }
}

export function setScore() {
  return (dispatch, getState) => {
    const { tableArray } = getState().table
    const scoreCount = tableArray.reduce((acc, rec) => {
      if (rec.color === COLOR_GREEN && rec.isClicked === 'yes') {
        return acc + 10
      }
      return acc
    }, 0)
    return dispatch({ type: SET_SCORE, payload: scoreCount })
  }
}

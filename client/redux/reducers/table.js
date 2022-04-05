const SET_ROWS = '@game/SET_ROWS'
const SET_COLS = '@game/SET_COLS'
export const SET_TABLE = '@game/SET_TABLE'

const initialState = {
  tableArray: [],
  tableNumbers: [],
  rows: null,
  cols: null
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
    return { id: index, color: 'yellow', isClicked: 'no' }
  })
  const arrayNumbers = array.map(it => +it.id)
  return { type: SET_TABLE, payload: array, numbers: arrayNumbers }
}

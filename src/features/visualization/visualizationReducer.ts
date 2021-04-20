import { SET_VISUALIZATION_COUNT } from './actionTypes'
import { VisualizationActionTypes } from './types'

const initialState = {
  count: 0,
}

export default (state = initialState, action: VisualizationActionTypes) => {
  switch (action.type) {
    case SET_VISUALIZATION_COUNT:
      return { ...state, count: action.payload }
    default:
      return state
  }
}

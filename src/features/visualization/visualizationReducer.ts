import { SET_VISUALIZATION_COUNT } from './actionTypes'
import { State, VisualizationActionTypes } from './types'

const initialState: State = {
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

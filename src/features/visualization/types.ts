import { setVisualizationCount } from './actionTypes'

export type VisualizationActionTypes = ReturnType<typeof setVisualizationCount>

export interface State {
  count: number
}

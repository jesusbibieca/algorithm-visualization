import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionTypes, selectors } from '../../features/visualization'

interface SliderProps {
  min?: number
  max?: number
  name: string
}

const Slider: React.FC<SliderProps> = ({ min = 0, max = 10, name }) => {
  const count = useSelector(selectors.getVisualizationCount)
  const dispatch = useDispatch()

  useEffect(() => {
    // Fix for range thumb not showing
    // ref: https://github.com/Dogfalo/materialize/issues/6036#issuecomment-409821994
    window.M.Range.init(document.querySelectorAll('input[type=range]'))
  }, [])

  return (
    <form action="#">
      <p className="range-field">
        <input
          type="range"
          id={`slider-${name}`}
          min={min}
          max={max}
          value={count}
          onChange={(e) =>
            dispatch({
              type: actionTypes.SET_VISUALIZATION_COUNT,
              payload: e.target.value,
            })
          }
        />
      </p>
    </form>
  )
}

export default Slider

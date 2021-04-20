/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react'

interface SliderProps {
  min?: number
  max?: number
  name: string
}
const Slider: React.FC<SliderProps> = ({ min = 0, max = 10, name }) => {
  useEffect(() => {
    window.M.Range.init(document.querySelectorAll('input[type=range]'))
  }, [])

  return (
    <form action="#">
      <p className="range-field">
        <input
          type="range"
          id={`slider-${name}`}
          min="0"
          max="10"
          defaultValue="5"
        />
      </p>
    </form>
  )
}

export default Slider

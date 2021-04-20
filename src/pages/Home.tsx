import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Bar, { BarValue } from '../components/bar'
import Slider from '../components/slider'
import { RootState } from '../store'
import { generateVisualizationValues } from '../utils/generateVisualizationValues'

export const Home: React.FC = () => {
  const visualizationCount = useSelector(
    (state: RootState) => state.visualization.count
  )
  const [barData, setBarData] = useState<BarValue[]>()

  const generateVisualization = () => {
    setBarData(generateVisualizationValues(visualizationCount))
  }
  return (
    <>
      <h1>Welcome to this visualization</h1>
      <p>
        Let&apos;s learn about algorithms together and visualize how they work
        alogn the way
      </p>
      <div>
        <Slider name="visualization" max={25} />
        <button className="btn" type="button" onClick={generateVisualization}>
          Generate visualization
        </button>
      </div>
      <Bar data={barData} />
    </>
  )
}

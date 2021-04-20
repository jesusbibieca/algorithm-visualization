import React from 'react'
import Bar from '../components/bar'
import Slider from '../components/slider'

export const Home: React.FC = () => {
  return (
    <>
      <h1>Welcome to this visualization</h1>
      <p>
        Let&apos;s learn about algorithms together and visualize how they work
        alogn the way
      </p>
      <Slider name="test" />
      <Bar />
    </>
  )
}

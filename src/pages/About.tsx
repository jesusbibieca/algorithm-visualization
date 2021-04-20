import React from 'react'
import { useHistory } from 'react-router-dom'
import Counter from '../components/counter'

export const About: React.FC = () => {
  const history = useHistory()

  return (
    <>
      <h1>About</h1>
      <Counter />
      <button
        type="button"
        className="btn"
        cy-data="go-back-button"
        onClick={() => history.push('/')}
      >
        Go back
      </button>
    </>
  )
}

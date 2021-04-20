import React from 'react'
import {
  Bar as B,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const rawData = [
  {
    value: 10,
  },
  {
    value: 21,
  },
  {
    value: 1,
  },
  {
    value: 17,
  },
  {
    value: 2,
  },
  {
    value: 7,
  },
  {
    value: 9,
  },
  {
    value: 11,
  },
  {
    value: 31,
  },
  {
    value: 13,
  },
  {
    value: 12,
  },
  {
    value: 45,
  },
  {
    value: 33,
  },
]

const Bar: React.FC = () => {
  const [data, setData] = React.useState(rawData)
  const changeValues = () => {
    setData((oldData) => [
      ...oldData,
      {
        value: Math.floor(Math.random() * 100),
      },
    ])
  }
  return (
    <div style={{ height: '600px' }}>
      <button className="btn" type="button" onClick={changeValues}>
        Add a value
      </button>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="value" />
          <YAxis />
          <Tooltip />
          <Legend />
          <B dataKey="value" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Bar

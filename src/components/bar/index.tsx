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

export interface BarValue {
  value: number
}
interface BarProps {
  data?: BarValue[]
}
const Bar: React.FC<BarProps> = ({ data }) => {
  return (
    <div style={{ height: '600px' }}>
      {data && (
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
      )}
    </div>
  )
}

export default Bar

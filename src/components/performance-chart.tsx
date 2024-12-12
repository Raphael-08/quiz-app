"use client"

import { Card } from "@/components/ui/card"
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts"

const data = [
  {
    category: "Math",
    score: 30,
    total: 100,
  },
  {
    category: "Sports",
    score: 80,
    total: 100,
  },
  {
    category: "Music",
    score: 60,
    total: 100,
  },
]

export function PerformanceChart() {
  return (
    <Card className="bg-white p-6">
      <h3 className="text-lg font-semibold">Top performance by category</h3>
      <div className="mt-4 h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="score"
              fill="#7C3AED"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}


import { Card } from "@/components/ui/card"

export function StatsCard() {
  return (
    <Card className="bg-white p-6">
      <h3 className="text-lg font-semibold">Monthly</h3>
      <div className="mt-4">
        <div className="text-sm text-gray-500">
          You have played a total of 24 quizzes this month!
        </div>
        <div className="mt-4 flex justify-between gap-4">
          <div className="rounded-lg bg-purple-100 p-4 text-center">
            <div className="text-2xl font-bold text-purple-700">5</div>
            <div className="text-sm text-purple-600">Quiz Created</div>
          </div>
          <div className="rounded-lg bg-purple-100 p-4 text-center">
            <div className="text-2xl font-bold text-purple-700">21</div>
            <div className="text-sm text-purple-600">Quiz Won</div>
          </div>
        </div>
      </div>
    </Card>
  )
}


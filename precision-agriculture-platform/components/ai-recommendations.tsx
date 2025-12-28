"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const recommendations = [
  {
    id: 1,
    title: "Irrigation Recommendation",
    description: "Zone 3-4 require immediate watering",
    action: "Apply 35mm water via drip irrigation",
    confidence: 94,
    reason: "Soil moisture below threshold (42% optimal is 60%)",
    icon: "💧",
    priority: "high",
  },
  {
    id: 2,
    title: "Fertilizer Application",
    description: "NPK levels trending down in Zones 1-2",
    action: "Apply nitrogen-rich compound (20-10-5)",
    confidence: 87,
    reason: "Deep reinforcement learning model predicts yield loss if not applied today",
    icon: "🌱",
    priority: "high",
  },
  {
    id: 3,
    title: "Pest Alert",
    description: "Leaf health index declining in Zone 5",
    action: "Monitor closely - consider treatment if < 75% index",
    confidence: 76,
    reason: "Drone imagery analysis detected stress patterns",
    icon: "🔍",
    priority: "medium",
  },
]

export function AIRecommendations() {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-xl font-bold">AI-Driven Recommendations</h3>
        <p className="text-sm text-muted-foreground">Deep Reinforcement Learning Model Predictions</p>
      </div>

      {recommendations.map((rec) => (
        <Card key={rec.id} className="border-border overflow-hidden">
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <div className="text-3xl">{rec.icon}</div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-semibold">{rec.title}</h4>
                    <p className="text-sm text-muted-foreground">{rec.description}</p>
                  </div>
                  <Badge
                    className={
                      rec.priority === "high"
                        ? "bg-red-500/20 text-red-500 border-red-500/30"
                        : "bg-yellow-500/20 text-yellow-500 border-yellow-500/30"
                    }
                  >
                    {rec.priority}
                  </Badge>
                </div>

                <div className="mt-3 space-y-2 rounded-lg bg-card/50 p-3">
                  <p className="text-sm">
                    <span className="font-semibold">Action:</span> {rec.action}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold">Why:</span> {rec.reason}
                  </p>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-24 overflow-hidden rounded-full bg-muted">
                      <div className="h-full bg-accent" style={{ width: `${rec.confidence}%` }} />
                    </div>
                    <span className="text-xs font-semibold">{rec.confidence}% confidence</span>
                  </div>
                  <button className="rounded-md bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground hover:opacity-90 transition-opacity">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

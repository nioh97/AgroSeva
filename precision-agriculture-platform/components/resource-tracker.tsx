"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ResourceTracker() {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-xl font-bold">Resource Tracking</h3>
        <p className="text-sm text-muted-foreground">Water & fertilizer usage</p>
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-base">Water Usage</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-semibold">Today</span>
              <span className="text-sm">2,400 L</span>
            </div>
            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
              <div className="h-full w-3/4 bg-blue-500" />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-semibold">This Week</span>
              <span className="text-sm">14,800 L</span>
            </div>
            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
              <div className="h-full w-2/3 bg-blue-400" />
            </div>
          </div>
          <div className="rounded-lg bg-blue-500/10 p-3 border border-blue-500/20">
            <p className="text-xs">
              <span className="font-semibold">Savings:</span> 1,200 L vs manual irrigation
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-base">Fertilizer Applied</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-semibold">Nitrogen</span>
              <span className="text-sm">48 kg</span>
            </div>
            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
              <div className="h-full w-3/5 bg-green-500" />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-semibold">Phosphorus</span>
              <span className="text-sm">24 kg</span>
            </div>
            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
              <div className="h-full w-2/5 bg-amber-500" />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-semibold">Potassium</span>
              <span className="text-sm">36 kg</span>
            </div>
            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
              <div className="h-full w-1/2 bg-red-500" />
            </div>
          </div>
          <div className="rounded-lg bg-green-500/10 p-3 border border-green-500/20">
            <p className="text-xs">
              <span className="font-semibold">Efficiency:</span> 34% less waste
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-base">Predicted Yield</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-4">
            <div className="text-3xl font-bold text-accent">+18%</div>
            <p className="text-xs text-muted-foreground mt-2">Increase vs baseline</p>
            <p className="text-xs text-muted-foreground">Based on optimal conditions</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

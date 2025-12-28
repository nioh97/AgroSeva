"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const zones = [
  { id: 1, name: "North Field", moisture: 58, npk: "7.2", temp: 26, status: "✓ Optimal" },
  { id: 2, name: "South Field", moisture: 52, npk: "6.8", temp: 28, status: "⚠ Low Moisture" },
  { id: 3, name: "East Garden", moisture: 42, npk: "7.1", temp: 25, status: "⚠ Action Needed" },
  { id: 4, name: "West Section", moisture: 65, npk: "7.4", temp: 24, status: "✓ Optimal" },
  { id: 5, name: "Central Zone", moisture: 55, npk: "6.9", temp: 27, status: "✓ Good" },
  { id: 6, name: "Greenhouse", moisture: 75, npk: "7.3", temp: 22, status: "✓ Optimal" },
  { id: 7, name: "Orchard Area", moisture: 48, npk: "7.0", temp: 26, status: "⚠ Monitor" },
  { id: 8, name: "Nursery Beds", moisture: 70, npk: "7.2", temp: 23, status: "✓ Optimal" },
]

export function SensorData() {
  return (
    <Card className="mt-8 border-border">
      <CardHeader>
        <CardTitle>Zone-by-Zone Sensor Data</CardTitle>
        <CardDescription>Real-time readings from 8 IoT monitoring stations</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-border">
              <tr>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Zone</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Soil Moisture</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">NPK pH</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Temperature</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {zones.map((zone) => (
                <tr key={zone.id} className="border-b border-border hover:bg-card/50 transition-colors">
                  <td className="py-3 px-4 font-medium">{zone.name}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-16 rounded-full bg-muted overflow-hidden">
                        <div className="h-full bg-accent" style={{ width: `${zone.moisture}%` }} />
                      </div>
                      <span className="text-xs font-semibold">{zone.moisture}%</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">{zone.npk}</td>
                  <td className="py-3 px-4">{zone.temp}°C</td>
                  <td className="py-3 px-4 text-xs">{zone.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}

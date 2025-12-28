"use client"

import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const soilMoistureData = [
  { time: "6am", moisture: 45 },
  { time: "9am", moisture: 48 },
  { time: "12pm", moisture: 52 },
  { time: "3pm", moisture: 58 },
  { time: "6pm", moisture: 62 },
  { time: "9pm", moisture: 55 },
]

const temperatureData = [
  { time: "6am", temp: 18, humidity: 72 },
  { time: "9am", temp: 22, humidity: 65 },
  { time: "12pm", temp: 28, humidity: 52 },
  { time: "3pm", temp: 31, humidity: 45 },
  { time: "6pm", temp: 26, humidity: 58 },
  { time: "9pm", temp: 20, humidity: 68 },
]

export function FarmDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-balance">Farm Status Overview</h2>
        <p className="mt-2 text-muted-foreground">Real-time IoT sensor data from 8 active zones</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <MetricCard label="Avg Soil Moisture" value="58%" status="optimal" change="+5% from yesterday" />
        <MetricCard label="Soil NPK Balance" value="7.2 pH" status="good" change="Optimal range" />
        <MetricCard label="Air Temperature" value="26°C" status="optimal" change="Ideal for growth" />
        <MetricCard label="Water Usage Today" value="2,400 L" status="normal" change="Automated irrigation" />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Soil Moisture Levels</CardTitle>
            <CardDescription>% by zone over the day</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={soilMoistureData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="time" stroke="var(--color-muted-foreground)" />
                <YAxis stroke="var(--color-muted-foreground)" />
                <Tooltip
                  contentStyle={{ backgroundColor: "var(--color-card)", border: "1px solid var(--color-border)" }}
                />
                <Line type="monotone" dataKey="moisture" stroke="var(--color-accent)" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <CardTitle>Temperature & Humidity</CardTitle>
            <CardDescription>Environmental conditions</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={temperatureData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="time" stroke="var(--color-muted-foreground)" />
                <YAxis stroke="var(--color-muted-foreground)" />
                <Tooltip
                  contentStyle={{ backgroundColor: "var(--color-card)", border: "1px solid var(--color-border)" }}
                />
                <Area type="monotone" dataKey="temp" fill="var(--color-chart-1)" stroke="var(--color-chart-1)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function MetricCard({
  label,
  value,
  status,
  change,
}: { label: string; value: string; status: string; change: string }) {
  const statusColor = status === "optimal" ? "text-green-500" : status === "good" ? "text-blue-500" : "text-yellow-500"

  return (
    <Card className="border-border">
      <CardContent className="pt-6">
        <p className="text-sm text-muted-foreground mb-2">{label}</p>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold">{value}</span>
          <span className={`text-xs font-semibold ${statusColor}`}>● {status}</span>
        </div>
        <p className="text-xs text-muted-foreground mt-2">{change}</p>
      </CardContent>
    </Card>
  )
}

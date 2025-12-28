import { Header } from "@/components/header"
import { FarmDashboard } from "@/components/farm-dashboard"
import { AIRecommendations } from "@/components/ai-recommendations"
import { SensorData } from "@/components/sensor-data"
import { ResourceTracker } from "@/components/resource-tracker"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <FarmDashboard />
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <AIRecommendations />
          </div>
          <div>
            <ResourceTracker />
          </div>
        </div>
        <SensorData />
      </div>
      <Footer />
    </main>
  )
}

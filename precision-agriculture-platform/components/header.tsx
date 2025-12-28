export function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground font-bold">
              🌾
            </div>
            <div>
              <h1 className="text-2xl font-bold">AgroAI</h1>
              <p className="text-sm text-muted-foreground">Precision Agriculture Platform</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="rounded-lg bg-primary px-4 py-2 text-primary-foreground hover:opacity-90 transition-opacity">
              Connect IoT Device
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <span className="badge">Placeholder</span>
        <h1 className="mt-3 text-3xl sm:text-4xl">Dashboard</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Primary workspace screen. Swap in real widgets, charts, or tables
          here once the spec defines what this view shows.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {["Metric A", "Metric B", "Metric C", "Metric D"].map((label) => (
          <div key={label} className="card">
            <p className="text-sm text-muted">{label}</p>
            <p className="mt-1 text-2xl font-semibold">—</p>
          </div>
        ))}
      </div>
    </div>
  );
}

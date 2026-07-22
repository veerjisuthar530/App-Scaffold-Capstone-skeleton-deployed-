export default function HomePage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <span className="badge">Placeholder</span>
        <h1 className="mt-3 text-3xl sm:text-4xl">Home</h1>
        <p className="mt-2 max-w-2xl text-muted">
          This is the landing screen placeholder. Replace this copy and layout
          with your real spec content once it's ready.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {["Dashboard", "Profile", "Settings"].map((name) => (
          <div key={name} className="card">
            <h2 className="text-base">{name}</h2>
            <p className="mt-1 text-sm text-muted">
              Placeholder card linking to the {name.toLowerCase()} screen.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

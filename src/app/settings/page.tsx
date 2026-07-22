export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <span className="badge">Placeholder</span>
        <h1 className="mt-3 text-3xl sm:text-4xl">Settings</h1>
        <p className="mt-2 max-w-2xl text-muted">
          App / account settings screen placeholder.
        </p>
      </div>
      <div className="card max-w-md flex flex-col gap-4">
        {["Notifications", "Privacy", "Billing"].map((row) => (
          <div key={row} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
            <span className="text-sm">{row}</span>
            <span className="text-xs text-muted">—</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <span className="badge">Placeholder</span>
        <h1 className="mt-3 text-3xl sm:text-4xl">Profile</h1>
        <p className="mt-2 max-w-2xl text-muted">
          User profile / account details screen placeholder.
        </p>
      </div>
      <div className="card max-w-md">
        <div className="h-16 w-16 rounded-full bg-accent-soft" />
        <p className="mt-4 text-sm text-muted">Name, avatar, and account fields go here.</p>
      </div>
    </div>
  );
}

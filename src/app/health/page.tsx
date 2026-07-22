function getBaseUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

type HealthData = {
  status: string;
  timestamp: string;
  uptimeSeconds: number;
  environment: string;
  region: string;
};

async function getHealth(): Promise<HealthData | null> {
  try {
    const res = await fetch(`${getBaseUrl()}/api/health`, { cache: "no-store" });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function HealthPage() {
  const data = await getHealth();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <span className="badge">System</span>
        <h1 className="mt-3 text-3xl sm:text-4xl">Health check</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Confirms the deployed app can reach its own API route and render
          server-fetched data at request time.
        </p>
      </div>

      {data ? (
        <dl className="card grid max-w-md grid-cols-2 gap-x-6 gap-y-4">
          <div>
            <dt className="text-xs uppercase tracking-wide text-muted">Status</dt>
            <dd className="mt-1 flex items-center gap-2 text-sm font-medium">
              <span className="h-2 w-2 rounded-full bg-accent" />
              {data.status}
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-muted">Environment</dt>
            <dd className="mt-1 text-sm font-medium">{data.environment}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-muted">Region</dt>
            <dd className="mt-1 text-sm font-medium">{data.region}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-muted">Uptime</dt>
            <dd className="mt-1 text-sm font-medium">{data.uptimeSeconds}s</dd>
          </div>
          <div className="col-span-2">
            <dt className="text-xs uppercase tracking-wide text-muted">Checked at</dt>
            <dd className="mt-1 text-sm font-medium">{data.timestamp}</dd>
          </div>
        </dl>
      ) : (
        <div className="card max-w-md border-danger/30 bg-danger/5">
          <p className="text-sm font-medium text-danger">
            Could not reach /api/health.
          </p>
          <p className="mt-1 text-sm text-muted">
            Check that the API route is deployed and NEXT_PUBLIC_SITE_URL /
            VERCEL_URL is set correctly.
          </p>
        </div>
      )}
    </div>
  );
}

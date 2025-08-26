import { Suspense } from "react";
import RemoteWidget from "./remote-widget";

export default async function Page() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Streaming the remote-widget!</h2>

      <Suspense fallback={<p>Loading widget…</p>}>
        {/* ✅ React will progressively stream this */}
        <RemoteWidget />
      </Suspense>
    </div>
  );
}

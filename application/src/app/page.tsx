"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function Page() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // @ts-expect-error Okay
    const handler = (e: unknown) => setCount((c) => c + e.detail.delta);
    window.addEventListener("mfe:increment", handler);
    return () => window.removeEventListener("mfe:increment", handler);
  }, []);

  return (
    <>
      <div style={{ padding: 20 }}>
        <h2>Next.js Shell</h2>
        <p>Count in Shell: {count}</p>

        {/* Load Widget from CDN */}
        <Script
          src="http://localhost:3000/react-widget.iife.js"
          type="module"
        />

        {/* @ts-expect-error We know that this element exists */}
        <react-widget message="Hello from Next.js shell!" count={count} />
      </div>

      <div style={{ padding: 20 }}></div>
    </>
  );
}

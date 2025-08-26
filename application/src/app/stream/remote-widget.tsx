// Server Component — no "use client"
export default async function WidgetContainer() {
  const res = await fetch("http://localhost:8000", { cache: "no-store" });
  const html = await res.text();

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

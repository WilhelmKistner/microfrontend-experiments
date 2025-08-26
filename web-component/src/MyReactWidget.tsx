export default function MyReactWidget({ message = "", count = 0 }) {
  return (
    <div style={{ border: "2px solid blue", padding: 10 }}>
      <h3>React Widget (Vite MFE)</h3>
      <p>Message: {message}</p>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          window.dispatchEvent(
            new CustomEvent("mfe:increment", {
              detail: { source: "react", delta: 1 },
            })
          );
        }}
      >
        Increment
      </button>
    </div>
  );
}

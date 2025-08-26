// @ts-expect-error Okay
import React from "react";
import { useState } from "react"; // ✅ Required for JSX

export const id = "widget";

export const Widget = function Widget({ message = "", count = 0 }) {
  const [counter, setCounter] = useState(count);

  return (
    <div style={{ padding: "10px", border: "1px solid #ddd" }}>
      <h3>{message}</h3>
      <p>Clicked {counter} times</p>
      <button onClick={() => setCounter((c) => c + 1)}>Increment</button>
    </div>
  );
};

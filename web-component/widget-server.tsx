import { renderToPipeableStream } from "react-dom/server";
import express from "express";
import MyReactWidget from "./src/MyReactWidget";

const app = express();

app.get("/widget-stream", (req, res) => {
  res.setHeader("Content-Type", "text/html");

  const { pipe } = renderToPipeableStream(
    <MyReactWidget message="Streamed!" count={123} />,
    {
      onShellReady() {
        pipe(res); // start streaming
      },
    }
  );
});

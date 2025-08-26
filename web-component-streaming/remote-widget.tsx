// We need to keep the react import here because:
import React from "react";

import express from "express";
import ReactDOMServer from "react-dom/server";
import { id, Widget } from "./src/widget";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// ✅ allow shell (http://localhost:3000) to load scripts
app.use(
  cors({
    origin: "http://localhost:3000", // or "*" for dev
  })
);

app.use("/static", express.static(path.join(__dirname, "dist")));

app.get("/", (req, res) => {
  const message = req.query.message ?? "Interactive Widget";

  res.setHeader("Content-Type", "text/html; charset=utf-8");

  const stream = ReactDOMServer.renderToPipeableStream(
    <Widget message={message} />,
    {
      onShellReady() {
        // Erstes Chunk: Container öffnen
        res.write(`<div id="${id}">`);
        // Pipe loslegen
        stream.pipe(res);
      },
      onAllReady() {
        // Hier sind alle Chunks fertig – wir können Script anhängen
        res.write(`</div>
          <script type="module" src="http://localhost:8000/static/widget-client.js"></script>`);
        res.end();
      },
      onError(err) {
        console.error(err);
        res.status(500).end("Server error");
      },
    }
  );
});

app.listen(8000, () =>
  console.log("Widget server running at http://localhost:8000")
);

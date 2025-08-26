import { hydrateRoot } from "react-dom/client";
import { Widget, id } from "./widget.tsx";

hydrateRoot(
  // @ts-expect-error Okay
  document.getElementById(id),
  <Widget message="Interactive Widget" />
);

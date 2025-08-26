import { createRoot } from "react-dom/client";
import MyReactWidget from "./MyReactWidget";

class ReactWidget extends HTMLElement {
  private _root: any;
  connectedCallback() {
    this.mount();
  }

  static get observedAttributes() {
    return ["message", "count"];
  }

  attributeChangedCallback() {
    this.mount();
  }

  mount() {
    const props = {
      message: this.getAttribute("message") ?? "Hello from React MFE!",
      count: Number(this.getAttribute("count") ?? "0"),
    };

    if (!this._root) {
      this._root = createRoot(this);
    }

    this._root.render(<MyReactWidget {...props} />);
  }

  disconnectedCallback() {
    if (this._root) {
      this._root.unmount();
    }
  }
}

customElements.define("react-widget", ReactWidget);

export class SiblingCount extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <slot id="slot"></slot>
      `;
  }

  connectedCallback() {
    const slot = this.shadowRoot.querySelector("slot");
    const parent = slot.assignedNodes()[1];

    if (parent) {
      const siblingCount = parent.childElementCount;
      parent.style.setProperty("--sibling-count", siblingCount);

      const siblings = parent.children;
      // Loop through all the children and add the custom property sibling-index to each.
      [...siblings].forEach((sibling, index) => {
        sibling.style.setProperty("--sibling-index", index + 1);
      });
    }
  }
}

window.customElements.define("sibling-count", SiblingCount);

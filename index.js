class Navigation extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "closed" })
  }
  connectedCallback() {
    // fetch("chank.html")
    //   .then(response => response.text())
    //   .then(response => (this.shadow.innerHTML = response))
  }
  static get observedAttributes() {
    return ["src"];
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    if (!newVal) return
    fetch(newVal)
      .then(response => response.text())
      .then(response => (this.shadow.innerHTML = response))
  }
}
customElements.define("navigation-bar", Navigation)
//document.body.appendChild(document.createElement("navigation-bar"))

class Block_1st extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "closed" })
  }
  static get observedAttributes() {
    return ["src"];
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    if (!newVal) return;
    fetch(newVal)
      .then(response => response.text())
      .then(response => (this.shadow.innerHTML = response))
  }
}
customElements.define("block-1st", Block_1st)

class Block_media extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "closed" })
  }
  static get observedAttributes() {
    return ["src"];
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    if (!newVal) return;
    fetch(newVal)
      .then(response => response.text())
      .then(response => (this.shadow.innerHTML = response))
  }
}
customElements.define("block-media", Block_media)

class Block_2nd extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "closed" })
  }
  static get observedAttributes() {
    return ["src"];
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    if (!newVal) return;
    fetch(newVal)
      .then(response => response.text())
      .then(response => (this.shadow.innerHTML = response))
  }
}
customElements.define("block-2nd", Block_2nd)
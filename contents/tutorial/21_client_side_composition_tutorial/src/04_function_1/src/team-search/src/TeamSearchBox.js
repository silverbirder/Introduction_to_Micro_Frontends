import { html, css, LitElement } from 'lit-element';

export class TeamSearchBox extends LitElement {
  static get styles() {
    return css`
      button {
        background-color: inherit;
      }
      input {
        width: 50%;
      }
    `;
  }
  static get properties () {
    return {
      inputValue: {
        type: String
      }
    }
  }
  constructor () {
    super();
    this.inputValue = "";
  }
  updateInputValue (e) {
    this.inputValue = e.srcElement.value
  }
  submit() {
    this.dispatchEvent(new CustomEvent("submit", {
      detail: { items: [this.inputValue] }
    }));
  }
  render() {
    return html`
    <input placeholder="Please enter keywords ..." value="${this.inputValue}" @change=${this.updateInputValue}></input>
    <button @click=${()=>this.submit()}>🔍</button>
    `;
  }
}

import { html, css, LitElement } from 'lit-element';

const items = ['apple', 'banana', 'grapes', 'mango', 'orange'];
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
    const filterItems = (arr, query) => {
      return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    }
    this.dispatchEvent(new CustomEvent("submit", {
      detail: {
        items: filterItems(items, this.inputValue) 
      }
    }));
  }
  render() {
    return html`
    <input placeholder="Please enter keywords ..." value="${this.inputValue}" @change=${this.updateInputValue}></input>
    <button @click=${()=>this.submit()}>🔍</button>
    `;
  }
}

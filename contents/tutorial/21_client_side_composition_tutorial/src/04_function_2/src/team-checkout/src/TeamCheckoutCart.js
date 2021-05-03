import { html, css, LitElement } from 'lit-element';

export class TeamCheckoutCart extends LitElement {
  static get styles() {
    return css`
      button {
        background-color: inherit;
      }
    `;
  }
  static get properties () {
    return {
      items: {
        type: Array
      },
      itemCount: {
        type: Number
      },
      textArea: {
        type: String
      }
    }
  }
  constructor () {
    super();
    this.items = ['Product 1', 'Product 2', 'Product 3'];
    this.itemCount = this.items.length;
    this.textArea = '';
  }
  switch() {
    const text = `
    You have ${this.itemCount} items in your cart.
    They are ${this.items.map((item) => item)}.
    `;
    this.textArea = this.textArea === '' ? text : '';
  }
  render() {
    return html`
    <button @click=${this.switch}>
      <span role="img" aria-label="checkout cart">
        ${this.itemCount} 🛒
      </span>
    </button>
    <div class="team-checkout-text-area">${this.textArea}</div>
    `;
  }
}

import { html, css, LitElement } from 'lit-element';

const items = ['apple', 'banana', 'grapes', 'mango', 'orange'];
export class TeamProductList extends LitElement {
  static get styles() {
    return css`
      team-product-item {
        margin: 10px 0;
        display: block;
        width: 90%;
      }
    `;
  }

  static get properties() {
    return {
      items: { type: Array },
    };
  }

  constructor() {
    super();
    this.items = items;
    this.addEventListener('update', this._handleUpdate);
  }

  _handleUpdate(e) {
    this.items = e.detail.items;
  }

  render() {
    return html`
      ${this.items.map(item => {
        return html`<team-product-item .name=${item}></team-product-item>`;
      })}
    `;
  }
}

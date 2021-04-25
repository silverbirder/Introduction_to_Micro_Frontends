import { html, css, LitElement } from 'lit-element';

export class TeamProductItem extends LitElement {
  static get styles() {
    return css`
      .item {
        border: medium solid;
        display: inline-block;
        text-align: center;
        padding: 20px 0;
        width: 100%;
      }
    `;
  }

  static get properties() {
    return {
      name: { type: String },
    };
  }

  constructor() {
    super();
    this.name = 'Product';
  }

  render() {
    return html`
      <div class="item">${this.name}</div>
    `;
  }
}

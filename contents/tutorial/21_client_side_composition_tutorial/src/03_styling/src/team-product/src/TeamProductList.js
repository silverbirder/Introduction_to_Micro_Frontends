import { html, css, LitElement } from 'lit-element';

export class TeamProductList extends LitElement {
  static get styles() {
    return css`
      .list {
        display: grid;
      }
      team-product-item {
        margin: 10px 0;
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
    this.items = ['Product1'];
  }

  render() {
    return html`
      <div class="list">
      ${this.items.map(item => {
        return html`<team-product-item .name=${item}></team-product-item>`;
      })}
      </div>
    `;
  }
}

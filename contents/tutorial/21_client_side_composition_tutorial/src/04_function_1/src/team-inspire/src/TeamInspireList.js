import { html, css, LitElement } from 'lit-element';

export class TeamInspireList extends LitElement {
  static get styles() {
    return css`
      team-inspire-item {
        margin: 10px 0;
        display: block;
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
    this.addEventListener('update', this._handleUpdate);
  }

  _handleUpdate(e) {
    this.items = e.detail.items;
  }

  render() {
    return html`
      <slot></slot>
      ${this.items.map(item => {
        return html`<team-inspire-item .name=${item}></team-inspire-item>`;
      })}
    `;
  }
}

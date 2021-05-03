import { html, css, LitElement } from 'lit-element';

const recommendItems = {
  apple: ['apple pie'], 
  banana: ['banana juice'], 
  grapes: ['grape mousse'], 
  mango: ['mango ice'], 
  orange: ['orange cake']
}
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
    this.items = Object.keys(recommendItems).map((key) => recommendItems[key]).flat();
    this.addEventListener('update', this._handleUpdate);
  }

  _handleUpdate(e) {
    this.items = e.detail.items.map((item) => recommendItems[item]).flat();
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

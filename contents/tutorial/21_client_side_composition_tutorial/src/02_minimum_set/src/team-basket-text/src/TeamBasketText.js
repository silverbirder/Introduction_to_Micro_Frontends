import { html, css, LitElement } from 'lit-element';

export class TeamBasketText extends LitElement {
  static get styles() {
    return css`
      :host {
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }

  constructor() {
    super();
    this.title = 'Text';
  }

  render() {
    return html`
      <div>Team Basket ${this.title}</div>
    `;
  }
}

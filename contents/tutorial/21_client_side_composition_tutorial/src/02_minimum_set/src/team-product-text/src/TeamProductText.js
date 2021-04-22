import { html, css, LitElement } from 'lit-element';

export class TeamProductText extends LitElement {
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
      <div>Team Product ${this.title}</div>
    `;
  }
}

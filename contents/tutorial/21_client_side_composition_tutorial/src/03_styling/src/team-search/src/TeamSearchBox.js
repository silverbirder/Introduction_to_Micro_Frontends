import { html, css, LitElement } from 'lit-element';

export class TeamSearchBox extends LitElement {
  static get styles() {
    return css`
      button {
        border: none;
        background-color: inherit;
      }
    `;
  }
  render() {
    return html`
    <input placeholder="Please enter keywords ..."></input><button>🔍</button>
    `;
  }
}

import { html, css, LitElement } from 'lit-element';

export class TeamSearchBox extends LitElement {
  static get styles() {
    return css`
      button {
        border: none;
        background-color: inherit;
      }
      input {
        width: 150px;
      }
      .border {
        border: medium dotted #ff0000;
        display: inline-block;
      }
    `;
  }
  render() {
    return html`
    <div class="border">
      <input placeholder="Please enter keywords ..."></input><button>🔍</button>
    <div>
    `;
  }
}

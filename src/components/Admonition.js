import { css } from "styled-components"
import { boxStyle } from "lingui.js.org/styles"

export const noteStyle = css`
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;

  a {
    color: #2b542c;
  }
`

export const warningStyle = css`
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;

  a {
    color: #66512c;
  }
`

export const infoStyle = css`
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;

  a {
    color: #245269;
  }
`

export const dangerStyle = css`
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;

  a {
    color: #843534;
  }
`

export const admonitionStyle = css`
  ${boxStyle};
  border-left: 5px solid transparent;

  a {
    font-weight: bold;
    text-decoration: none;
    background: none;
    border: none;

    &:hover {
      border: none;
      background: none;
      text-decoration: underline;
    }
  }
`

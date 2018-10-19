import { css, createGlobalStyle } from "styled-components"
import { library, config, dom } from "@fortawesome/fontawesome-svg-core"
import {
  faTwitter,
  faGithub,
  faGitter
} from "@fortawesome/free-brands-svg-icons"

config.autoAddCss = false
library.add(faTwitter, faGithub, faGitter)

export const baseFontSize = 16
export const brandPrimary = "#d62727"

export const fontFamily = '"Helvetica Neue", Helvetica, Arial, sans-serif'
export const textColor = "black"

export const brandColors = {
  twitter: "#1da1f2",
  github: "#333",
  gitter: "#ed1965"
}

const headerSize = [["_", 30], ["sm", 40], ["lg", 50]]

const mediaSizes = {
  lg: 1340,
  md: 780,
  sm: 600
}

export const media = Object.keys(mediaSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${mediaSizes[label] / baseFontSize}em) {
      ${css(...args)};
    }
  `

  return acc
}, {})

export function withHeaderSize(rule) {
  return headerSize.map(
    ([key, value]) => (key === "_" ? rule(value) : media[key]`${rule(value)}`)
  )
}

export const GlobalStyles = createGlobalStyle`
  ${dom.css()};
  
  * {
    box-sizing: inherit;
  }
  *:before {
    box-sizing: inherit;
  }
  *:after {
    box-sizing: inherit;
  }
  
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }
  
  html {
    box-sizing: border-box;
    overflow-y: scroll;
  }
  
  body {
    font-family: ${fontFamily};
    font-size: ${baseFontSize}px;
    line-height: 1.2;
    color: ${textColor};
  }
  
  /**
  a[id]::before {
    content: '';
    display: block;
    position: relative;
    width: 0;
    
    ${withHeaderSize(
      headerHeight => css`
        height: ${headerHeight}px;
        margin-top: ${headerHeight}px;
      `
    )}
  }
  */
`

export const linkBackground = "rgba(255, 208, 193, 0.2)"
export const linkBackgroundHover = "rgb(255, 208, 193)"
export const linkUnderline = "#f4511a"
export const linkStyle = css`
  color: ${textColor};
  background-color: ${linkBackground};
  border-bottom: 1px solid ${linkUnderline};

  text-decoration: none;

  :hover {
    background-color: ${linkBackgroundHover};
  }
`

export const boxStyle = css`
  margin: 25px -30px;
  padding: 0 15px;
  border-radius: 10px;
  overflow: auto;
`

export const solarizedDark = css`
  .highlight {
    background-color: #002b36;
    color: #93a1a1;
  }
  .highlight .c {
    /* Comment */
    color: #586e75;
  }
  .highlight .err {
    /* Error */
    color: #93a1a1;
  }
  .highlight .g {
    /* Generic */
    color: #93a1a1;
  }
  .highlight .k {
    /* Keyword */
    color: #859900;
  }
  .highlight .l {
    /* Literal */
    color: #93a1a1;
  }
  .highlight .n {
    /* Name */
    color: #93a1a1;
  }
  .highlight .o {
    /* Operator */
    color: #859900;
  }
  .highlight .x {
    /* Other */
    color: #cb4b16;
  }
  .highlight .p {
    /* Punctuation */
    color: #93a1a1;
  }
  .highlight .cm {
    /* Comment.Multiline */
    color: #586e75;
  }
  .highlight .cp {
    /* Comment.Preproc */
    color: #859900;
  }
  .highlight .c1 {
    /* Comment.Single */
    color: #586e75;
  }
  .highlight .cs {
    /* Comment.Special */
    color: #859900;
  }
  .highlight .gd {
    /* Generic.Deleted */
    color: #2aa198;
  }
  .highlight .ge {
    /* Generic.Emph */
    font-style: italic;
  }
  .highlight .gr {
    /* Generic.Error */
    color: #dc322f;
  }
  .highlight .gh {
    /* Generic.Heading */
    color: #cb4b16;
  }
  .highlight .gi {
    /* Generic.Inserted */
    color: #859900;
  }
  .highlight .go {
    /* Generic.Output */
    color: #93a1a1;
  }
  .highlight .gp {
    /* Generic.Prompt */
    color: #93a1a1;
  }
  .highlight .gs {
    /* Generic.Strong */
    font-weight: bold;
  }
  .highlight .gu {
    /* Generic.Subheading */
    color: #cb4b16;
  }
  .highlight .gt {
    /* Generic.Traceback */
    color: #93a1a1;
  }
  .highlight .kc {
    /* Keyword.Constant */
    color: #cb4b16;
  }
  .highlight .kd {
    /* Keyword.Declaration */
    color: #268bd2;
  }
  .highlight .kn {
    /* Keyword.Namespace */
    color: #859900;
  }
  .highlight .kp {
    /* Keyword.Pseudo */
    color: #859900;
  }
  .highlight .kr {
    /* Keyword.Reserved */
    color: #268bd2;
  }
  .highlight .kt {
    /* Keyword.Type */
    color: #dc322f;
  }
  .highlight .ld {
    /* Literal.Date */
    color: #93a1a1;
  }
  .highlight .m {
    /* Literal.Number */
    color: #2aa198;
  }
  .highlight .s {
    /* Literal.String */
    color: #2aa198;
  }
  .highlight .na {
    /* Name.Attribute */
    color: #93a1a1;
  }
  .highlight .nb {
    /* Name.Builtin */
    color: #b58900;
  }
  .highlight .nc {
    /* Name.Class */
    color: #268bd2;
  }
  .highlight .no {
    /* Name.Constant */
    color: #cb4b16;
  }
  .highlight .nd {
    /* Name.Decorator */
    color: #268bd2;
  }
  .highlight .ni {
    /* Name.Entity */
    color: #cb4b16;
  }
  .highlight .ne {
    /* Name.Exception */
    color: #cb4b16;
  }
  .highlight .nf {
    /* Name.Function */
    color: #268bd2;
  }
  .highlight .nl {
    /* Name.Label */
    color: #93a1a1;
  }
  .highlight .nn {
    /* Name.Namespace */
    color: #93a1a1;
  }
  .highlight .nx {
    /* Name.Other */
    color: #93a1a1;
  }
  .highlight .py {
    /* Name.Property */
    color: #93a1a1;
  }
  .highlight .nt {
    /* Name.Tag */
    color: #268bd2;
  }
  .highlight .nv {
    /* Name.Variable */
    color: #268bd2;
  }
  .highlight .ow {
    /* Operator.Word */
    color: #859900;
  }
  .highlight .w {
    /* Text.Whitespace */
    color: #93a1a1;
  }
  .highlight .mf {
    /* Literal.Number.Float */
    color: #2aa198;
  }
  .highlight .mh {
    /* Literal.Number.Hex */
    color: #2aa198;
  }
  .highlight .mi {
    /* Literal.Number.Integer */
    color: #2aa198;
  }
  .highlight .mo {
    /* Literal.Number.Oct */
    color: #2aa198;
  }
  .highlight .sb {
    /* Literal.String.Backtick */
    color: #586e75;
  }
  .highlight .sc {
    /* Literal.String.Char */
    color: #2aa198;
  }
  .highlight .sd {
    /* Literal.String.Doc */
    color: #93a1a1;
  }
  .highlight .s2 {
    /* Literal.String.Double */
    color: #2aa198;
  }
  .highlight .se {
    /* Literal.String.Escape */
    color: #cb4b16;
  }
  .highlight .sh {
    /* Literal.String.Heredoc */
    color: #93a1a1;
  }
  .highlight .si {
    /* Literal.String.Interpol */
    color: #2aa198;
  }
  .highlight .sx {
    /* Literal.String.Other */
    color: #2aa198;
  }
  .highlight .sr {
    /* Literal.String.Regex */
    color: #dc322f;
  }
  .highlight .s1 {
    /* Literal.String.Single */
    color: #2aa198;
  }
  .highlight .ss {
    /* Literal.String.Symbol */
    color: #2aa198;
  }
  .highlight .bp {
    /* Name.Builtin.Pseudo */
    color: #268bd2;
  }
  .highlight .vc {
    /* Name.Variable.Class */
    color: #268bd2;
  }
  .highlight .vg {
    /* Name.Variable.Global */
    color: #268bd2;
  }
  .highlight .vi {
    /* Name.Variable.Instance */
    color: #268bd2;
  }
  .highlight .il {
    /* Literal.Number.Integer.Long */
    color: #2aa198;
  }
`

export const codeStyle = css`
  .highlight {
    ${boxStyle};
    background-color: #ffffcc;

    pre {
      font-size: 1em;
      margin: 1rem;
    }
  }

  ${solarizedDark};
`

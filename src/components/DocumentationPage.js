import * as React from "react"
import styled, { css } from "styled-components"

import Layout from "./Layout"
import {
  admonitionStyle,
  dangerStyle,
  infoStyle,
  noteStyle,
  warningStyle
} from "./Admonition"

import { codeStyle, linkStyle, withHeaderSize } from "lingui.js.org/styles"

const Content = styled.article`
  *:hover > .headerlink {
    // display: inline;
  }

  .headerlink {
    display: none;
    // padding-left: 0.2em;
    // text-decoration: none;
  }

  h1 {
    margin-top: 80px;
    font-size: 60px;
    line-height: 65px;
    font-weight: 700;
  }

  h2 {
    font-size: 35px;
    border-top: 1px solid #ececec;
    margin-top: 44px;
    padding-top: 40px;
    line-height: 1.2;
  }

  h3 {
    font-size: 25px;
    line-height: 1.3;
    padding-top: 45px;
  }

  a {
    ${linkStyle};
  }

  p {
    margin-top: 1em;
    line-height: 1.5;
    max-width: 42em;
  }

  ${codeStyle};

  span.pre {
    background-color: rgba(255, 229, 100, 0.2);
  }

  .admonition {
    ${admonitionStyle};

    &.note {
      ${noteStyle};
    }

    &.hint {
      ${infoStyle};
    }

    &.warning {
      ${warningStyle};
    }

    &.danger {
      ${dangerStyle};
    }
  }

  ul,
  ol {
    margin: 0;
    margin-left: 0;
    padding-left: 0;

    line-height: 1.7;
    max-width: 42em;
  }

  li {
    padding: 0;
  }

  dl {
    dt {
      font-weight: bold;
      margin-bottom: 12px;
    }

    dd {
      margin: 0 0 12px 24px;
      line-height: 24px;
    }
  }
`

const Nav = styled.nav`
  flex: 0 0 300px;
  margin-left: 80px;
  border-left: 1px solid rgb(236, 236, 236);
`

const NavContent = styled.nav`
  ${withHeaderSize(
    headerSize => css`
      height: calc(100vh - ${headerSize}px);
    `
  )} position: fixed;
  z-index: 2;
  overflow-y: auto;
  margin-right: -999px;
  padding-right: 999px;
  background-color: rgb(247, 247, 247);
  opacity: 1 !important;

  ul {
    list-style: none;
    padding-left: 20px;

    a {
      color: rgb(26, 26, 26);
      display: inline-block;
      margin-top: 5px;
      text-decoration: none;

      &:hover {
        color: rgb(109, 109, 109);
      }
    }
  }

  > ul > li > a {
    color: rgb(26, 26, 26);
    font-size: 14px;
    font-weight: 700;
    line-height: 3;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
`

export default function DocumentationPage({ pageContext }) {
  return (
    <Layout>
      <Content dangerouslySetInnerHTML={{ __html: pageContext.body }} />
      <Nav>
        <NavContent dangerouslySetInnerHTML={{ __html: pageContext.toc }} />
      </Nav>
    </Layout>
  )
}

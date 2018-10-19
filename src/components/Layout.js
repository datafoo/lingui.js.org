import * as React from "react"
import Helmet from "react-helmet"
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome"
import styled, { css } from "styled-components"
import { StaticQuery, graphql } from "gatsby"

import {
  GlobalStyles,
  media,
  withHeaderSize,
  brandPrimary
} from "lingui.js.org/styles"

import brandIcon from "lingui.js.org/images/brand-icon.png"
import brandIconHover from "lingui.js.org/images/brand-icon-hover.png"

const Container = styled.div`
  ${media.md`width: 90%;`} ${media.lg`max-width: 1260px;`}
  
  padding: 0 20px;
  margin: 0 auto;
`

const Content = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: center;

  ${withHeaderSize(
    headerHeight => css`
      margin-top: ${headerHeight}px;
    `
  )};
`

const headerBorderSize = 3

const Header = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  top: 0;
  left: 0;

  color: ${brandPrimary};
  background-color: #fff;
  border-bottom: ${headerBorderSize}px solid ${brandPrimary};
  font-weight: bold;
`

const HeaderContent = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${withHeaderSize(
    headerHeight => css`
      height: calc(${headerHeight}px - ${headerBorderSize}px);
    `
  )};
`

const brandLinkStyle = css`
  color: ${brandPrimary};
  text-decoration: none;
`

const Brand = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 10px;

  span {
    display: none;
  }

  ${media.sm`
    width: calc(100% / 5);
    ${brandLinkStyle};
    
    span {
      display: inline;
    }
    sub {
      font-weight: normal;
    }
  `};
`

const BrandIcon = styled.div`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  background-size: cover;
  background-image: url(${brandIcon});

  ${Brand}:hover & {
    background-image: url(${brandIconHover});
  }
`

const SiteNavigation = styled.nav`
  display: flex;
  flex-grow: 1;
`

const SiteLink = styled.a`
  ${brandLinkStyle};
`

const SocialLinks = styled.div`
  width: calc(100% / 6);

  a {
    font-weight: normal;
    ${brandLinkStyle};
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet title={data.site.siteMetadata.title}>
          <html lang="en" />
        </Helmet>

        <GlobalStyles />

        <Header>
          <HeaderContent>
            <Brand href="/">
              <BrandIcon />{" "}
              <span>
                Lingui
                <sub>JS</sub>
              </span>
            </Brand>
            <SiteNavigation>
              <SiteLink href="/docs/">Documentation</SiteLink>
            </SiteNavigation>
            <SocialLinks>
              <a href="https://github.com/lingui/js-lingui/">
                <Fa icon={["fab", "github"]} /> GitHub
              </a>
            </SocialLinks>
          </HeaderContent>
        </Header>
        <Content>{children}</Content>
      </>
    )}
  />
)

export default Layout

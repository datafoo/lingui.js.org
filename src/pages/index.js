import * as React from "react"
import styled from "styled-components"
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome"

import Layout from "lingui.js.org/components/Layout"
import { brandColors, brandPrimary } from "../styles"

const Column = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 18px;
`

const Hero = styled.div`
  text-align: center;

  h1 {
    font-size: 74px;
    font-weight: normal;
    margin: 120px 0 30px;
  }
`

const Lead = styled.p`
  color: ${brandPrimary};
  font-weight: bold;
  font-size: 22px;
`
const DocumentationLink = styled.a`
  display: inline-block;
  padding: 10px 50px;
  margin: 60px 0 40px;

  color: white;
  background-color: ${brandPrimary};
  border-radius: 10px;
  text-decoration: none;
`
const SocialLinks = styled.div``

const Icon = styled.span``

const Social = styled.a`
  color: #4a4a4a;
  text-decoration: none;
  margin: 0 40px;

  :hover {
    color: black;
    ${Icon} {
      color: ${props => brandColors[props.theme] || "black"};
    }
  }
`

const Quote = styled.blockquote`
  margin: 80px auto 0;
  max-width: 42em;

  font-size: 22px;
  line-height: 1.7;
`

const Homepage = () => (
  <Layout>
    <Column>
      <Hero>
        <h1>
          Lingui
          <sub>JS</sub>
        </h1>
        <Lead>
          A readable, automated, and optimized internationalization for
          JavaScript
        </Lead>
        <DocumentationLink href="/docs/">Documentation</DocumentationLink>
        <SocialLinks>
          <Social theme="github" href="">
            <Icon>
              <Fa icon={["fab", "github"]} />
            </Icon>{" "}
            Start at GitHub
          </Social>
          <Social theme="twitter" href="">
            <Icon>
              <Fa icon={["fab", "twitter"]} />
            </Icon>{" "}
            Tweet about it
          </Social>
          <Social theme="gitter" href="">
            <Icon>
              <Fa icon={["fab", "gitter"]} />
            </Icon>{" "}
            Get support at Gitter
          </Social>
        </SocialLinks>
      </Hero>

      <Quote>
        <strong>Internationalization</strong> is the design and development of a
        product, application or document content that enables easy{" "}
        <strong>localization</strong> for target audiences that vary in culture,
        region, or language.
      </Quote>
    </Column>
  </Layout>
)

export default Homepage

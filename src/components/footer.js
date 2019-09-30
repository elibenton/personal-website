import React from "react"
import { Row, Col } from "react-flexbox-grid"
import styled from "styled-components"

const FooterWrapper = styled(Row)`
  display: flex;
  background-color: white;
  padding-bottom: 5px;
  @media print {
    display: none;
  }
`

const FinePrint = styled.div`
  font-weight: normal;
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 20px;
  color: black;
  @media screen and (max-width: 360px) {
    font-size: 12px;
  }
`

const StyledLink = styled.a`
  color: black;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <Col xs={11} sm={11} md={10} lg={10} css={{ marginLeft: "22px" }}>
        <FinePrint>
          <span role="img" aria-label="Arm">
            💪
          </span>
          Coded by hand using&nbsp;
          <StyledLink href="https://www.gatsbyjs.com/">Gatsby</StyledLink>
          ,&nbsp;
          <StyledLink href="https://reactjs.org/">React</StyledLink>, and&nbsp;
          <StyledLink href="https://www.netlify.com/">Netlify</StyledLink>
          <br />
          <span role="img" aria-label="Books">
            📚
          </span>
          Checkout the&nbsp;
          <StyledLink href="https://github.com/elibenton/personal-website">
            Codebase
          </StyledLink>
          ,&nbsp;
          <StyledLink href="https://www.elibenton.co/sitemap.xml">
            Sitemap
          </StyledLink>
          , or&nbsp;
          <StyledLink href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
            CC License
          </StyledLink>
          <br />
          ©️ {new Date().getFullYear()} Eli Cohen
        </FinePrint>
      </Col>
    </FooterWrapper>
  )
}

export default Footer

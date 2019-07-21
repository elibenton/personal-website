import React from "react"
import { Row, Col } from "react-flexbox-grid"
import styled from "styled-components"

const FooterWrapper = styled(Row)`
  display: flex;
  background-color: white;
  padding-top: 40px;
  padding-bottom: 5px;
  border-top: thick double;
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
      <Col
        xsOffset={1}
        xs={10}
        smOffset={1}
        sm={10}
        mdOffset={1}
        md={10}
        lgOffset={1}
        lg={10}
      >
        <FinePrint>
          <span role="img" aria-label="Arm">
            💪
          </span>
          Coded by hand using{" "}
          <StyledLink href="https://www.gatsbyjs.com/">Gatsby</StyledLink>,{" "}
          <StyledLink href="https://reactjs.org/">React</StyledLink>, &{" "}
          <StyledLink href="https://www.netlify.com/">Netlify</StyledLink>
          <br />
          ©️ Eli Cohen {new Date().getFullYear()}
        </FinePrint>
      </Col>
    </FooterWrapper>
  )
}

export default Footer

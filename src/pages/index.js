import React from "react"
import { Link, graphql } from "gatsby"
import { Row, Col } from "react-flexbox-grid"
import logo from "../../content/images/logo.gif"

import styled from "styled-components"
import Spacer from "../utils/spacer"

const Title = styled.h1`
  margin-top: 0px;
  text-align: left;
  line-height: 9.5vw;
  font-size: 8.5vw;
  font-weight: 500;
  letter-spacing: -5px;
  font-family: "Helvetica Neue", Helvetica, sans-serif;
  margin-bottom: 4px;
  @media screen and (max-width: 767px) {
    line-height: 14vw;
    font-size: 13.2vw;
    letter-spacing: -1px;
    margin: 0 0 0 0;
  }
`

const SubTitle = styled.h2`
  margin-top: 0px;
  text-align: left;
  line-height: 4.5vw;
  font-size: 4.3vw;
  font-style: italic;
  font-weight: lighter;
  color: grey;
  width: 80%;
  @media screen and (max-width: 767px) {
    margin-top: 24px;
    line-height: 8vw;
    font-size: 7vw;
    width: 100%;
  }
`

const Container = styled(Row)`
  display: inline-flex;
  flex-direction: row;
  align-items: flex-start;
  @media screen and (max-width: 767px) {
  }
`

const BetterLink = styled(Link)`
  text-decoration: none;
`

const A = styled.a`
  text-decoration: none;
`

const InnerInnerDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15vh;
  border-top: double;
  padding: 4px 0 0 0;
  @media screen and (max-width: 767px) {
    border-top: none;
    flex-direction: column;
    /* margin-left: -32px;
    padding-left: 32px;
    margin-right: -32px;
    padding-right: 32px; */
  }
`

const TitleContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  font-family: "Helvetica Neue", Helvetica, sans-serif;
  @media screen and (max-width: 767px) {
    border-left: solid 4px;
    padding-left: 18px;
    flex-direction: column;
  }
`
const List = styled.h4`
  margin: 4px 0 4px 0;
`

const ReverseHide = styled.div`
  display: none;
  @media screen and (max-width: 767px) {
    display: inline;
  }
`

const Hide = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
`
const Img = styled.img`
  margin-top: -50px;
  @media screen and (max-width: 767px) {
    margin-top: 10px;
  }
`
const ImgCol = styled(Col)`
  @media screen and (max-width: 767px) {
    display: flexbox;
    justify-content: center;
  }
`
const Inline = styled(Row)`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
  }
`

class Home extends React.Component {
  render() {
    return (
      <div>
        <Spacer height={130} xsHeight={20} />

        <Container>
          <ImgCol
            xsOffset={0}
            smOffset={0}
            mdOffset={1}
            lgOffset={1}
            xs={12}
            sm={12}
            md={2}
            lg={2}
          >
            <Hide>
              <Img src={logo} alt="Logo" width="155" height="200" />
            </Hide>
          </ImgCol>
          <Col
            xsOffset={1}
            smOffset={1}
            mdOffset={0}
            lgOffset={0}
            xs={10}
            sm={10}
            md={8}
            lg={8}
          >
            <Inline>
              <ReverseHide>
                <img
                  src={logo}
                  alt="Logo"
                  width="54"
                  height="70"
                  css={{ marginRight: "18px" }}
                />
              </ReverseHide>
              <TitleContainer>
                <Title>Eli&nbsp;</Title>
                <Title>Benton&nbsp;</Title>
                <Title>Cohen</Title>
              </TitleContainer>
            </Inline>
            <SubTitle>
              Traveling the world to understand the politics of digitally
              networked life
            </SubTitle>
            <Spacer height={10} xsHeight={10} />
            <InnerInnerDiv>
              <BetterLink
                to="/about"
                css={{ textDecoration: "none", textTransform: "uppercase" }}
              >
                <List>about</List>
              </BetterLink>
              <Hide>&nbsp;&nbsp;&middot;&nbsp;&nbsp;</Hide>
              <BetterLink
                to="/blog"
                css={{ textDecoration: "none", textTransform: "uppercase" }}
              >
                <List>blog</List>
              </BetterLink>
              <Hide>&nbsp;&nbsp;&middot;&nbsp;&nbsp;</Hide>
              <A
                href="https://www.notion.so/elibentoncohen/911170cb13cb42b291e4801d553a71bc?v=7fa7960e9a5147168060fd09e7b0ae2a"
                css={{ textDecoration: "none", textTransform: "uppercase" }}
              >
                <List>reading</List>
              </A>
              <Hide>&nbsp;&nbsp;&middot;&nbsp;&nbsp;</Hide>
              <BetterLink
                to={`/tags/`}
                css={{ textDecoration: "none", textTransform: "uppercase" }}
              >
                <List>topics</List>
              </BetterLink>
            </InnerInnerDiv>
          </Col>
        </Container>
      </div>
    )
  }
}

export default Home

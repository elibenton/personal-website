import React, { Component } from "react"
import styled from "styled-components"
import { FaExternalLinkSquareAlt } from "react-icons/fa"

const Card = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  display: block;
  padding: 10px;
  background-color: white;
  color: black;
  border: 2px solid black;
  border-radius: 2px;
  width: 100%;
`

const SourcePub = styled.span`
  font-style: italic;
`

const SourceIntro = styled.span`
  display: block;
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 14px;
  line-height: 18px;
  color: #333;
  margin-top: 6px;
  text-align: left;
`

const SourceHeadline = styled.span`
  display: inline-block;
  text-transform: none;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  margin-top: 4px;
  text-align: left;
`

const SourceBody = styled.span`
  display: block;
  text-transform: none;
  margin-top: 12px;
  font-size: 12px;
  font-weight: normal;
  text-align: left;
  line-height: 16px;
`

const LinkBar = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 12px;
  height: auto;
  width: 100%;
`

const Quotes = styled.span`
  position: absolute;
  font-family: Georgia, serif;
  color: black;
  font-size: 14pt;
`

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  font-weight: bold;
  border: 2px solid black;
  font-size: 12px;
  color: black;
  text-align: center;
  padding: 6px 9px 6px 5px;
  @media screen and (max-width: 767px) {
    padding-left: 14px;
    padding-right: 11px;
  }

  border-radius: 4px;
  user-select: none;
  cursor: pointer;

  @media not all and (hover: none) {
    &:hover {
      background-color: black;
      color: white;
      /* text-decoration: underline; */
      outline: none;
    }
  }
`

const LinkOutStyle = styled.div`
  display: inline-block;
  width: 20px;
  transform: translateY(3px);
`

class CitationCard extends Component {
  render() {
    const dataSource = this.props.data ? this.props.data : this.props //-- supporting legacy
    const {
      publication,
      headline,
      directQuote,
      link,
      author,
      noLink,
      noQuote,
      noAuthor,
    } = dataSource
    return (
      <Card>
        <SourceHeadline>{headline}</SourceHeadline>
        <SourceIntro>
          In: <SourcePub>{publication}</SourcePub>
          {<br />}
          {!noAuthor && (
            <span>
              By: <SourcePub>{author}</SourcePub>
            </span>
          )}
        </SourceIntro>
        {!noQuote && (
          <SourceBody>
            <Quotes>&ldquo;</Quotes>&nbsp;&nbsp;{directQuote}
            <Quotes>&rdquo;</Quotes>
          </SourceBody>
        )}
        <LinkBar>
          {!noLink && (
            <span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={link}
                style={{ textDecoration: "none" }}
              >
                <Button>
                  Read&nbsp;more&nbsp;
                  <LinkOutStyle>
                    <FaExternalLinkSquareAlt
                      style={{ position: "relative", bottom: "1px" }}
                    />
                  </LinkOutStyle>
                </Button>
              </a>
            </span>
          )}
        </LinkBar>
      </Card>
    )
  }
}

export default CitationCard

import React from "react"
import styled from "styled-components"

//-- creates a rounded line (nicer than a border-top, etc)

const StyledLine = styled.div`
  display: block;
  box-sizing: border-box;
  height: 0;
  width: 100%;
  border: 1.5px solid ${props => (props.color ? props.color : "#333")};
  border-radius: 2px;
  margin-top: 2px;
  margin-bottom: 10px;
`

const Line = props => <StyledLine color={props.color} />

export default Line

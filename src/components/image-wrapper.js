import React from "react"
import styled from "styled-components"

//-- creates an image in three different sysles for use in markdown

const StyledImage = styled.img`
  width: ${props => props.size};
`

const Image = props => <StyledImage size={props.size} />

export default Image

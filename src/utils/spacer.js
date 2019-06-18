import styled from "styled-components"

//-- vertical spacer, easier to read than a buried css rule (i.e. margin)
const Spacer = styled.div`
  height: ${props => props.height}px;
  @media screen and (max-width: 767px) {
    height: ${props => props.xsHeight}px;
  }
`

export default Spacer

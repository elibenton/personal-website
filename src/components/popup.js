import React from "react"
import Popup from "reactjs-popup"
import addToMailchimp from "gatsby-plugin-mailchimp"
import styled from "styled-components"
// import { Form, Input, Button } from "antd"
// import "antd/es/button/style"

const Label = styled.h4`
  margin-top: 1.5em;
`

const Input = styled.input`
  margin-top: 1.5em;
`

const FormTitle = styled.h2`
  margin-top: 0.2em;
`

const StyledPopup = styled.div`
  padding: 20px;
`

class EmailPopup extends React.Component {
  state = { first_name: null, last_name: null, email: null }

  componentWillMount() {
    let visited = sessionStorage["alreadyVisited"]
    if (visited) {
      this.setState({ viewPopup: false })
    } else {
      sessionStorage["alreadyVisited"] = true
      this.setState({ viewPopup: true })
    }
  }

  _handleChange = e => {
    console.log({
      [`${e.target.name}`]: e.target.value,
    })
    this.setState({
      [`${e.target.name}`]: e.target.value,
    })
  }

  _handleSubmit = e => {
    e.preventDefault()

    console.log("submit", this.state)

    addToMailchimp(this.state.email, this.state)
      .then(({ msg, result }) => {
        console.log("msg", `${result}: ${msg}`)

        if (result !== "success") {
          throw msg
        }
        alert(msg)
      })
      .catch(err => {
        console.log("err", err)
        alert(err)
      })
  }

  render() {
    return (
      <Popup
        open={this.state.viewPopup}
        closeOnDocumentClick
        onClose={this.closeModal}
        modal
      >
        <StyledPopup>
          <FormTitle>Subscribe to my Email Newsletter!</FormTitle>
          <div>
            <div>
              <form layout="horizontal" onSubmit={this._handleSubmit}>
                <Label>First Name</Label>
                <input
                  type="text"
                  onChange={this._handleChange}
                  name="first_name"
                />
                <Label>Last Name</Label>
                <input
                  type="text"
                  onChange={this._handleChange}
                  name="last_name"
                />
                <Label>Email Address</Label>
                <input
                  type="email"
                  onChange={this._handleChange}
                  name="email"
                />
                <Input type="submit" />
              </form>
            </div>
          </div>
        </StyledPopup>
      </Popup>
    )
  }
}

export default EmailPopup

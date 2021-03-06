import React from "react"
import Popup from "reactjs-popup"
import addToMailchimp from "gatsby-plugin-mailchimp"
import styled from "styled-components"

const Label = styled.h4`
  margin-top: 1.5em;
`

const Input = styled.input`
  margin-top: 1.5em;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
`

const FormTitle = styled.h1`
  margin-top: 0.2em;
  font-weight: 500;
  font-size: 40px;
  line-height: 1.2em;
  letter-spacing: -0.4px;
`

class EmailPopup extends React.Component {
  state = { email: null }

  componentDidMount() {
    let visited = localStorage["alreadyVisited"]
    if (visited) {
      this.setState({ viewPopup: false })
    } else {
      localStorage["alreadyVisited"] = true
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
        alert(
          "Something is not right. You probably already subscribed. If you have questions, email me at eliunited@gmail.com."
        )
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
        <FormTitle>Subscribe to the email newsletter!</FormTitle>
        <div>
          <div>
            <form layout="horizontal" onSubmit={this._handleSubmit}>
              <Label>First Name</Label>
              <input
                type="text"
                onChange={this._handleChange}
                name="FNAME"
                autoFocus
                pattern="[A-Z][A-Za-z]*"
                title="Please capitalize your name."
              />
              <Label>Last Name</Label>
              <input
                type="text"
                onChange={this._handleChange}
                name="LNAME"
                pattern="[A-Z][A-Za-z]*"
                title="Please capitalize your name."
              />
              <Label>Email Address</Label>
              <input type="email" onChange={this._handleChange} name="email" />
              <Input type="submit" />
            </form>
          </div>
        </div>
      </Popup>
    )
  }
}

export default EmailPopup

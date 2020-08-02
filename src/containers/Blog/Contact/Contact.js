import React, { Component } from "react";
import "./Contact.css";
import Aux from "../../../hoc/Aux/Aux";
class Contact extends Component {
  render() {
    return (
      <Aux>
        <div class="effect">
          <h1>For Support</h1>
          <h3>adityac937@outlook.com</h3>
        </div>
        <div class="effect">
          <h1>For Personal Info</h1>
          <h3>adityac937@gmail.com</h3>
        </div>
        <div class="effect">
          <h1>For Weather Info</h1>
          <h3>fetchyouweather@gmail.com</h3>
        </div>
      </Aux>
    );
  }
}
export default Contact;

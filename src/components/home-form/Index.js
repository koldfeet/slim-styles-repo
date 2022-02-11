import React, { Component } from "react";
import '../../styles/Home-Form.css'


class Form extends Component {
    // Setting the component's initial state
    state = {
        firstName: "",
        lastName: "",
        textArea: "",
        enterEmail: ""
    };
    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        // let value = event.target.value;
        const { name, value } = event.target;

        // if (name === "password") {
        //     // @ts-ignore
        //     value = value.substring(0, 15)
        // }
        // Updating the input's state
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        if (!this.state.firstName || !this.state.lastName) {
            alert("Fill out your first and last name please!");
        } else if (!this.state.enterEmail) {
            alert(`Please enter an Email`)
        } else {
            alert(`Hello ${this.state.firstName} ${this.state.lastName} your Email is ${this.state.enterEmail}.
            Thank you for contacting us! 
            We will reply to you shortly.`)
        }

        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        // alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
        this.setState({
            firstName: "",
            lastName: "",
            textArea: "",
            enterEmail: ""
        });
    };
    render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
            // id="contact" is for the smooth scroll
            <div id="contact" className="formPage">
                <hr className="formHr"></hr>
                <h2 className="form-section-h2">Contact Us!</h2>
                <p>
                    <span className="form-input-style">Hello:</span> {this.state.firstName} {this.state.lastName} {this.state.enterEmail}
                </p>
                <form className="form">
                    <input className="firstNameBox"
                        value={this.state.firstName}
                        name="firstName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="First Name"
                    />
                    <input className="lastNameBox"
                        value={this.state.lastName}
                        name="lastName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Last Name"
                    />
                    <input className="emailBox"
                        value={this.state.enterEmail}
                        name="enterEmail"
                        onChange={this.handleInputChange}
                        type="email"
                        placeholder="Email"
                    />
                    <textarea className="textBox" placeholder="Tell us more"></textarea>

                    <button className="buttonStyle" onClick={this.handleFormSubmit}>Submit</button>

                </form>
                <hr className="formHr"></hr>
            </div>
        );
    }
}
export default Form;
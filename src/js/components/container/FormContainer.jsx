import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input.jsx";

console.log('here');
console.log(Input);

class FormContainer extends Component {
    constructor() {
        super();

        this.state = {
            seo_title: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event.target.id);
        console.log(event.target.value);
        this.setState({ [event.target.id]: event.target.value });
        console.log(this.state);
    }

    render() {
        const { seo_title } = this.state;
        return (
            <form id="article-form">
              <Input
                text="SEO title"
                label="seo_title"
                type="text"
                id="seo_title"
                value={seo_title}
                handleChange={this.handleChange}
              />
            </form>
        );
    }
}

export default FormContainer

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
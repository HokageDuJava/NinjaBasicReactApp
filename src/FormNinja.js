import React, { Component } from "react";

class FormNinja extends Component {
  state = {
    firstName: "?",
    age: 0,
    village: "?"
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.addNinja(this.state);
  };

  render() {
    return (
      <div className="ninjaForm">
        <form onSubmit={this.handleSubmit}>
          <p>
            My name is <span>{this.state.firstName}</span> and I'm{" "}
            <span>{this.state.age}</span>. I live in{" "}
            <span>{this.state.village}</span> village.
          </p>
          <fieldset>
            <legend>Ninja information : </legend>
            <p>
              <label htmlFor="firstName">firstName : </label>
              <input type="text" id="firstName" onChange={this.handleChange} />
            </p>

            <p>
              <label htmlFor="age">Age : </label>
              <input type="number" id="age" onChange={this.handleChange} />
            </p>

            <p>
              <label htmlFor="village">Village : </label>
              <input type="text" id="village" onChange={this.handleChange} />
            </p>

            <input type="submit" />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default FormNinja;

import React, { Component } from "react";
import PropTypes from "prop-types";

export default class FormInput extends Component {

  input = React.createRef()

  validate = () =>{
    const {  name,validateFunc ,validate } = this.props;
    validateFunc(this.input.current, validate, name)
  }

  content() {
    const { type, name, placeholder, autocomplete, withError } = this.props;
    return (
      <input
        ref={this.input}
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={autocomplete}
        onKeyUp={()=>{this.validate()}}
        className={withError?" error":""}
      />
    );
  }

  render() {
    return this.content();
  }
}

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  autocomplete: PropTypes.string.isRequired,
  validateFunc: PropTypes.func.isRequired,
  validate: PropTypes.object,
  withError: PropTypes.bool
};

import React, { Component } from "react";
import PropTypes from "prop-types";

export default class FormTextarea extends Component {

  input = React.createRef();

  validate = () =>{
    const {  name,validateFunc ,validate } = this.props;
    validateFunc(this.input.current, validate, name)
  }

  content() {
    const { name,placeholder,autocomplete,rows, withError } = this.props;
    let cssClass = withError?" error":"";
    return (
        <textarea
        ref={this.input}
          name={name}
          placeholder={placeholder}
          autoComplete={autocomplete}
          rows={rows}
          onKeyUp={()=>{this.validate()}}
          className={cssClass}
        />
    );
  }

  render() {
    return this.content();
  }
}

FormTextarea.propTypes = {
    rows: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    autocomplete: PropTypes.string.isRequired,
    validateFunc: PropTypes.func.isRequired,
    validate: PropTypes.object,
    withError: PropTypes.bool,
}


import React, { Component } from "react";
import PropTypes from "prop-types";

export default class FormCheckbox extends Component {

  content() {
    const { name,placeholder,autocomplete,rows, validateFunc ,validate, withError } = this.props;
    return (
        <textarea
          name={name}
          placeholder={placeholder}
          autoComplete={autocomplete}
          rows={rows}
          onKeyUp={validateFunc.bind(this, validate, name)}
          className={withError?" error":""}
        />
    );
  }

  render() {
    return this.content();
  }
}

FormCheckbox.propTypes = {
    name: PropTypes.string.isRequired,
    validateFunc: PropTypes.func.isRequired,
    validate: PropTypes.object,
    withError: PropTypes.bool
}


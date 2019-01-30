import React, { Component } from "react";
import PropTypes from "prop-types";

export default class FormSwitch extends Component {

  input = React.createRef()
  
  validate = () =>{
    const {  name,validateFunc ,validate } = this.props;
    validateFunc(this.input.current, validate, name)
  }

  content() {
    const { name, validateFunc, validate, withError } = this.props;
    return (
      <label className="switch">
        <strong>NO</strong>
        <input
        ref={this.input}
          type="checkbox"
          className={withError?" error":""}
          name={name}
          onChange={()=>{this.validate()}}
        />
        <span className={"slider round"} />
        <strong>SI</strong>
      </label>
    );
  }

  render() {
    return this.content();
  }
}

FormSwitch.propTypes = {
  name: PropTypes.string.isRequired,
  validateFunc: PropTypes.func.isRequired,
  validate: PropTypes.object,
  withError: PropTypes.bool,
};

import React from "react";
import PropTypes from "prop-types";

var FormError = function FormError(props) {
  var errorMsg = props.errorMsg;
  return React.createElement("div", {
    class: "error-msg"
  }, React.createElement("p", null, errorMsg));
};

PropTypes.FormError = {
  errorMsg: PropTypes.string.isRequired
};
export default FormError;
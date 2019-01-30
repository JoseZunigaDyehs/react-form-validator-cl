import React from "react";
import PropTypes from "prop-types";

const FormError = props => {
  const { errorMsg } = props;
  return (
    <div class="error-msg">
      <p>{errorMsg}</p>
    </div>
  );
};

PropTypes.FormError = {
  errorMsg: PropTypes.string.isRequired
};

export default FormError;

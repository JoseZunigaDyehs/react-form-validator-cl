import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";

var FormCheckbox =
/*#__PURE__*/
function (_Component) {
  _inherits(FormCheckbox, _Component);

  function FormCheckbox() {
    _classCallCheck(this, FormCheckbox);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormCheckbox).apply(this, arguments));
  }

  _createClass(FormCheckbox, [{
    key: "content",
    value: function content() {
      var _this$props = this.props,
          name = _this$props.name,
          placeholder = _this$props.placeholder,
          autocomplete = _this$props.autocomplete,
          rows = _this$props.rows,
          validateFunc = _this$props.validateFunc,
          validate = _this$props.validate,
          withError = _this$props.withError;
      return React.createElement("textarea", {
        name: name,
        placeholder: placeholder,
        autoComplete: autocomplete,
        rows: rows,
        onKeyUp: validateFunc.bind(this, validate, name),
        className: withError ? " error" : ""
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.content();
    }
  }]);

  return FormCheckbox;
}(Component);

export { FormCheckbox as default };
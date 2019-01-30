import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";

var FormInput =
/*#__PURE__*/
function (_Component) {
  _inherits(FormInput, _Component);

  function FormInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FormInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FormInput)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.input = React.createRef();

    _this.validate = function () {
      var _this$props = _this.props,
          name = _this$props.name,
          validateFunc = _this$props.validateFunc,
          validate = _this$props.validate;
      validateFunc(_this.input.current, validate, name);
    };

    return _this;
  }

  _createClass(FormInput, [{
    key: "content",
    value: function content() {
      var _this2 = this;

      var _this$props2 = this.props,
          type = _this$props2.type,
          name = _this$props2.name,
          placeholder = _this$props2.placeholder,
          autocomplete = _this$props2.autocomplete,
          withError = _this$props2.withError;
      return React.createElement("input", {
        ref: this.input,
        type: type,
        name: name,
        placeholder: placeholder,
        autoComplete: autocomplete,
        onKeyUp: function onKeyUp() {
          _this2.validate();
        },
        className: withError ? " error" : ""
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.content();
    }
  }]);

  return FormInput;
}(Component);

export { FormInput as default };
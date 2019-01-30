import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";

var FormSwitch =
/*#__PURE__*/
function (_Component) {
  _inherits(FormSwitch, _Component);

  function FormSwitch() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FormSwitch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FormSwitch)).call.apply(_getPrototypeOf2, [this].concat(args)));
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

  _createClass(FormSwitch, [{
    key: "content",
    value: function content() {
      var _this2 = this;

      var _this$props2 = this.props,
          name = _this$props2.name,
          validateFunc = _this$props2.validateFunc,
          validate = _this$props2.validate,
          withError = _this$props2.withError;
      return React.createElement("label", {
        className: "switch"
      }, React.createElement("strong", null, "NO"), React.createElement("input", {
        ref: this.input,
        type: "checkbox",
        className: withError ? " error" : "",
        name: name,
        onChange: function onChange() {
          _this2.validate();
        }
      }), React.createElement("span", {
        className: "slider round"
      }), React.createElement("strong", null, "SI"));
    }
  }, {
    key: "render",
    value: function render() {
      return this.content();
    }
  }]);

  return FormSwitch;
}(Component);

export { FormSwitch as default };
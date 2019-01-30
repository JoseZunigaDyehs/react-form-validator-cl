import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";

var FormTextarea =
/*#__PURE__*/
function (_Component) {
  _inherits(FormTextarea, _Component);

  function FormTextarea() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FormTextarea);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FormTextarea)).call.apply(_getPrototypeOf2, [this].concat(args)));
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

  _createClass(FormTextarea, [{
    key: "content",
    value: function content() {
      var _this2 = this;

      var _this$props2 = this.props,
          name = _this$props2.name,
          placeholder = _this$props2.placeholder,
          autocomplete = _this$props2.autocomplete,
          rows = _this$props2.rows,
          withError = _this$props2.withError;
      var cssClass = withError ? " error" : "";
      return React.createElement("textarea", {
        ref: this.input,
        name: name,
        placeholder: placeholder,
        autoComplete: autocomplete,
        rows: rows,
        onKeyUp: function onKeyUp() {
          _this2.validate();
        },
        className: cssClass
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.content();
    }
  }]);

  return FormTextarea;
}(Component);

export { FormTextarea as default };
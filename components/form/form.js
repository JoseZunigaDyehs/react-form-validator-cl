import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import React, { Component } from "react";
import "../../assets/styles.css";
import FormError from "./form-error";
import FormInput from "./form-input";
import FormTextarea from "./form-textarea";
import * as Validator from "./validator";
import FormSelect from "./form-select";
import FormSwitch from "./form-switch";
import FormFile from "./form-file"; // import { form } from "../../data"

var Form =
/*#__PURE__*/
function (_Component) {
  _inherits(Form, _Component);

  function Form() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Form)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      enabled: false,
      error: false,
      isFetching: false,
      files: [],
      invalidFiels: [],
      validate: false
    };
    _this.buttonSend = React.createRef();

    _this.componentWillUnmount = function () {
      _this.state.setState({
        invalidFiels: [],
        validate: false,
        error: false,
        isFetching: false
      });
    };

    _this.sendFormStart = function () {
      _this.state.setState({
        isFetching: true
      });
    };

    _this.sendFormEnd = function () {
      _this.state.setState({
        isFetching: false
      });
    };

    _this.enabledForm = function () {
      _this.state.setState({
        enabled: true
      });
    };

    _this.disabledForm = function () {
      _this.state.setState({
        enabled: false
      });
    };

    _this.setFiles = function (data) {
      var files = _this.state;

      _this.state.setState({
        files: files.push(data)
      });
    };

    _this.deleteFile = function (index) {
      var files = _this.state;

      _this.state.setState({
        files: files.splice(index, 1)
      });
    };

    _this.sendForm = function (dataForm, url) {};

    _this.validate = function (e, validates, name) {
      var typesValidate = validates.types;
      var error = false,
          input = e.target === undefined ? e : e.target,
          arr = _this.state.invalidFiels;
      arr = arr.filter(function (item) {
        return item !== name;
      });
      var required = typesValidate.filter(function (item) {
        return item === "required";
      });
      required = required.length > 0;
      typesValidate.forEach(function (map) {
        if (!Validator[map](input, validates, required)) error = true;
      });

      if (error) {
        arr.push(name);
      }

      _this.setState({
        invalidFiels: arr
      });
    };

    _this.validateAll = function (fields, fieldsDOM) {
      var arr = [];

      var _loop = function _loop(i) {
        var map = fieldsDOM[i],
            field = fields[i],
            name = field.name,
            validates = field.validate,
            typesValidate = validates.types;
        var input = map.elements[0],
            error = false,
            required = typesValidate.filter(function (item) {
          return item === "required";
        });
        required = required.length > 0;
        input = input !== undefined ? input : map.getElementsByClassName("options")[0];
        arr = arr.filter(function (item) {
          return item !== name;
        });
        typesValidate.forEach(function (map) {
          if (!Validator[map](input, validates, required)) error = true;
        });

        if (error) {
          arr.push(name);
        }
      };

      for (var i = 0; i < fieldsDOM.length; i++) {
        _loop(i);
      }

      return arr;
    };

    _this.closeForm = function () {
      _this.state.setState({
        enabled: false
      });
    };

    _this.sendDataForm = function () {
      var _this$props = _this.props,
          sendFunc = _this$props.sendFunc,
          fields = _this$props.fields,
          _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)),
          buttonSend = _assertThisInitialize.buttonSend,
          fieldsDOM = buttonSend.current.closest("form").getElementsByTagName("fieldset"),
          arr = _this.validateAll(fields, fieldsDOM);

      var dataForm = {};

      if (arr.length > 0) {
        _this.setState({
          invalidFiels: arr
        });
      } else {
        for (var i = 0; i < fieldsDOM.length; i++) {
          var input = fieldsDOM[i].elements[0],
              value = "",
              name = "";

          if (input !== undefined) {
            value = input.value;
            name = input.name;
          } else {
            value = fieldsDOM[i].lastChild.firstChild.dataset.valor;
            name = "opciones";
          }

          dataForm[name] = value;
        }

        sendFunc(dataForm);
      }
    };

    _this.fillError = function (withError, error) {
      return withError ? React.createElement("p", null, React.createElement("small", {
        className: "error"
      }, error)) : null;
    };

    _this.fillErrorComponent = function () {
      return _this.state.error ? React.createElement(FormError, {
        errorMsg: _this.props.errorMsg
      }) : null;
    };

    _this.fillContent = function (fields) {
      if (fields.length > 0) {
        var retorno = [];
        fields.forEach(function (map, i) {
          var withError = _this.state.invalidFiels.includes(map.name);

          switch (map.type) {
            case "textarea":
              retorno.push(React.createElement("fieldset", {
                key: i + map.name
              }, React.createElement("legend", null, map.legend), React.createElement(FormTextarea, {
                rows: map.rows,
                name: map.name,
                placeholder: map.placeholder,
                autocomplete: map.autocomplete,
                validateFunc: _this.validate,
                validate: map.validate,
                withError: withError
              }), _this.fillError(withError, map.validate.error)));
              break;

            case "select":
              retorno.push(React.createElement("fieldset", {
                key: i + map.name
              }, React.createElement("legend", null, map.legend), React.createElement(FormSelect, {
                name: map.name,
                validateFunc: _this.validate,
                validate: map.validate,
                withError: withError,
                options: map.options
              }), _this.fillError(withError, map.validate.error)));
              break;

            case "checkbox":
              retorno.push(React.createElement("fieldset", {
                key: i + map.name
              }, React.createElement("legend", null, map.legend), React.createElement(FormSwitch, {
                name: map.name,
                validateFunc: _this.validate,
                validate: map.validate,
                withError: withError
              }), _this.fillError(withError, map.validate.error)));
              break;

            case "file":
              var _this$props2 = _this.props,
                  attachFileForm = _this$props2.attachFileForm,
                  formularioStates = _this$props2.formularioStates,
                  general = _this$props2.general,
                  colorHeader = _this$props2.colorHeader,
                  deleteFileForm = _this$props2.deleteFileForm;
              retorno.push(React.createElement("fieldset", {
                key: i + map.name
              }, React.createElement("legend", null, map.legend), React.createElement(FormFile, {
                validateFunc: _this.validate,
                validate: map.validate,
                withError: withError,
                general: general,
                attachFileForm: attachFileForm,
                colorHeader: colorHeader,
                type: map.type,
                name: map.name,
                formularioStates: formularioStates,
                deleteFileForm: deleteFileForm,
                attach: map.validate.rules
              }), _this.fillError(withError, map.validate.error)));
              break;

            default:
              retorno.push(React.createElement("fieldset", {
                key: i + map.name
              }, React.createElement("legend", null, map.legend), React.createElement(FormInput, {
                type: map.type,
                name: map.name,
                placeholder: map.placeholder,
                autocomplete: map.autocomplete,
                validate: map.validate,
                withError: withError,
                validateFunc: _this.validate
              }), _this.fillError(withError, map.validate.error)));
              break;
          }
        });
        return retorno;
      } else {
        return null;
      }
    };

    _this.content = function () {
      var _this$props3 = _this.props,
          fields = _this$props3.fields,
          distinctFieldsMsg = _this$props3.distinctFieldsMsg,
          autoComplete = _this$props3.autoComplete;
      return React.createElement("div", {
        className: "form-container "
      }, React.createElement("div", {
        className: "container-form"
      }, React.createElement("form", {
        autoComplete: autoComplete
      }, React.createElement("div", {
        className: "header-form"
      }), React.createElement("p", {
        className: "red"
      }, distinctFieldsMsg), _this.fillContent(fields), React.createElement("button", {
        type: "button",
        ref: _this.buttonSend,
        onClick: function onClick() {
          _this.sendDataForm();
        },
        className: "button-send"
      }, "Enviar")), _this.fillErrorComponent()));
    };

    _this.render = function () {
      debugger;
      return _this.content();
    };

    return _this;
  }

  return Form;
}(Component);

export { Form as default };
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";

var FormSelect =
/*#__PURE__*/
function (_Component) {
  _inherits(FormSelect, _Component);

  function FormSelect() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FormSelect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FormSelect)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      selected: -1,
      active: false
    };
    _this.options = React.createRef();

    _this.fillOptions = function (options) {
      return options.map(function (map, i) {
        return React.createElement("option", {
          value: map.value
        }, map.text);
      });
    };

    _this.activeSelect = function () {
      _this.setState({
        active: !_this.state.active
      });
    };

    _this.setSelected = function (validate, name, validateFunc, e) {
      var selected = e.target.dataset.value;
      _this.options.current.dataset.valor = selected;
      validateFunc(e.target.closest(".options"), validate, name);

      _this.setState({
        selected: selected,
        active: false
      });
    };

    _this.fillOptionsShow = function (options) {
      var _this$props = _this.props,
          validateFunc = _this$props.validateFunc,
          validate = _this$props.validate,
          name = _this$props.name,
          required = validate.types.filter(function (item) {
        return item === "required";
      }),
          seleccionado = _this.state.selected;
      var retorno = [];
      options.forEach(function (map, i) {
        if (seleccionado == map.value) {
          //SELECCIONADO
          retorno.push(React.createElement("div", {
            key: i,
            "data-value": map.value,
            onClick: function onClick() {
              _this.activeSelect();
            }
          }, map.text));
        }
      });
      options.forEach(function (map, i) {
        if (required.length === 0) {
          //NO REQUERIDO
          if (seleccionado == map.value) {
            // si esta seleccionado y no es el seleccione
            retorno.push(React.createElement("div", {
              "data-value": map.value,
              key: i + map.text,
              onClick: function onClick(e) {
                _this.activeSelect(e);
              },
              className: "disabled"
            }, map.text));
          } else {
            // si es otro
            retorno.push(React.createElement("div", {
              "data-value": map.value,
              key: i + map.text,
              onClick: function onClick(e) {
                _this.setSelected(validate, name, validateFunc, e);
              }
            }, map.text));
          }
        } else {
          //SI ES REQUERIDO
          if (seleccionado == map.value && map.value !== -1) {
            // si esta seleccionado y no es el seleccione
            retorno.push(React.createElement("div", {
              "data-value": map.value,
              key: i + map.text,
              onClick: function onClick(e) {
                _this.activeSelect(e);
              },
              className: "disabled"
            }, map.text));
          } else if (map.value == -1) {
            return null;
          } else {
            // si es otro
            retorno.push(React.createElement("div", {
              "data-value": map.value,
              key: i + map.text,
              onClick: function onClick(e) {
                _this.setSelected(validate, name, validateFunc, e);
              }
            }, map.text));
          }
        }
      });
      return retorno;
    };

    _this.content = function () {
      var _this$props2 = _this.props,
          options = _this$props2.options,
          withError = _this$props2.withError;
      var cssClass = _this.state.active ? " active" : "",
          cssClassError = withError ? " error" : "";
      return React.createElement("div", {
        className: "select"
      }, React.createElement("div", {
        className: "options" + cssClass + cssClassError,
        ref: _this.options
      }, _this.fillOptionsShow(options)));
    };

    _this.render = function () {
      return _this.content();
    };

    return _this;
  }

  return FormSelect;
}(Component);

export { FormSelect as default };
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import React, { Component } from "react";

var FormFile =
/*#__PURE__*/
function (_Component) {
  _inherits(FormFile, _Component);

  function FormFile(props) {
    var _this;

    _classCallCheck(this, FormFile);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormFile).call(this, props));
    _this.attach = React.createRef();
    _this.attachFile = _this.attachFile.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.attachIconClick = _this.attachIconClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.deleteFile = _this.deleteFile.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      error: null,
      enabled: true
    };
    return _this;
  }

  _createClass(FormFile, [{
    key: "deleteFile",
    value: function deleteFile(i, event) {
      var deleteFileForm = this.props.deleteFileForm;
      deleteFileForm(i);
    }
  }, {
    key: "attachIconClick",
    value: function attachIconClick() {
      this.attach.current.click();
    }
  }, {
    key: "attachFile",
    value: function attachFile() {
      var size = this.attach.current.files[0].size,
          _this$props = this.props,
          attachFileForm = _this$props.attachFileForm,
          general = _this$props.general,
          attach = _this$props.attach;

      if (size > 0 && size <= attach.get("maxSize")) {
        var file = this.attach.current.files[0],
            type = file.type,
            types = attach.get("types");
        var valid = false;
        types.forEach(function (el) {
          if (el === type) valid = true;
        });

        if (valid) {
          var item = {};
          item.file = file;
          item.general = general.toJS();
          attachFileForm(item);
          this.setState({
            error: null,
            enabled: false
          });
        } else {
          this.setState({
            error: "No hay mano"
          });
        }
      } else {
        this.setState({
          error: "Excede el máximo permitido"
        });
      }
    }
  }, {
    key: "fillError",
    value: function fillError() {
      if (this.state.error !== null) {
        var mainCss = this.props.mainCss;
        return React.createElement("p", {
          className: mainCss.Error
        }, this.state.error);
      }
    }
  }, {
    key: "fillFiles",
    value: function fillFiles(files) {
      var _this2 = this;

      var retorno = files.map(function (map, i) {
        return React.createElement("li", {
          key: i
        }, React.createElement("a", {
          target: "_blank",
          rel: "noopener noreferrer",
          href: map.get("url")
        }, map.get("name")), React.createElement("i", {
          onClickCapture: _this2.deleteFile.bind(_this2, i),
          className: "fas fa-times"
        }));
      });
      return React.createElement("ul", null, retorno);
    }
  }, {
    key: "content",
    value: function content() {
      var _this$props2 = this.props,
          type = _this$props2.type,
          name = _this$props2.name,
          formularioStates = _this$props2.formularioStates,
          mainCss = _this$props2.mainCss,
          files = formularioStates.get("files");
      var cssClass = this.state.error ? " " + mainCss.Error : "";

      if (files && files.size > 0) {
        return React.createElement("div", null, React.createElement("input", {
          type: type,
          ref: this.attach,
          className: "hide",
          name: name,
          onChange: this.attachFile
        }), React.createElement("button", {
          disabled: this.state.enabled,
          type: "button",
          onClick: this.attachIconClick,
          className: mainCss.Btn + " " + mainCss.BtnAttach + cssClass
        }, "Adjuntar", React.createElement("i", {
          className: "fas fa-paperclip"
        })), this.fillFiles(files));
      } else {
        return React.createElement("div", null, React.createElement("input", {
          type: type,
          ref: this.attach,
          className: mainCss.Hide,
          name: name,
          onChange: this.attachFile
        }), React.createElement("button", {
          type: "button",
          onClick: this.attachIconClick,
          className: mainCss.Btn + " " + mainCss.BtnAttach + cssClass
        }, "Adjuntar", React.createElement("i", {
          className: "fas fa-paperclip"
        })));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.content();
    }
  }]);

  return FormFile;
}(Component);

export { FormFile as default };
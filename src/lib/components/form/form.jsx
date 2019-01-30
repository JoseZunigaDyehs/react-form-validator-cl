import React, { Component } from "react";
import "../../assets/styles.css";
import FormError from "./form-error";
import FormInput from "./form-input";
import FormTextarea from "./form-textarea";
import * as Validator from "./validator";
import FormSelect from "./form-select";
import FormSwitch from "./form-switch";
import FormFile from "./form-file";

// import { form } from "../../data"

export default class Form extends Component {
  //CONSTRUCTOR
  state = {
    enabled: false,
    error: false,
    isFetching: false,
    files: [],
    invalidFiels: [],
    validate: false
  };
  buttonSend = React.createRef();

  //LIFECYCLE
  componentWillUnmount = () => {
    this.state.setState({
      invalidFiels: [],
      validate: false,
      error: false,
      isFetching: false
    });
  };

  //ACTIONS
  sendFormStart = () => {
    this.state.setState({
      isFetching: true
    });
  };

  sendFormEnd = () => {
    this.state.setState({
      isFetching: false
    });
  };

  enabledForm = () => {
    this.state.setState({
      enabled: true
    });
  };

  disabledForm = () => {
    this.state.setState({
      enabled: false
    });
  };

  setFiles = data => {
    const files = this.state;
    this.state.setState({
      files: files.push(data)
    });
  };

  deleteFile = index => {
    const files = this.state;
    this.state.setState({
      files: files.splice(index, 1)
    });
  };

  sendForm = (dataForm, url) => {};

  //HANDLES
  validate = (e, validates, name) => {
    const typesValidate = validates.types;
    let error = false,
      input = e.target === undefined ? e : e.target,
      arr = this.state.invalidFiels;
    arr = arr.filter(item => item !== name);
    let required = typesValidate.filter(item => item === "required");
    required = required.length > 0;
    typesValidate.forEach(map => {
      if (!Validator[map](input, validates, required)) error = true;
    });
    if (error) {
      arr.push(name);
    }
    this.setState({
      invalidFiels: arr
    });
  };

  validateAll = (fields, fieldsDOM) => {
    let arr = [];
    for (let i = 0; i < fieldsDOM.length; i++) {
      const map = fieldsDOM[i],
        field = fields[i],
        name = field.name,
        validates = field.validate,
        typesValidate = validates.types;
      let input = map.elements[0],
        error = false,
        required = typesValidate.filter(item => item === "required");

      required = required.length > 0;

      input =
        input !== undefined ? input : map.getElementsByClassName("options")[0];

      arr = arr.filter(item => item !== name);
      typesValidate.forEach(map => {
        if (!Validator[map](input, validates, required)) error = true;
      });

      if (error) {
        arr.push(name);
      }
    }
    return arr;
  };

  closeForm = () => {
    this.state.setState({
      enabled: false
    });
  };

  sendDataForm = () => {
    const { sendFunc, fields } = this.props,
    { buttonSend } = this,
    fieldsDOM = buttonSend.current
    .closest("form")
    .getElementsByTagName("fieldset"),
    arr = this.validateAll(fields, fieldsDOM);
    let dataForm = {};
    if (arr.length > 0) {
      this.setState({
        invalidFiels: arr
      });
    } else {
      for (let i = 0; i < fieldsDOM.length; i++) {
        
        let input = fieldsDOM[i].elements[0],
        value = "",
        name = "";
        if(input!==undefined){
          value = input.value;
          name = input.name;
        }else{
          value = fieldsDOM[i].lastChild.firstChild.dataset.valor;
          name = "opciones";
        }
        dataForm[name] = value;
      }
      sendFunc(dataForm);
    }
  };

  //RENDER

  fillError = (withError, error) => {
    return withError ? (
      <p>
        <small className="error">{error}</small>
      </p>
    ) : null;
  };

  fillErrorComponent = () => {
    return this.state.error ? (
      <FormError errorMsg={this.props.errorMsg} />
    ) : null;
  };

  fillContent = fields => {
    if (fields.length > 0) {
      const retorno = [];
      fields.forEach((map, i) => {
        const withError = this.state.invalidFiels.includes(map.name);
        switch (map.type) {
          case "textarea":
            retorno.push(
              <fieldset key={i + map.name}>
                <legend>{map.legend}</legend>
                <FormTextarea
                  rows={map.rows}
                  name={map.name}
                  placeholder={map.placeholder}
                  autocomplete={map.autocomplete}
                  validateFunc={this.validate}
                  validate={map.validate}
                  withError={withError}
                />
                {this.fillError(withError, map.validate.error)}
              </fieldset>
            );
            break;
          case "select":
            retorno.push(
              <fieldset key={i + map.name}>
                <legend>{map.legend}</legend>
                <FormSelect
                  name={map.name}
                  validateFunc={this.validate}
                  validate={map.validate}
                  withError={withError}
                  options={map.options}
                />
                {this.fillError(withError, map.validate.error)}
              </fieldset>
            );
            break;
          case "checkbox":
            retorno.push(
              <fieldset key={i + map.name}>
                <legend>{map.legend}</legend>
                <FormSwitch
                  name={map.name}
                  validateFunc={this.validate}
                  validate={map.validate}
                  withError={withError}
                />
                {this.fillError(withError, map.validate.error)}
              </fieldset>
            );
            break;
          case "file":
            const {
              attachFileForm,
              formularioStates,
              general,
              colorHeader,
              deleteFileForm
            } = this.props;
            retorno.push(
              <fieldset key={i + map.name}>
                <legend>{map.legend}</legend>
                <FormFile
                  validateFunc={this.validate}
                  validate={map.validate}
                  withError={withError}
                  general={general}
                  attachFileForm={attachFileForm}
                  colorHeader={colorHeader}
                  type={map.type}
                  name={map.name}
                  formularioStates={formularioStates}
                  deleteFileForm={deleteFileForm}
                  attach={map.validate.rules}
                />
                {this.fillError(withError, map.validate.error)}
              </fieldset>
            );
            break;
          default:
            retorno.push(
              <fieldset key={i + map.name}>
                <legend>{map.legend}</legend>
                <FormInput
                  type={map.type}
                  name={map.name}
                  placeholder={map.placeholder}
                  autocomplete={map.autocomplete}
                  validate={map.validate}
                  withError={withError}
                  validateFunc={this.validate}
                />
                {this.fillError(withError, map.validate.error)}
              </fieldset>
            );
            break;
        }
      });
      return retorno;
    } else {
      return null;
    }
  };

  content = () => {
    const { fields, distinctFieldsMsg, autoComplete } = this.props;
    return (
      <div className={"form-container "}>
        <div className="container-form">
          <form autoComplete={autoComplete}>
            <div className="header-form" />
            <p className="red">{distinctFieldsMsg}</p>
            {this.fillContent(fields)}
            <button
              type="button"
              ref={this.buttonSend}
              onClick={() => {
                this.sendDataForm();
              }}
              className="button-send"
            >
              Enviar
            </button>
          </form>
          {this.fillErrorComponent()}
        </div>
      </div>
    );
  };

  render = () => {
    debugger
    return this.content();
  };
}

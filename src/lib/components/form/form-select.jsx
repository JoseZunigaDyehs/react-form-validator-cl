import React, { Component } from "react";
import PropTypes from "prop-types";

export default class FormSelect extends Component {
  state = {
    selected: -1,
    active: false
  };
  options = React.createRef();

  fillOptions = options => {
    return options.map((map, i) => {
      return <option value={map.value}>{map.text}</option>;
    });
  };
  activeSelect = () => {
    
    this.setState({
      active: !this.state.active
    });
  };

  setSelected = (validate, name, validateFunc, e) => {
    
    let selected = e.target.dataset.value;
    this.options.current.dataset.valor = selected;
    validateFunc(e.target.closest(".options"),validate, name);
    this.setState({
      selected,
      active: false
    });
  };

  fillOptionsShow = options => {
    
    const { validateFunc, validate, name } = this.props,
      required = validate.types.filter(item => item === "required"),
      seleccionado = this.state.selected;
    let retorno = [];
    options.forEach((map, i) => {
      if (seleccionado == map.value) {
        //SELECCIONADO
        retorno.push(
          <div key={i} data-value={map.value} onClick={()=>{this.activeSelect()}}>
            {map.text}
          </div>
        );
      }
    });
    options.forEach((map, i) => {
      if (required.length === 0) {
        //NO REQUERIDO
        if (seleccionado == map.value) {
          // si esta seleccionado y no es el seleccione
          retorno.push(
            <div
              data-value={map.value}
              key={i + map.text}
              onClick={(e)=>{this.activeSelect(e)}}
              className="disabled"
            >
              {map.text}
            </div>
          );
        } else {
          // si es otro
          retorno.push(
            <div
              data-value={map.value}
              key={i + map.text}
              onClick={(e)=>{this.setSelected(
                validate,
                name,
                validateFunc,
                e,
              )}}
            >
              {map.text}
            </div>
          );
        }
      } else {
        //SI ES REQUERIDO
        if (seleccionado == map.value && map.value !== -1) {
          // si esta seleccionado y no es el seleccione
          retorno.push(
            <div
              data-value={map.value}
              key={i + map.text}
              onClick={(e)=>{this.activeSelect(e)}}
              className="disabled"
            >
              {map.text}
            </div>
          );
        } else if (map.value == -1) {
          return null;
        } else {
          // si es otro
          retorno.push(
            <div
              data-value={map.value}
              key={i + map.text}
              onClick={(e)=>{this.setSelected(
                validate,
                name,
                validateFunc,
                e
              )}}
            >
              {map.text}
            </div>
          );
        }
      }
    });

    return retorno;
  };

  content = () => {
    const { options, withError } = this.props;
    let cssClass = this.state.active ? " active" : "",
      cssClassError = withError ? " error" : "";
    return (
      <div className="select">
        <div
          className={"options" + cssClass + cssClassError}
          ref={this.options}
        >
          {this.fillOptionsShow(options)}
        </div>
      </div>
    );
  };

  render = () => {
    return this.content();
  };
}

FormSelect.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.any.isRequired,
  validateFunc: PropTypes.func.isRequired,
  validate: PropTypes.object,
  withError: PropTypes.bool,
};

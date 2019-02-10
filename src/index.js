import React from "react";
import ReactDOM from "react-dom";
import Form from "./lib/components/form/form";
const fields = [
  {
    legend: "Nombre*",
    type: "text",
    name: "nombre",
    placeholder: "Ej. Juan",
    autocomplete: "off",
    validate: {
      types: ["required", "text"],
      rules: { min: 3, max: 10 },
      error: "Debes completar el nombre (mínimo 3, máximo 10)"
    }
  },
  {
    legend: "Rut*",
    type: "text",
    name: "rut",
    placeholder: "Ej. 11111111-1",
    autocomplete: "off",
    validate: {
      types: ["required", "rut"],
      error: "Debes ingresar un rut válido"
    }
  },
  {
    legend: "Teléfono",
    type: "tel",
    name: "telefono",
    placeholder: "Ej. 912345678",
    autocomplete: "off",
    validate: {
      types: ["tel"],
      error: "Debes ingresar un teléfono válido"
    }
  },
  {
    legend: "Correo electrónico*",
    type: "email",
    name: "email",
    placeholder: "Ej. nombre@micorreo.cl",
    autocomplete: "off",
    validate: {
      types: ["required", "email"],
      error: "Debes ingresar un correo electrónico válido"
    }
  },
  {
    legend: "Switch*",
    type: "checkbox",
    name: "switch",
    validate: {
      types: ["checkbox"],
      error: "Debes seleccionar el checkbox"
    }
  },
  {
    legend: "Select prueba",
    type: "select",
    name: "opciones",
    options: [
      { text: "Seleccione", value: -1 },
      { text: "Opcion #1", value: 1 },
      { text: "Opcion #2", value: 2 },
      { text: "Opcion #3", value: 3 }
    ],
    validate: {
      types: ["required", "select"],
      error: "Debes seleccionar una opción"
    }
  },
  {
    legend: "Comentario",
    type: "textarea",
    name: "comentario",
    placeholder: "Escriba aquí su comentario",
    autocomplete: "off",
    rows: 5,
    validate: {
      types: ["text"],
      rules: { min: 3, max: 150 },
      error: "Debes completar el nombre (mínimo 3, máximo 150)"
    }
  }
];

const colorFormCss = [
  { fontColor: "#9a9a9f" },
  { primaryColor: "#2979ff" },
  { errorColor: "#dd2c00" },
  { backgroundColor: "#fff" }
];

const sendFunc = dataForm => {
  console.log(dataForm);
  return true;
};

const styleParent = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center'
};

const styleContainerForm = {
  width: "340px",
  margin: '40px 0',
};

ReactDOM.render(
  <div style={styleParent}>
    <div style={styleContainerForm}>
      <Form
        colors={colorFormCss}
        distinctFieldsMsg={"Campos obligatorios (*)"}
        autoComplete={"off"}
        fields={fields}
        sendFunc={sendFunc}
        errorMsg={"ERRORORRO"}
        error={false}
      />
    </div>
  </div>,
  document.getElementById("root")
);

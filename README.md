# react-form-validator-cl

Un simple componente React que permite crear formularios con validaciones.

## Requerimiento

Usarlo en un desarrollo en React

## Demo

[Demo Form Validator CL](https://josezunigadyehs.github.io/react-form-validator-cl/)

## Instalación

Instálalo a traves de npm:
`$ npm install react-form-validator-cl`

## Ejemplo

```
import React from "react";
import ReactDOM from "react-dom";
import Form from "react-form-validator-cl";
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

const style = {
  maxWidth: '340px'
};

const sendFunc = dataForm => {
  console.log(dataForm);
  return true;
};

ReactDOM.render(
  <div style={style}>
    <Form
      colors={colorFormCss}
      distinctFieldsMsg={"Campos obligatorios (*)"}
      autoComplete={"off"}
      fields={fields}
      sendFunc={sendFunc}
      errorMsg={"No se ha podido enviar el formulario"}
      error={false}
    />
  </div>,
  document.getElementById("root")
);
```

## Documentación

El componente Form, permite los siguientes parámetros:

### Form

**fontColor:** color para fuente <br/>
**primaryColor:** color para cabezera y botón <br/>
**errorColor:** color para error <br/>
**backgroundColor:** color de fondo <br/>
**distinctFieldsMsg:** Mensaje para campos obligatorios <br/>
**sendFunction:** Función que se ejecuta al enviar el formulario. <br/>
**errorMsg:** Mensaje de error, se suele usar para errores con el servidor <br/>
**error:** Si el formulario tiene o no error <br/>
**fields:** Array con objetos de campos del formulario <br/>
<br/>

El componente form tiene un ancho de 100%, el cual se adapta al contenedor padre en el que se agregue

```
<Form
    fontColor="gray"
    primaryColor="blue"
    distinctFieldsMsg={"Campos obligatorios (*)"}
    autoComplete={"off"}
    fields={fields}
    sendFunc={sendFunc}
    errorMsg={"ERRORORRO"}
    error={false}
  />
```

### Field

**legend:** Título del campo <br/>
**type:** Tipo de campo <br/>
**name:** Nombre del campo <br/>
**placeholder:** Placeholder del campo <br/>
**autocomplete:** autocomplete personalizado por campo <br/>
**validate:** Objeto con parámetros de validacion <br/>

```
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
```

### Validate

**types:** Array con parámetros para saber si es requerido y el tipo de validación que se necesita <br/>
**rules:** Reglas de la validación <br/>
**error:** Mensaje de error para el campo<br/>

## Tipos de Campos

Existen distintos tipos de validaciones según el campo <br/>

#### Text

```
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
}
```

#### Rut

```
{
    legend: "Rut\*",
    type: "text",
    name: "rut",
    placeholder: "Ej. 11111111-1",
    autocomplete: "off",
    validate: {
        types: ["required", "rut"],
        error: "Debes ingresar un rut válido"
}
```

#### Teléfono

```
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
  }
```

#### Email

```
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
  }
```

#### Switch

```
  {
    legend: "Switch*",
    type: "checkbox",
    name: "switch",
    validate: {
      types: ["checkbox"],
      error: "Debes seleccionar el checkbox"
    }
  }
```

#### Select

Siempre debe tener una opción de Selección con valor "-1"

```
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
  }
```

#### Textarea

```
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
```

##

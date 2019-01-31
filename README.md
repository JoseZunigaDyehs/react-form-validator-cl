# react-form-validator-cl
Un simple componente React que permite crear formularios con validaciones.

## Instalación
Instálalo a traves de npm:
`npm install react-form-validator-cl`

## Uso
El componente Form, permite los siguientes parámetros:

### Form

**fontColor:** color para fuente <br/>
**primaryColor:** color para cabezera y botón <br/>
**distinctFieldsMsg:** Mensaje para campos obligatorios <br/>
**sendFunction:** Función que se ejecuta al enviar el formulario. <br/>
**errorMsg:** Mensaje de error, se suele usar para errores con el servidor <br/>
**error:** Si el formulario tiene o no error <br/>
**fields:** Array con objetos de campos del formulario <br/>

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
````

### Field

**legend:** Título del campo
**type:** Tipo de campo
**name:** Nombre del campo
**placeholder:** Placeholder del campo
**autocomplete:** autocomplete personalizado por campo
**validate:** Objeto con parámetros de validacion

### Validate

types: Array con parámetros para saber si es requerido y el tipo de validación que se necesita
rules: Reglas de la validación
error: Mensaje de error para el campo

### Tipos de Validaciones
Existen distintos de validaciones según el campo
Explicaré cada campo con su ejemplo y su validación correspondiente

### Text: 

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

### Rut:

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
````

### Teléfono

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

### Email

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

### Switch

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

### Select

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

### Textarea

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




<h1 align="center">Fitx Form</h1>

A responsive [React](https://reactjs.org/) form for various input types controlled by a JSON component for faster and easier web development.

<div align="center">

[![npm package](https://img.shields.io/npm/v/fitx-form/latest.svg)](https://www.npmjs.com/package/fitx-form)
[![npm downloads](https://img.shields.io/npm/dm/fitx-form.svg)](https://www.npmjs.com/package/fitx-form)
</div>

## Installation

fitx-form is available as an [npm package](https://www.npmjs.com/package/fitx-form).

```sh
// with npm
npm install fitx-form

// with yarn
yarn add fitx-form
```

Please note that `@next` will only point to pre-releases; to get the latest stable release use `@latest` instead.


## Usage

constants.js

```jsx
export default [
  {
    elements: [
      {
        id: 'fName',
        name: 'First Name',
        type: 'TextInput',
        placeholder: 'Full Name',
      },
    ],
    groupName: 'Personal Details',
    groupId: 'personalDetails',
  },
];
```
Here is a quick example to get you started, **it's all you need**:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import FitxForm from 'fitx-form';
import * as R from 'ramda';
import * as Constants from './constants';

function App() {
  return (
    <FitxForm
      metaData={Constants.metaData}
    />
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

How to handle the events?

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import FitxForm from 'fitx-form';
import * as R from 'ramda';
import * as Constants from './constants';

function App() {
  const [values, setValues] = useState({});
  const onFormValuesChange = (groupId, elementId, value) => {
    const lensProp = R.lensPath([groupId, elementId]);
    const newValue = R.set(lensProp, value, { ...values });
    setValues(newValue);
  };
  const onFormElementClick = (groupId, elementId) => {
    let query = `${groupId} ${elementId}`;
    switch (query) {
      case 'personalDetails submit':
        onPartySave();
        break;
      default: {
        query = '';
      }
    }
  };
  return (
    <FitxForm
      formValues={values}
      metaData={Constants.metaData}
      onChange={onFormValuesChange}
      onClick={onFormElementClick}
      columns={2}
    />
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

## Documentation

#### Component Props

| Props | Type | Description |  
|-----------|:-----------|:-----------|
| `formValues` | object | The value object |
| `metaData` | array | Array of the components |
| `onChange` | func | On Change event |
| `onClick` | func | On Click event |
| `columns` | number | Number of columns to be displayed |

#### Component Props

| Props | Type | Description |  
|-----------|:-----------|:-----------|
| `allowClear` | bool | Enables date clear button |
| `defaultValue` | Based on the `type` | Default value for the field, Triggers onChange when component renders |
| `disabled` | bool | Mark the element to be disabled |
| `displayName` | string | Display text of `ButtonInput` |
| `emptyOption` | bool | Display empty option in `SelectInput` as `placeHolder` |
| `error` | bool | Show the error container and display `errorText` |
| `errorText` | string | String to be displayed in the error container |
| `helperText` | string | String to be displayed as a helper text in error container |
| `max` | number | The max input for Number and Date |
| `maxLength` | number | Max length of the input in chars |
| `min` | number | The min input for Number and Date |
| `onClick` | func | Triggers on a `ButtonInput` click `() => (groupId, elementId)` |
| `onChange` | func | Triggers on a value change `() => (groupId, elementId, value)` |
| `onSelect` | func | Triggers on a value select `() => (groupId, elementId, value)` |
| `options` | array | List of options as `{ label, value, disabled}` |
| `options.label` | string | The display name of the option |
| `options.value` | string | The id of the option |
| `options.disabled` | bool | Disables the option |
| `placeholder` | string | String to be displayed as a placeholder |
| `readOnly` | bool | Marks the field as read only |
| `regex` | regexp | Regex for input value -> error is true if regex fails |
| `spellCheck` | bool | Enables native spell check in text inputs |
| `value` | string | The value to be hardcoded |
| `type` | ButtonInput, CheckboxInput, DateInput, RadioInput, SelectInput, TextInput| The Component Type |
| `subType` | string | Sub type of available components  |

## Example

![Fitx - Form Exapmle](https://raw.githubusercontent.com/RyderKishan/fitx-form/master/src/assets/example.png)

## Changelog

Recently Updated?
Please read the [changelog](https://github.com//RyderKishan/fitx-form/releases).

## Roadmap

1. To Add custom themes
2. Make is more backward compactible

## Author

Balkishan S

[Github](https://github.com/RyderKishan), [Medium](https://medium.com/@kishan020696), [Facebook](https://www.facebook.com/kishan020696), 

## License

This project is licensed under the terms of the [MIT license](/LICENSE).
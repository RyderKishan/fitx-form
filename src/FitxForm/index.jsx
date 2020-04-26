import React from 'react';
import PropTypes from 'prop-types';
import ButtonInput from './wrappers/FFButtonInput';
import CheckboxInput from './wrappers/FFCheckboxInput';
import DateInput from './wrappers/FFDateInput';
import RadioInput from './wrappers/FFRadioInput';
import SelectInput from './wrappers/FFSelectInput';
import TextInput from './wrappers/FFTextInput';
import './FitxForm.css';

const COMPONENTS = {
  ButtonInput,
  CheckboxInput,
  DateInput,
  RadioInput,
  SelectInput,
  TextInput,
};

const renderer = (gp, element, formValues, onChange, onClick) => {
  const Annotation = COMPONENTS[element.type];
  const { groupId } = gp;
  const { id } = element;
  const value = formValues && groupId && id && formValues[groupId]
    && formValues[groupId][id];
  return (
    <tr key={element.id} className="FF-Element">
      {
        element.name && (
          <td className="Element-Name">
            {element.name}
          </td>
        )
      }
      <td className="Element-Type" id={element.id}>
        {Annotation && (
          <Annotation
            {...element}
            onChange={(val) => onChange(gp.groupId, element.id, val)}
            onClick={() => onClick(gp.groupId, element.id)}
            onSelect={(val) => onChange(gp.groupId, element.id, val)}
            type={element.subType}
            value={value}
          />
        )}
      </td>
    </tr>
  );
};

const FitxForm = (props) => {
  const {
    metaData, formValues, onChange, onClick, columns,
  } = props;
  return (
    <div className="FF-Root" style={{ gridTemplateColumns: `repeat(${columns}, auto)` }}>
      {
        metaData.map((gp) => !gp.hide && (
          <div
            className="FF-Group"
            key={gp.groupId}
            id={gp.groupId}
          >
            <div className="FF-Group-Name">
              {gp.groupName}
            </div>
            <table
              className={`FF-Group-Elements ${gp.direction === 'El-Row' ? 'El-Row' : ''}`.trim()}
            >
              <tbody>
                {
                  gp.elements
                    .map((element) => !element.hide
                      && renderer(gp, element, formValues, onChange, onClick))
                }
              </tbody>
            </table>
          </div>
        ))
      }
    </div>
  );
};

FitxForm.defaultProps = {
  formValues: {},
  metaData: [],
  columns: 1,
  onChange: () => null,
  onClick: () => null,
};

FitxForm.propTypes = {
  formValues: PropTypes.shape({}),
  metaData: PropTypes.arrayOf(PropTypes.shape({})),
  columns: PropTypes.number,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

export default FitxForm;

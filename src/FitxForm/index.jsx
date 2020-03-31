import React from 'react';
import PropTypes from 'prop-types';
import ButtonInput from './components/ButtonInput';
import CheckboxInput from './components/CheckboxInput';
import DateInput from './components/DateInput';
import RadioInput from './components/RadioInput';
import SelectInput from './components/SelectInput';
import TextInput from './components/TextInput';
import './FitxForm.scss';

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
    <div key={element.id} className="JF-Element">
      {
        element.name && (
        <div className="name">
          {element.name}
        </div>
        )
      }
      <div className="type" id={element.id}>
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
      </div>
    </div>
  );
};

const FitxForm = (props) => {
  const {
    metaData, formValues, onChange, onClick,
  } = props;
  return (
    <div className="JF-Root">
      {
        metaData.map((gp) => !gp.hide && (
          <div
            className="JF-Group"
            id={gp.groupId}
          >
            <div className="name">
              {gp.groupName}
            </div>
            <div
              className={`JF-Elements ${gp.direction === 'row' ? 'row' : ''}`.trim()}
            >
              {
                gp.elements
                  .map((element) => !element.hide
                    && renderer(gp, element, formValues, onChange, onClick))
              }
            </div>
          </div>
        ))
      }
    </div>
  );
};

FitxForm.defaultProps = {
  formValues: {},
  metaData: [],
  onChange: () => null,
  onClick: () => null,
};

FitxForm.propTypes = {
  formValues: PropTypes.shape({}),
  metaData: PropTypes.arrayOf(PropTypes.shape({})),
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

export default FitxForm;

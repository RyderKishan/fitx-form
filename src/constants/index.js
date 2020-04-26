const metaData = [
  {
    elements: [
      {
        id: 'fName',
        name: 'First Name',
        type: 'TextInput',
        placeholder: 'Full Name',
      },
      {
        id: 'lName',
        name: 'Last Name',
        type: 'TextInput',
        placeholder: 'Family Name',
      },
      {
        id: 'als',
        name: 'Also Knows As',
        type: 'TextInput',
        // defaultValue: 'Testing',
        helperText: 'Any name by which you are called',
        errorText: 'Should Be a Text',
      },
      {
        id: 'age',
        errorText: 'Enter Valid Age',
        name: 'Age',
        type: 'TextInput',
        subType: 'number',
      },
      {
        id: 'gender',
        type: 'RadioInput',
        name: 'Gender',
        options: [
          {
            label: 'Male',
            value: 'm',
          },
          {
            label: 'Female',
            value: 'f',
          },
          {
            label: 'Other',
            value: 'o',
            disabled: true,
          },
        ],
      },
      {
        id: 'dateOfBirth',
        name: 'Date of Birth',
        type: 'DateInput',
      },
      {
        id: 'submit',
        name: 'Submit all the details',
        type: 'ButtonInput',
        displayName: 'Submit',
      },
    ],
    groupName: 'Personal Details',
    groupId: 'personalDetails',
  },
  {
    // hide: true,
    elements: [
      {
        id: 'eduQf',
        name: 'Education Qualification',
        vertical: true,
        type: 'CheckboxInput',
        options: [
          {
            label: 'SSLC',
            value: 'sslc',
          },
          {
            label: 'HSC',
            value: 'hsc',
          },
          {
            label: 'Under Graduate',
            value: 'ug',
          },
          {
            label: 'Post Graduate',
            value: 'pg',
          },
          {
            label: 'Doctrate',
            value: 'doc',
          },
        ],
      },
      {
        id: 'schoolMark',
        name: 'School Percentile',
        errorText: 'Marks should be within 0 to 100',
        type: 'TextInput',
        subType: 'number',
        max: 100,
        min: 0,
      },
      {
        id: 'cgpa',
        name: 'CGPA',
        errorText: 'CGPA should be within 0 to 10',
        type: 'TextInput',
        subType: 'number',
        min: 0,
        max: 10,
      },
    ],
    groupName: 'Education Details',
    groupId: 'educationDetails',
  },
  {
    hide: true,
    elements: [
      {
        id: 'sAddress',
        name: 'Street Adress',
        type: 'TextInput',
      },
      {
        id: 'city',
        name: 'City',
        type: 'TextInput',
        // disabled: true,
      },
      {
        id: 'state',
        name: 'State',
        // disabled: true,
        type: 'SelectInput',
        options: [
          {
            label: 'Tamil Nadu',
            value: 'tn',
          },
          {
            label: 'Kerala',
            value: 'kl',
          },
          {
            label: 'Andhra Pradesh',
            value: 'ap',
          },
          {
            label: 'Karnataka',
            value: 'ka',
            disabled: true,
          },
        ],
      },
      {
        id: 'zip',
        name: 'Zip Code',
        type: 'TextInput',
      },
    ],
    groupName: 'Location Details',
    groupId: 'location-details',
  },
  {
    hide: true,
    elements: [
      {
        id: 'phNumber',
        name: 'Phone Number',
        type: 'TextInput',
      },
      {
        id: 'email',
        name: 'Email',
        type: 'TextInput',
        subType: 'email',
      },
    ],
    groupName: 'Contact Details',
    groupId: 'contact-details',
  },
];

const metaData2 = [
  {
    elements: [
      {
        id: 'fName',
        name: 'First Name',
        type: 'TextInput',
        placeholder: 'Full name without spaces',
      },
      {
        id: 'lName',
        name: 'Last Name',
        type: 'TextInput',
        placeholder: 'The family name or initials',
      },
      {
        id: 'als',
        name: 'Also Knows As',
        type: 'TextInput',
        defaultValue: 'Testing',
        helperText: 'Any name by which you are called',
        errorText: 'Should Be a Text',
      },
      {
        id: 'nm',
        error: true,
        errorText: 'Error Text',
        name: 'Number Test',
        type: 'TextInput',
        subType: 'number',
      },
      {
        id: 'dateOfBirth',
        name: 'Date of Birth',
        type: 'DateInput',
      },
    ],
    groupName: 'Personal Details',
    groupId: 'personalDetails',
  },
];

const formValues = {
  personalDetails: {
    nm: '626189',
    fName: 'Bal Kishan',
    lName: 'S',
    als: 'Kishan',
    maritialStatus: ['sin'],
    gender: 'm',
    dateOfBirth: '1996-10-31T18:30:00.000Z',
  },
  'location-details': {
    sAddress: '819 PKN ROAD',
    city: 'Sivakasi',
    state: 'tn',
    zip: '626189',
  },
};

export {
  metaData,
  metaData2,
  formValues,
};

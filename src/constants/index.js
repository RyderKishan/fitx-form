const props = {
  formValues: {
    'vest-mAddress': {
      cty: 'vpt',
      zip: '600069',
      sAddress: 'No. 35, Sathyamoorthy Naga',
    },
    'vest-pInfo': {
      fName: 'Balkishan',
      lName: '',
      als: '',
      nm: '123412',
    },
  },
  metaData: [
    {
      elements: [
        {
          id: 'fName',
          name: 'First Name',
          type: 'TextInput',
        },
        {
          id: 'lName',
          name: 'Last Name',
          type: 'TextInput',
          placeholder: 'The last name',
        },
        {
          id: 'als',
          name: 'Also Knows As',
          type: 'TextInput',
          defaultValue: 'Testing',
          helperText: 'Helper Text',
          errorText: 'Should Be a Text',
          regex: {},
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
          id: 'trusteeOf',
          name: 'Trustee of',
          type: 'TextInput',
        },
        {
          id: 'nonIntervivos',
          name: null,
          type: 'CheckboxInput',
          options: [
            {
              label: 'Authorized Sign of Non-Intervivos Trusts',
              value: 'sign',
            },
            {
              label: 'Non-Intervivos Trusts',
              value: 'nit',
            },
            {
              label: 'Trusts Test',
              value: 'tt',
            },
          ],
        },
        {
          id: 'isTherePOA',
          type: 'RadioInput',
          name: 'Is there a POA?',
          options: [
            {
              label: 'Yes',
              value: 'yes',
            },
            {
              label: 'No',
              value: 'no',
            },
          ],
        },
        {
          id: 'isThereTrustee',
          name: 'Is there a Trustee?',
          type: 'RadioInput',
          vertical: true,
          options: [
            {
              label: 'Yes',
              value: 'yes',
            },
            {
              label: 'No',
              value: 'no',
            },
          ],
        },
        {
          id: 'socialSecurity',
          name: 'Social Security',
          type: 'TextInput',
        },
        {
          id: 'dateOfBirth',
          name: 'Date of Birth',
          type: 'DateInput',
        },
      ],
      groupName: 'Enter Vested Partys Personal Info',
      groupId: 'vest-pInfo',
    },
    {
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
          disabled: true,
        },
        {
          id: 'cty',
          name: 'City',
          type: 'SelectInput',
          defaultValue: 'vpt',
          options: [
            {
              label: 'SVKS',
              value: 'sv',
            },
            {
              label: 'VNR',
              value: 'vpt',
            },
          ],
        },
        {
          id: 'state',
          name: 'State',
          disabled: true,
          type: 'SelectInput',
          options: [
            {
              label: 'TX',
              value: 'tx',
            },
            {
              label: 'NY',
              value: 'ny',
            },
            {
              label: 'AU',
              value: 'au',
            },
          ],
        },
        {
          id: 'zip',
          name: 'Zip',
          type: 'TextInput',
        },
      ],
      groupName: 'Enter Vested Partys Mailing Address',
      groupId: 'vest-mAddress',
    },
  ],
};

const metadata = {
  Value: '',
};

export {
  props,
  metadata,
};

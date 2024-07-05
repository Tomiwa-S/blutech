

export const filtersOperators = {
  _lt: {
        label: 'Is less than',
        value: '<',
        getApplyFilterFn: (filterItem) => {
          if (!filterItem.value) {
            return null;
          }
          return ( value ) => value !== null && value < filterItem.value;
        },

      },
  _gt: {
        label: 'Is greater than',
        value: '>',
        getApplyFilterFn: (filterItem) => {
          if (!filterItem.value) {
            return null;
          }
          return ( value ) => value !== null && value > filterItem.value;
        },
      },
  _lte: {
        label: 'Is less than or equal to',
        value: '<=',
        getApplyFilterFn: (filterItem) => {
          if (!filterItem.value) {
            return null;
          }
          return ( value ) => value !== null && value <= filterItem.value;
        },
      },
  _gte: {
        label: 'Is greater than or equal to',
        value: '>=',
        getApplyFilterFn: (filterItem) => {
          if (!filterItem.value) {
            return null;
          }
          return ( value ) => value !== null && value >= filterItem.value;
        },
      },
  _eq: {
        label: 'Is equal to',
        value: '==',
        getApplyFilterFn: (filterItem) => {
          if (!filterItem.value) {
            return null;
          }
          return ( value ) => value !== null && value == filterItem.value;
        },
      },
  _all: {
        label: 'Remove filter',
        value: '**',
        getApplyFilterFn: (filterItem) => {
          if (!filterItem.value) {
            return null;
          }
          return ( value ) => value !== null;
        },
      },


}

export function getKeyByValue(value) {
  for (const key in filtersOperators) {
    if (filtersOperators[key].value === value) {
      return key;
    }
  }
  return null;
}

export function addInputComponentToFilter(InputComponent) {
  for (let key in filtersOperators) {
    if (key !== '_all') {
        filtersOperators[key]['InputComponent'] = InputComponent;
    }
  }
}

export const operators = (()=>{
  const result = {};
  for(const [key, value] of Object.entries(filtersOperators)){
    result[key] = value?.value || '**';
  }
  return result;
})();



 // const filtersOperators = {
    //   _lt: {
    //         label: 'Is less than',
    //         value: '<',
    //         "getApplyFilterFn": (filterItem) => {
    //           if (!filterItem.value) {
    //             return null;
    //           }
    //           return ( value ) =>   value !==null && value < filterItem.value
    //         },
    //         InputComponent: InputComponent,

    //       },
    //   _gt: {
    //         label: 'Is greater than',
    //         value: '>',
    //         getApplyFilterFn: (filterItem) => {
    //           if (!filterItem.value) {
    //             return null;
    //           }
    //           return ( value ) => value !== null && value > filterItem.value;
    //         },
    //         InputComponent: InputComponent
    //       },
    //   _lte: {
    //         label: 'Is less than or equal to',
    //         value: '<=',
    //         getApplyFilterFn: (filterItem) => {
    //           if (!filterItem.value) {
    //             return null;
    //           }
    //           return ( value ) => value !== null && value <= filterItem.value;
    //         },
    //         InputComponent: InputComponent
    //       },
    //   _gte: {
    //         label: 'Is greater than or equal to',
    //         value: '>=',
    //         getApplyFilterFn: (filterItem) => {
    //           if (!filterItem.value) {
    //             return null;
    //           }
    //           return ( value ) => value !== null && value >= filterItem.value;
    //         },
    //         InputComponent: InputComponent
    //       },
    //   _eq: {
    //         label: 'Is equal to',
    //         value: '==',
    //         getApplyFilterFn: (filterItem) => {
    //           if (!filterItem.value) {
    //             return null;
    //           }
    //           return ( value ) => value !== null && value == filterItem.value;
    //         },
    //         InputComponent: InputComponent
    //       },
    //   _all: {
    //         label: 'No filter',
    //         value: '**',
    //         getApplyFilterFn: (filterItem) => {
    //           if (!filterItem.value) {
    //             return null;
    //           }
    //           return (value ) => value !== null;
    //         },

    //       },


    // }
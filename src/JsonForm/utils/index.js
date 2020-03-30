const getError = (testString, regex) => {
  if (!testString || testString === '') return false;
  return !new RegExp(regex).test(testString);
};

const isNull = (data) => data !== undefined && data !== null;

export {
  getError,
  isNull,
};

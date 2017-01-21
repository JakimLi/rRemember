const types = {
  GENERATE: 'GENERATE',
  SHUFFLE: 'SHUFFLE',
  CHECK: 'CHECK'
};

const generate = () => {
  return {
    type: types.GENERATE
  };
};

const shuffle = () => {
  return {
    type: types.SHUFFLE
  };
};

const check = () => {
  return {
    type: types.CHECK
  };
};


export {generate, shuffle, check, types};

const types = {
  GENERATE: 'GENERATE',
  SHUFFLE: 'SHUFFLE'
}

const generate = () => {
  return {
    type: types.GENERATE
  };
}

const shuffle = () => {
  return {
    type: types.SHUFFLE
  };
}


export {generate, shuffle, types};

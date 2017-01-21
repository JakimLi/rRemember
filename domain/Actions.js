const types = {
  GENERATE: 'GENERATE',
  SHUFFLE: 'SHUFFLE',
  CHECK: 'CHECK',
  CHECK_ON_CARD: 'CHECK_ON_CARD'
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

const checkOnCard = (card) => {
  return {
    type: types.CHECK_ON_CARD,
    card
  }
}


export {generate, shuffle, check, checkOnCard, types};

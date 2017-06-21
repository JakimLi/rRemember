const types = {
  GENERATE: 'GENERATE',
  SHUFFLE: 'SHUFFLE',
  CHECK: 'CHECK',
  CHECK_ON_CARD: 'CHECK_ON_CARD',
  TOGGLE_CARD_TYPE: 'TOGGLE_CARD_TYPE'
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
};

const toggleCardType = () => {
  return {
    type: types.TOGGLE_CARD_TYPE,
  }
}

export {generate, shuffle, check, checkOnCard, toggleCardType, types};

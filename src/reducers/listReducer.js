const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LIST':
      return {list:action.list};

    default:
      return state;
  }
};
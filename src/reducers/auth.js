
let user = JSON.parse(localStorage.getItem('user'));
let token= JSON.parse(localStorage.getItem('token'));
const initialState = user ? {user, token} : {};

export default (state = initialState, action) => {
  
  switch (action.type) {
    case 'LOGIN':
      return {
        user: action.data.email,
        token:action.data.sessionTokenBck
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
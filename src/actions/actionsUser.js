import {login} from '../services/loginService';
import { history } from '../utils/history';
import { actionAlert } from './actionAlert';

export const loginAction=(username, password )=>{
   return dispatch => {
       login(username, password)
            .then(
                res => { 
                  const {data}=res;
                  dispatch({type:'LOGIN',data});
                  localStorage.setItem('user', JSON.stringify(data.email));
                  localStorage.setItem('token', JSON.stringify(data.sessionTokenBck));
                    history.push('/');
                })
            .catch(
                error => {
                   dispatch(actionAlert.error("Usuario o Contraseña incorrecto"));
                   
                }
            );
    };
  
};

export const logout=()=> {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    return { type: 'LOGOUT'};
}

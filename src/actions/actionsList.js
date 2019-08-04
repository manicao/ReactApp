import {list} from '../services/listService';
import { history } from '../utils/history';
import { actionAlert } from './actionAlert';

export const actionsList=(username,token)=>{
   return dispatch => {
       list(username, token)
            .then(
                res => { 
                  let list=res.data.map(item=>(
                    {
                      bookingId:item.bookingId,
                      firstName:item.tutenUserClient.firstName,
                      lastName:item.tutenUserClient.lastName,
                      bookingTime:item.bookingTime,
                      streetAddress:item.locationId.streetAddress,
                      bookingPrice:item.bookingPrice
                    }
                  ))
                  dispatch({type:'GET_LIST',list});

                    history.push('/');
                })
            .catch(
                error => {
                   dispatch(actionAlert.error("No hay elementos a mostrar"));
                   
                }
            );
    };
  
};

export const filter=(bookingId,bookingPrice, list)=>{

  return dispatch=>{
    dispatch({type:'GET_LIST',list})
  }
}


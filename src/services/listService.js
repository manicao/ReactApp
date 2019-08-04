import axios from 'axios';


export function list(adminusername,token){
  const headers={
    'Content-Type':'aplication/json',
    'token':token,
    'app':'APP_BCK',
    'adminemail':adminusername
  }
  return axios.get(`https://dev.tuten.cl/TutenREST/rest/user/contacto%40tuten.cl/bookings?current=true`,{"headers":headers});

  
}
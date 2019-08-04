import axios from 'axios';

export function login(username, password){
  const headers={
    'Content-Type':'aplication/json',
    'password':password,
    'app':'APP_BCK'
  }
  return axios.put(`https://dev.tuten.cl/TutenREST/rest/user/${username}`,undefined,{"headers":headers});
  
}

import React from 'react';
import {Link} from 'react-router-dom';
const NavBar=(props)=>{
  
  const token=localStorage.getItem('token');
  console.log(token);
  return(
      <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand">React App</a>
          <form className="form-inline my-2 my-lg-0" >
             {
               token && 
               <Link to="/login" onClick={props.action}>
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit"  >Logout</button>
               </Link>
                
             }
          </form>
      </nav>
  )
}

export default NavBar;
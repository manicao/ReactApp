import React from 'react';

 const Filter=({...props})=>{

  return(
    <div>
      <h3>Filter By</h3>
      <div className="form-row">
        <div className="form-group col-md-4">
           <input type="text" className="form-control" id="inputBookingId" placeholder="BookingId"/>
        </div>
        <div className="form-group col-md-4">
         <input type="text" className="form-control" id="inputPrecio" placeholder="Precio "/>
        </div>
        <div class="form-group col-md-4">
          <button type="submit" className="btn btn-primary">Filter</button>
        </div>
      </div>
    </div>
  )
}

export default Filter;
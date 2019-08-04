import React from 'react';

const Table=(props)=>{

  const {list}=props;
  return (
    <div className="table-responsive">
     {list ?
        (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">BookingId</th>
                  <th scope="col">Cliente</th>
                  <th scope="col">Fecha de Creación</th>
                  <th scope="col">Dirección</th>
                  <th scope="col">Precio</th>
                </tr>
              </thead>
              <tbody>
              {
                list.map((item,index)=>(
                  <tr key={index}>
                    <td>
                      {item.bookingId}
                    </td>
                    <td>
                      {item.firstName} {item.lastName}
                    </td>
                    <td>
                      {item.bookingTime}
                    </td>
                    <td>
                    { item.streetAddress}
                    </td>
                    <td>
                    { item.bookingPrice}
                    </td>
                  </tr>
                ))
              
              }
              </tbody>
            </table>
        ):
        (
            <div className="alert alert-danger">No hay elemnetos para listar</div>
        )
     }
      
    </div>
  )
} 

export default Table;
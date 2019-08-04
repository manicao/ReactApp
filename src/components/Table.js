import React from 'react';

const Table=(props)=>{

  const {list}=props;
  return (
    <div>
     {list ?
        (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>BookingId</th>
                  <th>Cliente</th>
                  <th>Fecha de Creación</th>
                  <th>Dirección</th>
                  <th>Precio</th>
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
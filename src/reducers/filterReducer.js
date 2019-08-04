const initialState={
  bookingId:'',
  bookingPricePlus:'',
  bookingPriceLow:''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER_BY_ID':
      return {...state,bookingId:action.bookingId};
      
    case 'FILTER_BY_PRICE_PlUS':
      return {...state,bookingPricePlus:action.bookingPricePlus};  

    case 'FILTER_BY_PRICE_LOW':
      return {...state,bookingPriceLow:action.bookingPriceLow};  
    default:
      return state;
  }
};

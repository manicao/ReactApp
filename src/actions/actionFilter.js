
export const actionID=(bookingId)=>{
    return dispatch=>(dispatch({ type: 'FILTER_BY_ID', bookingId }));
}

export const actionPricePlus=(bookingPricePlus)=> {
    return dispatch=>(dispatch({ type: 'FILTER_BY_PRICE_PlUS', bookingPricePlus }));
}

export const actionPriceLow=(bookingPriceLow)=> {
    return dispatch=>(dispatch({ type: 'FILTER_BY_PRICE_LOW', bookingPriceLow }));
}

import _ from 'lodash';

export default (listOrigin,{bookingId,bookingPricePlus,bookingPriceLow})=>{

  const{list}=listOrigin;
  const bookingIdFilter=bookingId;

  let listFilter=(bookingId || bookingPricePlus || bookingPriceLow) ?
  
  _.filter(list,
    ({bookingId,bookingPrice})=>{
        const bookingIdCheck = bookingIdFilter ? bookingId===parseInt(bookingIdFilter) : true;
        const bookingPricePlusCheck = bookingPricePlus ? bookingPrice >= parseInt(bookingPricePlus) : true;
        const bookingPriceLowChek = bookingPriceLow ? bookingPrice <= parseInt(bookingPriceLow) : true;

        return bookingIdCheck && bookingPricePlusCheck && bookingPriceLowChek;
    }):list
  
  return {list:listFilter};
};
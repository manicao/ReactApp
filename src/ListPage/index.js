import React,{Component} from 'react';
import { connect } from 'react-redux';
import Table from '../components/Table'
import { actionsList } from '../actions/actionsList';
import { actionID, actionPricePlus,actionPriceLow } from '../actions/actionFilter';
import functionFilter from '../utils/functionFilter';
import NavBar from '../components/NavBar';
import { logout } from '../actions/actionsUser';

class ListPage extends Component{

    constructor(props) {
      super(props)
      
      this.state={
        bookingId:'',
        bookingPricePlus:'',
        bookingPriceLow:''
      }


      this.handleFilter=this.handleFilter.bind(this);
      this.handleBookingId=this.handleBookingId.bind(this);
      this.handleBookingPricePlus=this.handleBookingPricePlus.bind(this);
      this.handleBookingPriceLow=this.handleBookingPriceLow.bind(this);

    }

     componentDidMount() {
        const{user,token}=this.props.auth;
        this.props.getList(user,token);
    }

    handleBookingId(e){
      this.setState({bookingId:e.target.value});
    }

    handleBookingPricePlus(e){
      this.setState({bookingPricePlus:e.target.value});
    }

     handleBookingPriceLow(e){
      this.setState({bookingPriceLow:e.target.value});
    }


    handleFilter(e){
      e.preventDefault();
      const{bookingId,bookingPricePlus,bookingPriceLow}=this.state; 
      this.props.actionID(bookingId);
      this.props.actionPricePlus(bookingPricePlus);
      this.props.actionPriceLow(bookingPriceLow);
    }

    render() {
      return (
        <div>
          <NavBar action={this.props.logout} />
          <div className="jumbotron">
          <div className="container">
            <div className="col-lg-12 ">
              <div>
                <div>
                  <h3>Filter By</h3>
                  <div className="form-row">
                    <div className="form-group col-md-2">
                      <input type="text" className="form-control" id="inputBookingId" 
                        placeholder="BookingId"
                        onChange={this.handleBookingId}
                    />
                    </div>
                    <div className="form-group col-md-2">
                    <input type="text" className="form-control" id="inputPrecio" 
                        placeholder="Precio >="
                        onChange={this.handleBookingPricePlus}
                    />
                    </div>
                    <div className="form-group col-md-2">
                    <input type="text" className="form-control" id="inputPrecio" 
                        placeholder="Precio <="
                        onChange={this.handleBookingPriceLow}
                    />
                    </div>
                    <div className="form-group col-md-4">
                      <button type="submit" className="btn btn-primary" onClick={this.handleFilter}>Filter</button>
                    </div>
                  </div>
                </div>
                <br/>
                
                
              </div>
             
          </div>
          <div className="col-lg-12 ">
              <Table {...this.props.listFilter}/>
          </div>
        </div>
        </div>
        </div>
      )
    }

}

const mapStateToProps = (state) => {
  const {auth,alter,list}=state;
  const {bookingId,bookingPricePlus,bookingPriceLow}=state.filter;
  const listFilter=functionFilter(list,{bookingId,bookingPricePlus,bookingPriceLow})
  return {auth,alter,listFilter}
}

const actionCreators = {
    getList: actionsList,
    actionID:actionID,
    actionPricePlus:actionPricePlus,
    actionPriceLow:actionPriceLow,
    logout:logout
}

export default connect(mapStateToProps,actionCreators)(ListPage); 
import React,{Component} from 'react';
import { connect } from 'react-redux';
import { loginAction } from "../actions/actionsUser";

class Login extends Component{

  constructor(props) {
    super(props)
    
    this.state={
      email:'',
      pass:'',
      submit:false
    }

    this.handleChangeUser=this.handleChangeUser.bind(this);
    this.handleChangePass=this.handleChangePass.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }
  
  handleChangeUser(e){
    this.setState({email:e.target.value})
  }

  handleChangePass(e){
    this.setState({pass:e.target.value})
  }

  onSubmit(e){
    e.preventDefault();
    this.setState({ submit: true });
    const { email, pass } = this.state;
    if (email && pass) {
        this.props.login(email, pass);
    }
  }

  render() {
    const {submit,email,pass}=this.state;
    const{alert}=this.props
    return (
      <div className="jumbotron">
      <div className="container">
      <div className="form-group row justify-content-md-center">
        <div className="col-lg-4 ">
          {alert.message &&
              <div className={`alert ${alert.type}`}>{alert.message}</div>
          }
          <h2>Login</h2>
          <form name="form" onSubmit={this.onSubmit}>
            <div className={'form-group' + (submit && !email ? ' is-invalid' : '')}>
              <label htmlFor="username">Username</label>
                  <input type="email" className={'form-control' + (submit && !email ? ' is-invalid' : '')} name="username" value={email}
                  onChange={this.handleChangeUser} />
                  {submit && !email &&
                      <div className="invalid-feedback">El Usuario es Requerido</div>
                  }
              </div>
              <div className={'form-group' + (submit && !pass ? ' is-invalid' : '')}>
                  <label htmlFor="password">Password</label>
                  <input type="password" className={'form-control' + (submit && !email ? ' is-invalid' : '')} name="password" value={pass}
                  onChange={this.handleChangePass} />
                  {submit && !pass &&
                      <div className="invalid-feedback">La contraseña es requerida</div>
                  }
              </div>
              <div className="form-group">
                  <button className="btn btn-primary">Login</button>
                
              </div>
          </form>
        </div>
      </div>
      </div>
      
      </div>
    )
  }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    login: loginAction,
};

export default connect(mapState, actionCreators)(Login);
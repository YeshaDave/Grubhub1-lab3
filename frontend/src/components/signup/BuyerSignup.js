import React, {Component} from 'react';
import '../../App.css';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Logo from './grubhub-vector-logo.svg';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { signUpBuyer } from '../../actions/signupAction';
import { addBuyerMutation } from '../../mutation/mutations';
import { graphql } from 'react-apollo';

class BuyerSignup extends Component {

    constructor(props) {
        super(props);
        this.state = {
          FirstName: "",
          LastName: "",
          Email: "",
          Password: "",
          Phone: "",
          role: "",
          authFlag: ""
       }

       this.submitLogin = this.submitLogin.bind(this);
       this.fNamechangeHandler = this.fNamechangeHandler.bind(this);
       this.lNamechangeHandler = this.lNamechangeHandler.bind(this);
       this.emailchangeHandler = this.emailchangeHandler.bind(this);
       this.phonechangeHandler = this.phonechangeHandler.bind(this);
       this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
       }
   
    fNamechangeHandler = (e) => {
        this.setState({
            FirstName : e.target.value
        })
       
    }

    lNamechangeHandler = (e) => {
        this.setState({
            LastName : e.target.value
        })
    }

    emailchangeHandler = (e) => {
        this.setState({
            Email : e.target.value
        })
    }

    phonechangeHandler = (e) => {
        this.setState({
            Phone : e.target.value
        })
    }

    passwordChangeHandler = (e) => {
        this.setState({
            Password : e.target.value
        })
    }
    

    submitLogin = async (e) => {
        console.log("Inside signup post request");
        e.preventDefault();
        console.log(this.state.FirstName)
        axios.defaults.withCredentials = true
        let response = await this.props.addBuyerMutation({
            variables : {
                FirstName : this.state.FirstName,
                LastName : this.state.LastName,
                Email : this.state.Email,
                Password : this.state.Password,
                //Phone : this.state.Phone,
                //role : "Buyer"
            }
        }).then(res => {
            this.setState({
                authFlag: true
            })
            console.log("The received response is : ", res);
        }).catch(e => {
            this.setState({
                authFlag: false
            })
        })
       

        //this.props.signUpBuyer(data);
        //this.props.history.push('/blogin');
    }
      
    

    render(){

        let redirectVar = null;
        if(this.props.authFlag == true){
            redirectVar = <Redirect to = "blogin" />
        }
        const { handleSubmit } = this.props;
        //console.log(this.state.errormsg)

        return(
            <div>
                {redirectVar}
                <div class="container">
                <div class="login-form">
                    <div class="main-div">
                        <div class="panel">
                            
                        </div>
                        
                            <div class="form-group">
                            <form onSubmit={this.submitLogin.bind(this)}>
                                <div className="col-md-4"></div>
                                <div className="col-md-4  outer-box">
                                <div className="col-md-12">   
                                <h3>Create your account</h3>
                                <br/>
                                </div>
                                    <br/><br/>
                                    <div className="col-md-12" class="form-group">
                                    <span className="col-md-5">First Name:</span>
                                    <span className="col-md-2"></span>
                                    <span className="col-md-5">Last Name:</span>
                                    </div>
                                    <br/>
                                    <div>
                                    <div className="container-fluid" class="form-group">
                                    <span className="col-md-6">
                                        <input type="text" name="fName" onChange={this.fNamechangeHandler}></input>
                                    </span>
                                        
                                    <span className="col-md-6">

                                    <input type="text" name="lName" onChange={this.lNamechangeHandler}></input>
                                        </span>
                                        </div> 
                                    <br/>
                                    </div>
                                    <div class="form-group" className="col-md-12">
                                    <br/><br/>
                                    Email<br/>
                                    <input type="email" class="form-control" name="email" onChange={this.emailchangeHandler} required />
                                    <br/>
                                    </div>
                                    <div class="form-group" className="col-md-12">
                                    <br/>
                                    Phone<br/>
                                    <input type="phone" class="form-control" name="phone" onChange={this.phonechangeHandler} required />
                                    </div>
                                    
                                    <div class="form-group" className="col-md-12">
                                    <br/>
                                    Password<br/>
                                    <input type="password" class="form-control" name="password" onChange={this.passwordChangeHandler} required />
                                    </div>
                                    <div class="form-group" className="col-md-12">
                                    <span>
                                    <br/>
                                    <input type="checkbox" id="chkbox" name="chkbox"/> Keep me signed in</span><br/>
                                    <br/>
                                    <button class="btn btn-primary col-md-12 button" onClick={this.submitSignup}>Create your account</button>
                                    </div>
                                    <div class="div-text">
                                    <br/><br/>
                                        or
                                    </div>
                                    <div class="div-text">
                                    <br/><br/>
                                        Have an account? <a href="/blogin">Sign in</a>
                                    <br/>
                                    <br/>
                                    By creating your Grubhub account, you agree to the <a>Terms of Use</a> and <a>Privacy Policy</a>.
                                    </div>

                                    </div>
                                    </form>
                                </div>   
                                <div className="col-md-4"></div>  
                            
                            </div>           
                        </div>
                </div>
            </div>
        )
    }

}

export default graphql(addBuyerMutation, {name : "addBuyerMutation"})(BuyerSignup);



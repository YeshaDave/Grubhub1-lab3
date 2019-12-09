// import React, {Component} from 'react';
// import '../../App.css';
// import axios from 'axios';
// //import cookie from 'react-cookies';
// import {Redirect} from 'react-router';
// import uuid from 'uuid/v1';

// class BuyerLogin extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             email : "",
//             password : "",
//             authFlag : false,
//             msg : ""
//        }
//        }

//     emailChangeHandler = (e) => {
//         this.setState({
//             email : e.target.value
//         })
//     }

//     passwordChangeHandler = (e) => {
//         this.setState({
//             password : e.target.value
//         })
//     }

//     // submitLogin = (e) => {
//     //     e.preventDefault();
//     //     const data = {
//     //         email : this.state.email,
//     //         password : this.state.password
//     //     }

//     //     console.log(data);

//     //     console.log("inside submit signup");
//     //     //set the with credentials to true
//     //     axios.defaults.withCredentials = true;
//     //     //make a post request with the user data
//     //     axios.post('http://localhost:3001/buyerlogin',data)
//     //         .then(response => {
//     //             console.log("Status Code : ",response.status);
//     //             if(response.status === 201){
//     //                 this.setState({
//     //                     authFlag : true
//     //                 })
//     //                 console.log(response.data)
//     //                 sessionStorage.setItem("role","buyer")
//     //                 sessionStorage.setItem("bName",response.data.fName)
//     //                 sessionStorage.setItem("bEmail",response.data.email)
//     //                 sessionStorage.setItem("bphone",response.data.phone)
//     //             }else if(response.status === 202){
//     //                 this.setState({
//     //                     authFlag : false,
//     //                     msg : 'Error in signup!'
//     //                 })
//     //                 console.log("in else")
//     //             }
//     //             else if(response.status === 205){
//     //                 this.setState({
//     //                     authFlag : false,
//     //                     msg : "Email exists"
//     //                 })
//     //             }
//     //         });
//     // }


//     render(){
//         let redirectVar = null;
//         console.log("inside login.js")
//         if(this.state.authFlag == true){
//             redirectVar = <Redirect to= "/BuyerHome"/>   
//         }

//         return(
//             <div>
//                 {redirectVar}
//                 <div class="container">
//                 <div class="login-form">
//                     <div class="main-div">
//                         <div class="panel">
                            
//                         </div>
                        
//                             <div class="form-group">
                            
//                                 <div className="col-md-4"></div>
//                                 <div className="col-md-4  outer-box">
//                                 <div className="col-md-12">   
//                                 <h3 class="font-bold">Sign in with your Grubhub account</h3>
//                                 </div>
//                                     <div class="form-group" className="col-md-12">
//                                     <br/>
//                                     Email<br/>
//                                     <input type="email" class="form-control" name="email" onChange={this.emailChangeHandler} required />
//                                     </div>
//                                     <div class="form-group" className="col-md-12">
//                                     <br/>
//                                     Password<br/>
//                                     <input type="password" class="form-control" name="password" required onChange={this.passwordChangeHandler}/>
//                                     </div>
//                                     <div class="form-group" className="col-md-12">
//                                     <span>
//                                     <br/>
//                                     <input type="checkbox" id="chkbox" name="chkbox"/> Keep me signed in           <span class="div-text2"><a>Reset Password</a></span></span><br/>
//                                     <br/>
//                                     <button class="btn btn-primary col-md-12 login-button" onClick={this.submitLogin}><img class="button-img" src="https://www.grubhub.com/img-hashed/grubhub_logo_img-f32224c65999bc87a7d65983e133e9fd.svg"></img>Sign In</button>
//                                     {sessionStorage.setItem('orderID',uuid())}
//                                     <br/><br/><br></br>
//                                     </div>
//                                     <div class="div-text">
//                                     <br/><br/>
//                                         or
//                                     </div>
//                                     <div class="div-text">
//                                     <br/>
//                                         <a href="/bsignup">Create your account </a>
//                                     </div>
//                                 </div>   
//                                 <div className="col-md-4"></div>  
//                             </div>           
//                         </div>
//                 </div>
//             </div>
//             </div>
//         )
//     }
// }

// export default BuyerLogin;

// const mapStateToProps = state => {
//     return {
//         authFlag: state.login.authFlag,
//         message: state.login.message,
        
//     }
// }
// const mapDispatchToProps = dispatch => {
//     return {
//         onSubmitHandle: (data) => {
//             const value = {
//                 email: data.email,
//                 password: data.password,
//                 msg: data.msg
//             }
//             console.log(data)
//             axios.defaults.withCredentials = true;
//             axios.post('http://localhost:3001/login', value)
//                 .then((response) => {
//                     console.log(response)
//                     console.log(response.data.message)
                    
//                     localStorage.setItem('token', response.data.token);
//                     const decoded = jwt_decode(response.data.token);
//                     console.log(decoded);
//                     localStorage.setItem('decoded_email', decoded.email);
//                     // localStorage.setItem('decoded_id', decoded.id);
//                     // localStorage.setItem('decoded_fname', decoded.fname);
//                     sessionStorage.setItem('login_email', response.data.data.email);
//                     console.log(response.data.data.email)
//                     dispatch({ type: 'LOGIN', payload: response.data, statusCode: 200})
//                 })
//                 .catch((error) => {
                    
//                     // var err = error;
//                     // console.log(JSON.parse(error));
//                     //  dispatch({ type: 'SIGNUP', payload: error.response.data, statusCode: error.response.status })
//                 });
//         }
//     }
// }


// export default reduxForm({
//     validate,
//     form: "login"
// })(connect(mapStateToProps, mapDispatchToProps)(Login));
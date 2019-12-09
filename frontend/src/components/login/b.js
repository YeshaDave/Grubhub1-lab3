// import React, {Component} from 'react';
// import '../../App.css';
// import axios from 'axios';
// //import cookie from 'react-cookies';
// import {Redirect} from 'react-router';

// class OwnerLogin extends Component {


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


//     submitLogin = (e) => {
//         e.preventDefault();
//         const data = {
//             email : this.state.email,
//             password : this.state.password
//         }

//         console.log(data);

//         console.log("inside submit signup");
//         //set the with credentials to true
//         axios.defaults.withCredentials = true;
//         //make a post request with the user data
//         axios.post('http://localhost:3001/ownerlogin',data)
//             .then(response => {
//                 console.log("Status Code : ",response.status);
//                 if(response.status === 201){
//                     this.setState({
//                         authFlag : true
//                     })
//                     sessionStorage.setItem("role","owner")
//                     sessionStorage.setItem("oName",response.data.name)
//                     sessionStorage.setItem("oEmail",response.data.email)
//                     sessionStorage.setItem("rName",response.data.restName)
//                     sessionStorage.setItem("ophone",response.data.phone)
//                     sessionStorage.setItem("cuisine",response.data.cuisine)
//                 }else if(response.status === 202){
//                     this.setState({
//                         authFlag : false,
//                         msg : 'Error in signup!'
//                     })
//                     console.log("in else")
//                 }
//                 else if(response.status === 205){
//                     this.setState({
//                         authFlag : false,
//                         msg : "Email exists"
//                     })
//                 }
//             });
//     }

//     render(){
//         let redirectVar = null;
//         console.log("inside login.js")
//         if(this.state.authFlag == true){
//             redirectVar = <Redirect to= "/oHome"/>   
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
//                                 <div className="col-md-5">
//                                 <div className="col-md-12">   
//                                 </div>
//                                 <div class="form-group" className="col-md-12">
//                                 <img class="img-size" src="https://restaurant.grubhub.com/img/gfr-horizontal-black_exoFEG-d4f8c467.svg"></img>
//                                 </div>
//                                     <div class="form-group" className="col-md-12">
//                                     <br/><br/>
//                                     Email Address<br/>
//                                     <input type="email" class="form-control" name="email"  onChange={this.emailChangeHandler} required />
//                                     </div>
//                                     <div class="form-group" className="col-md-12">
//                                     <br/>
//                                     Password<br/>
//                                     <input type="password" class="form-control" name="password" required  onChange={this.passwordChangeHandler}/>
//                                     </div>
//                                     <div class="form-group" className="col-md-12">
//                                     <span>
//                                     <br/>
//                                     <input type="checkbox" id="chkbox" name="chkbox"/> Remember me</span><br/>
//                                     <br/>
//                                     <button class="btn btn-primary col-md-12" onClick={this.submitLogin}>Sign In</button>
//                                     </div>
//                                     <div class="form-group" className="col-md-12">
//                                     <br/>
//                                     <br/>
//                                     <a>Forgot Username</a>
//                                     <br/>
//                                     <br/>
//                                     <a>Forgot Password</a>
//                                     </div>
//                                 </div>   
//                                 <div className="col-md-3"></div>  
//                             </div>           
//                         </div>
//                 </div>
//             </div>
//             </div>
//         )
//     }
// }

// export default OwnerLogin;
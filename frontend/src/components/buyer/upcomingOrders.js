import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
//import cookie from 'react-cookies';
//import {Redirect} from 'react-router';
//import {Route} from 'react-router-dom';

class upcomingOrders extends Component{

    constructor(){
        super();
        this.state = {  
            oldOrders : [],
            
        }
        // this.handleChange = this.handleChange.bind(this);
    }  

    componentDidMount(){
        console.log("inside comp did mount")
        const data = {
            email : sessionStorage.getItem('email')
        }
        axios.post('http://localhost:3001/getOldOrders',data)
                .then((response) => {
                //update the state with the response data
                console.log("inside componentDidMount of Upcoming orders")
                console.log("response: ",response)
                this.setState({
                    oldOrders : this.state.oldOrders.concat(response.data)
                });
                //this.state =  { authFlag2: cookie.load('cookie') }
                //console.log(this.state.authFlag2);
            });
    }



    render(){
        
        let UpcOrders = Object.values(this.state.oldOrders).map(upcOrders1 => {
            //console.log(upcOrders1)
            return (
                <tr class="row-border">
                    {
                        Object.keys(upcOrders1).map(key => {
                            console.log(key)

                            return (
                                <div class="c1"><th class="th1"><br />OrderID: {key}<br /><br />
                                    {
                                        upcOrders1[key].map(v1 => {
                                          
                                            return (
                                                
                                                <div class="">
                                                    <h5>
                                                        <div class="div-menu2">
                                                            <p class="menu-name">{v1.item}       
                                                           
                                                            </p>

                                                            <br />
                                                            {v1.price}
                                                            <br/>
                                                            
                                                        </div></h5>

                                                </div>
                                                
                                            )
                                        })
                                    }
                               
                                
                                </th> 
                                Total: 50$
                                </div>
                            )

                        })
                    }
                </tr>

            )
        })
       


        return(
            <div >
                <div>
                    <br/>
                    <br/>
                </div>
                <div class="col-md-3 profile-div">
                <h3 class="font-bold">Your Account</h3><br/>
                {/* <h5 class="font-bold" id="profilePicture" ><div onClick={this.handlePictureClick}>Profile Picture</div></h5><br/> */}
                <h5 class="font-bold" id="profile" ><div><a href="/bprofile">Profile</a></div></h5><br/>
                <h5 class="font-bold" id="phone" ><div><a href="/phone">Phone</a></div></h5><br/>
                <h5 class="font-bold" id="pOrders" ><div><a href="/upcomingOrders">Past Orders</a></div></h5><br/>
                <h5 class="font-bold" id="uOrders" ><div><a href="/pastOrders">Upcoming Orders</a></div></h5><br/>
                <h5>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </h5>
                </div>
                <div>
                   
                </div>

                <div>

                </div>  
                

                <div class="col-md-9 profile-div">
                {/* {UpcOrders} */}
                <tr class="row-border">
                <div class="c1 outer-box1">
                        <th  class="th1"><br></br>OrderID: b69fe870-0078-11ea-ae30-c32f320ba85c
                            <div>
                            <h5>
                                <div class="div-menu2"><p class="menu-name">Restaurant</p><br></br>Curry Pizza</div>
                                </h5>
                                <h5>
                                <div class="div-menu2"><p class="menu-name">pizza</p><br></br>3</div>
                                </h5>
                                <h5>
                                <div class="div-menu2"><p class="menu-name">Total</p><br></br>30$</div>
                                </h5>
                            </div>
                        </th>   
                    </div>
                </tr>
                </div>
            </div>
        )
    }
}

export default upcomingOrders;
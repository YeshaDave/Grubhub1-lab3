import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
//import cookie from 'react-cookies';
//import {Redirect} from 'react-router';
//import {Route} from 'react-router-dom';

class OwnerPastOrders extends Component{

    constructor(){
        super();
        this.state = {  
            upcOrders : [],
        }
        // this.handleChange = this.handleChange.bind(this);
    }  

    componentDidMount(){
        axios.post('http://localhost.85:3001/getOldOrders')
        .then((response) => {
            //update the state with the response data
            console.log("inside componentDidMount of Upcoming orders")
            console.log(response)
            if(response.data != null){
            this.setState({
                upcOrders: this.state.upcOrders.concat(response.data.updatedList)
            });
        }
            //this.state =  { authFlag2: cookie.load('cookie') }
            //console.log(this.state.authFlag2);
        });
    }


    render(){

        let UpcOrders = Object.values(this.state.upcOrders).map(upcOrders1 => {
            console.log(upcOrders1)
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
                <h5 class="font-bold" id="profile" ><div><a href="/oprofile">Profile</a></div></h5><br/>
                <h5 class="font-bold" id="phone" ><div><a href="/MenuList">Menu</a></div></h5><br/>
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
                <h1>Menu</h1> <br/>
                <div class="col-md-6"></div> 
                <div class="col-md-2"><a href="/updateItems"><h4>Update Sections</h4></a> </div>
                <div class="col-md-4">
                <h4><a>Update Items</a></h4> </div>     
               {UpcOrders}
               <div class="c1 outer-box1">
                        <th  class="th1 outer-box1"><br></br>OrderID: b69fe870-0078-11ea-ae30-c32f320ba85c
                            <div>
                            <h5>
                                <div class="div-menu2"><p class="menu-name">Buyer</p><br></br>Charles</div>
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
            </div>
            </div>
        )
    }
}

export default OwnerPastOrders;
import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
//import cookie from 'react-cookies';
//import {Redirect} from 'react-router';
//import {Route} from 'react-router-dom';
import {getMenubyemail} from '../../queries/queries'
import { graphql } from 'react-apollo';

class menuList extends Component {


    constructor() {
        super();
        this.state = {
            menu: [],
        }
    }


   

    componentDidMount() {

        this.setState({
            menu: this.props
        })

        // const data = {
        //     //rId: this.props.location.state.rId,
        //     rName: sessionStorage.getItem('restaurantName')
        // }
        // console.log("restaurant: ", sessionStorage.getItem('restaurantName'))
        // axios.post('http://localhost:3001/getMenu1', data)
        //     .then((response) => {
        //         //update the state with the response data
        //         console.log("inside componentDidMount")
        //         this.setState({
        //             menu: this.state.menu.concat(response.data.updatedList)
        //         });
        //         console.log(this.state.menu)
        //         //this.state =  { authFlag2: cookie.load('cookie') }
        //         //console.log(this.state.authFlag2);
        //     });
    }

    render() {

        let Menu = Object.values(this.state.menu).map(menu1 => {
            console.log(menu1)
            return (
                <tr class="row-border">
                    {
                        Object.keys(menu1).map(key => {
                            console.log(key)

                            return (
                                <div class="c1"><th class="th1"><br />{key}<br /><br />
                                    {
                                        menu1[key].map(v1 => {
                                            //console.log(v1)
                                            //let _this1 = this;
                                            //_this.v1=v1;
                                            //alert(v1)
                                            return (

                                                <div class="div-menu outer-box1">
                                                    <h5>
                                                        <div class="div-menu1">
                                                            <p class="menu-name">{v1.name}
                                                                {/* Quantity:<input type="text" class="quantity" name="quantity" onChange={this.quantityChangeHandler}></input> */}
                                                            </p>

                                                            <br />
                                                            {v1.desc}
                                                            <br />
                                                            Price: {v1.price}
                                                        </div></h5>

                                                    <div class="container1">
                                                        <img src={v1.imageUrl} class="img-div" />
                                                        {/* <button class="btn" className="button-div" onClick={() => {this.addtoCart(v1)}}>${v1.price}+</button> */}
                                                    </div>

                                                </div>

                                            )
                                        })
                                    }
                                </th> </div>
                            )

                        })
                    }
                </tr>

            )
        })

        return (
            <div >
                <div>
                    <br />
                    <br />
                </div>
                <div class="col-md-3 profile-div">
                    <h3 class="font-bold">Your Account</h3><br />
                    <h5 class="font-bold" id="profile" ><div><a href="/oprofile">Profile</a></div></h5><br />
                    <h5 class="font-bold" id="phone" ><div><a href="/MenuList">Menu</a></div></h5><br />
                    <h5 class="font-bold" id="pOrders" ><div><a href="/oPastOrders">Past Orders</a></div></h5><br />
                    <h5 class="font-bold" id="uOrders" ><div><a href="/oUpcomingOrders">Upcoming Orders</a></div></h5><br />
                    <h5>
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    </h5>
                </div>
                <div>

                </div>

                   

                <div class="col-md-9 profile-div">
                    <h1>Menu</h1> <br />
                    <div class="col-md-6"></div>
                    <div class="col-md-2"><a href="/updateItems"><h4>Update Sections</h4></a> </div>
                    <div class="col-md-4">
                        <h4><a href="/addItem">Update Items</a></h4> </div>
                </div>

                <div>
                {Menu}
                </div>
            </div>
        )
    }
}

export default graphql(getMenubyemail)(menuList);



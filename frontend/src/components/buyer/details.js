import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
//import cookie from 'react-cookies';
//import {Redirect} from 'react-router';
//import {Route} from 'react-router-dom';
// import mobiscroll from '@mobiscroll/react';
// import '@mobiscroll/react/dist/css/mobiscroll.min.css';
//import Popup from "reactjs-popup";
import Modal from 'react-responsive-modal';
import { getMenubyname } from '../../queries/queries'
import { graphql } from 'react-apollo';

class details extends Component {

    constructor() {
        super();

        this.state = {
            menu: [],
            isClick: "no",
            number: 0,
            //itemList : "",
            cart: [],
            flag: false,
            itemList: "",
            price: 0,
            email: "",
            address: "",
            quantity: "",
            rName: "",
            orderID: "",
            currentPage: 1,
            itemsPerPage: 3
        }
        // this.handleChange = this.handleChange.bind(this);
        this.diplay = this.display.bind(this)
        // this.addtoCart = this.addtoCart.bind(this,itemName)
    }




    // increase() {
    //     this.setState({
    //         value: this.state.value + 1
    //     })
    // }

    // decrease() {
    //     this.setState({
    //         value: this.state.value - 1
    //     })
    // }

    display = () => {
        console.log("inside display")
        this.setState({
            isClick: "yes",
            open: false
        })
    }

    onOpenModal = (e) => {
        e.preventDefault();
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    goToCart = () => {
        //console.log("answer: ",rest)
        // sessionStorage.getItem('rid')
        // console.log(this.state.rId)

        this.props.history.push({
            pathname: '/cart',
            state: {
                rName: this.state.rName,
                orderID: sessionStorage.getItem('orderID')
            }
        })
    }

    addtoCart = (v1) => {
        //alert(v1.name," Added")
        console.log(v1)


        ////e.preventDefault();
        console.log("Here i am baby: ")
        console.log(sessionStorage.getItem('orderID'))
        this.setState({
            orderID: sessionStorage.getItem('orderID'),
            flag: true,
            itemList: v1.name,
            price: parseFloat(v1.price, 10),
            email: sessionStorage.getItem('login_email'),
            rName: v1.rName

            // address: "1318, The Alameda"
        })

        console.log(this.state.orderID)
        // const data = {
        //     orderID: sessionStorage.getItem('orderID'),
        //     itemList: v1.name,
        //     price: v1.price * this.state.quantity,
        //     email: sessionStorage.getItem('login_email'),
        //     bName: sessionStorage.getItem('fName'),
        //     rName: v1.rName
        // }

        // axios.post('http://localhost1/addtoCart', data)
        //     .then((response) => {
        //         // e.preventDefault();
        //         console.log("Status Code : ", response.status);
        //         if (response.status === 201) {
        //             this.setState({
        //                 flag: true,
        //                 cart: response.data
        //             })
        //         } else {
        //             this.setState({
        //                 flag: false,
        //                 msg: 'Section already exists!'
        //             })
        //         }
        //     })
    }


    numberChangeHandler = (e) => {
        this.setState({
            number: e.target.value
        })
    }

    quantityChangeHandler = (e) => {
        this.setState({
            quantity: parseFloat(e.target.value, 10)
        })
    }



    componentDidMount() {
        this.setState({
            menu: this.props.data
        })
        // const data = {
        //     //rId: this.props.location.state.rId,
        //     rName: this.props.location.state.rName
        // }
        // console.log(data)
        // axios.post('http://localhost1/getMenu1', data)
        //     .then((response) => {
        //         //update the state with the response data
        //         console.log("inside componentDidMount of get menu")
        //         this.setState({
        //             menu: this.state.menu.concat(response.data.updatedList)
        //         });
        //         //this.state =  { authFlag2: cookie.load('cookie') }
        //         //console.log(this.state.authFlag2);
        //     });
    }


    render() {
        let Popup;
        const isClick = this.state.isClick;

        if (isClick == "yes") {
            Popup = (
                <div id="id01" class="w3-modal">
                    <div class="w3-modal-content w3-card-4">
                        <div>
                            Cart
                </div>

                    </div>
                </div>
            )
        }

        else if (isClick == "no") {
            Popup = (
                <div></div>
            )
        }
        let Cart;
        if (this.state.flag) {

            Cart = (
                <div> <h2>Cart</h2>
                    <div>
                        <h3>{this.state.address}</h3>
                    </div>
                    <div>
                        <h3>{this.state.orderID}</h3>
                        <h3>{this.state.itemList}</h3>
                        <h3>{this.state.quantity}</h3>
                    </div>
                    <div><h3>{this.state.price * this.state.quantity}</h3></div>


                </div>
            )
        }
        else {
            Cart = (
                <div>

                </div>
            )
        }

        let _this = this;
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
                                                                Quantity:<input type="text" class="quantity" name="quantity" onChange={this.quantityChangeHandler}></input>
                                                            </p>

                                                            <br />
                                                            {v1.desc}
                                                            <br />

                                                        </div></h5>

                                                    <div class="container1">
                                                        <img src={v1.imageUrl} class="img-div" />
                                                        <button class="btn" className="button-div" onClick={() => { this.addtoCart(v1) }}>${v1.price}+</button>
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
            <div class="popup container-fluid">

                <br />
                <div class="col-sm-9 details-main-divs">
                    <div>
                        <div class="col-md-6"></div>
                        <div class="col-md-2"><a href="/upcomingOrders"><h4>Past Orders</h4></a> </div>
                        <div class="col-md-4">
                            <h4><a href="/pastOrders">Upcoming Orders</a></h4> </div>
                    </div> <br /><br /><br />
                    <div class="details-div">
                        <div class="rest-img">


                            <img src="https://platinumroyalties.com/wp-content/uploads/2018/01/bjs.jpg" class="logo"></img></div>
                        <div>
                            {/* <h2 class="rest-name-div">{this.props.location.state.rName}</h2> */}
                            <h5 class="rest-name-div">Address</h5>
                        </div>
                    </div>
                    <div class="details-div popup">
                        {Menu}

                    </div>
                </div>
                <div class="col-sm-3 details-main-divs">
                    <h2>Add to Cart</h2>
                    <button onClick={this.goToCart}>Go to Cart</button>
                </div>
            </div>
        )
    }
}

export default graphql(getMenubyname)(details);






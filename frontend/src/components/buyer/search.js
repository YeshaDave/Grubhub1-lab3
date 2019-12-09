import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
//import cookie from 'react-cookies';
//import {Redirect} from 'react-router';
//import {Route} from 'react-router-dom';


class search extends Component {


    constructor() {
        super();

        this.state = {
            rest: [],
           // sections: [],
            rName : "",
            rId : "",
            items: [],
            currentPage : 1,
            itemsPerPage : 4
           // index: ""
        }
        this.handleClick = this.handleClick.bind(this);
        this.goTo = this.goTo.bind(this)
    }

    // componentWillReceiveProps({items}) {
    //     console.log('Inside menu will receive props');
    //     this.setState({
    //         items : items
    //     });
    // }

    handleClick(event) {
        console.log(event.target.id);
        this.setState({
          currentPage: Number(event.target.id)
        });
      }

    goTo = (rest) => {
        console.log("answer: ",rest)
      // sessionStorage.getItem('rid')
       // console.log(this.state.rId)
        this.props.history.push({
            pathname: '/details',
            state: {
                rName : rest.rName
            }
        })
    }

    componentDidMount() {
        const data = {
            item: this.props.location.state.item,
            }
        axios.post('http://localhost1/getRestaurants1',data)
            .then((response) => {
                //update the state with the response data
                console.log("inside get restaurants: ",response.data )
                this.setState({
                    items: this.state.rest.concat(response.data.updatedList)
                });
                //this.state =  { authFlag2: cookie.load('cookie') }
                //console.log(this.state.authFlag2);
            });

            // axios.post('http://localhost1/getSections')
            //     .then((response) => {
            //     //update the state with the response data
            //     console.log("inside componentDidMount")
            //     this.setState({
            //         sections : this.state.sections.concat(response.data) 
            //     });
            //     //this.state =  { authFlag2: cookie.load('cookie') }
            //     //console.log(this.state.authFlag2);
            // });
    }


    render(){
        const {items,currentPage, itemsPerPage} = this.state;

        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
        let Rest = currentItems.map((item, index) => {
            if(item != null){
                console.log(item)
                return(
                <div class="div-menu outer-box1 rest">
                    <div class="container1">
                            <img src={item.rImage} class="img-div" />           
                    </div>
                                                    <h5>
                                                        <div class="div-menu2">
                                                            
                                                            <p class="menu-name">{item.rName}</p>
                                                            <p class="menu-name">{item.cuisine}</p>
                                                            <p class="menu-name">{item.phone}</p>
                                                        <br />    
                                                    </div>
                                                    </h5>
                                                    <div>  
                                                        <button onClick={() => {this.goTo(item)}}>Details</button>
                                                    </div>
                </div>
                                           
                )}
        })
        const pageNumbers = [];
        for(let i = 1; i <= Math.ceil(items.length / itemsPerPage);i++) {
            pageNumbers.push(i);
        }
        const renderNumbers = pageNumbers.map(number => {
            return (
                <button className = "btn btn-outline-primary" key = {number} id = {number} onClick = {this.handleClick}> 
                    {number}
                </button>
            );
        });

        return(
            <div class="col-md-12">
                
                <div>
                <div>
                <div class="col-md-6"></div> 
                <div class="col-md-2"><a href="/upcomingOrders"><h4>Past Orders</h4></a> </div>
                <div class="col-md-4">
                <h4><a  href="/pastOrders">Upcoming Orders</a></h4> </div> 
                </div> <br/>
                <div class="search">
                {/* {Sections} */}
                </div>
                <br/><br/><br/><br/><br/><br/><br/>

                <div class="search">
                    <br/><br/>
                {Rest}
                {renderNumbers}

                </div>
                </div>
            </div>
        )
    }
}


export default search;
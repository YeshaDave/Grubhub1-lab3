class home extends Component {
	this.state = {
		messages : []
	}
	 this.handleDrag = this.handleDrag.bind(this);
	 
	 handleDrag = (e, ui) => {
        const {x, y} = this.state.deltaPosition;
        this.setState({
          deltaPosition: {
            x: x + ui.deltaX,
            y: y + ui.deltaY,
          }
        });
    }
	
	render() {
	const orderNameList = this.state.items.map((item) => (
            <div key = {item.orderid} style = {divStyle2}>
                <div style = {divStyle4}>{item.Status}</div>
                <div style = {divStyle3}>{item.ItemNames.map((name) => (
                    <div>
                        <div>{name}</div>
                    </div>
                ))}
                </div>
                <div style = {divStyle3}>{item.RestaurantName}</div>
                <div style = {divStyle3}>${item.Total}</div>
                {localStorage.setItem('OrderId',item._id)}
                <button className = "btn btn-primary" style = {buttonStyle3} onClick = {this.handlesetModalShow.bind(this,item.RestaurantName)}>Message</button>
            </div>
        ));
	
	(PUT THIS WHEREVER NEEDED)
		<Draggable onDrag={this.handleDrag}>
                                <div className="box">
                                    {/*<div>I track my deltas</div>
                                    <div>x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</div>*/}
                                    <div className = "col-sm">
                                        {orderNameList}
                                    </div>
                                </div>
                            </Draggable>
	}
}
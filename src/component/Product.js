import React, { Component } from 'react';


export default class Product extends Component {
  render() {
  	
    const {title,price,quantity} = this.props;
    return (
      <div className="Product" style={{ marginTop:20 }} >
	   {title} - $ {price}  {quantity ? `${quantity}x` : null}
	   
      </div>
    );
  }
}
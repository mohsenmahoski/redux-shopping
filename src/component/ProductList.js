import React, { Component } from 'react';


export default class ProductList extends Component {
  render() {
  	const {children , title} = this.props;
    return (
      <div className="ProductList">
	      <h1>{title}</h1>
	      {children}
      </div>
    );
  }
}
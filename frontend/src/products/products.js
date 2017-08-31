import React from 'react';
import '../css/product.css';
import * as ReactRedux from 'react-redux';
import * as actions from './products.actions';

class products extends React.Component {
  
  componentDidMount(){
    this.props.fetchProduct()
  }

  render() {
    
    let productImages;
    
    productImages = this.props.products.map((input,idx) =>  
      <div className="product" key={idx}> <img src={input.image}/>
      <h6 className="productName"> {input.name} </h6>
      <p className="productDescription"> {input.description} </p>
      <span className="productPrice">{input.price} </span>
      <a className="productLink" href={input.link}> Buy Now </a>
    </div>
    )

  return (
    <div>
      
      <div className="productWrapper">
      
      {productImages}
      
      </div>
    
    </div>
  )
  } 
}

const productsContainer = ReactRedux.connect (
  state => state,
  actions
)(products);

export default productsContainer;
import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import ReviewBody from "./RatingsAndReviews/ReviewBody.jsx";
import ProductDetail from "./ProductDetail/Main.jsx";
import ReviewList from "./RatingsAndReviews/ReviewList.jsx";
import QuestionsView from './QuestionsAnswers/index.jsx';

// this is a test

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      firstProductShown: {},
      styles: null
    };
    this.getProducts = this.getProducts.bind(this);
    this.getFirstProduct = this.getFirstProduct.bind(this);
    this.getProductByID = this.getProductByID.bind(this);
    this.getProductStyle = this.getProductStyles.bind(this)
  }

  componentDidMount () {
    this.getProducts();
  }

  getFirstProduct () {
    var numberOfProducts = this.state.products.length;
    var randomProduct = Math.floor(Math.random() * numberOfProducts);
    this.setState({firstProductShown: this.state.products[randomProduct]})
  }

  getProducts () {
    axios.get(`http://127.0.0.1:3000/api/products`)
      .then((response) => {
        this.setState({products: response.data});
        this.getFirstProduct();
        this.getProductStyles(this.state.firstProductShown.id);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  getProductByID (productId) {
    axios.post(`http://127.0.0.1:3000/api/products/id`, {
      product: productId
    })
    .then((response) => {
    })
    .catch((error) => {
      console.log('post error: ', error);
    })
  }

  getProductStyles (productId) {
    axios.post(`http://127.0.0.1:3000/api/products/id/styles`, {
      product: productId
    })
    .then((response) => {
      this.setState({ styles: response.data})
    })
    .catch((error) => {
      console.log('post error: ', error);
    })
  }

  render() {
    return (
      <div style={{background: 'tan'}}>
        {this.state.styles !== null
            ? <ProductDetail currentProduct={this.state.firstProductShown} styles={this.state.styles}/>
            : null
          }
        <div>
          {this.state.styles !== null
            ? <><QuestionsView productId={this.state.firstProductShown.id}/>
            <ReviewList firstProduct = {this.state.firstProductShown.id}/></>
            : null
          }
        </div>
      </div>
    );
  }
}

export default App;
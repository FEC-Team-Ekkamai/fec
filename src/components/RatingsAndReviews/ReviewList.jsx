import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import ReviewListEntry from "./ReviewListEntry.jsx";

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: 0,
      productReviews: []
    };
    this.getReviewsForProduct = this.getReviewsForProduct.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    return {product_id: props.firstProduct};
  }

  getReviewsForProduct() {
    var params = {
      product_id: this.state.product_id,
    };

    axios.get(
      'http://127.0.0.1:3000/api/reviews',
      {
        params: params
      },
      {
        params: params
      }
      )
      .then((response) => {
        this.setState({productReviews: response.data.results});
        console.log('this is ReviewList: ', this.state.productReviews);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  componentDidMount() {
    console.log('CDM', this.state);
    this.getReviewsForProduct();
  }

  render() {
    const hasReviews = this.state.productReviews.length;
    return (
      <div>
        {hasReviews !== 0
            ? this.state.productReviews.map((review) => <ReviewListEntry review={review} />)
            : null
          }
      </div>
    );
  }
}

export default ReviewList;





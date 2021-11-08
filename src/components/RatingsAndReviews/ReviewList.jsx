import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import ReviewListEntry from "./ReviewListEntry.jsx";
import MoreReviews from './MoreReviews.jsx';
import AddReview from './AddReview.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: 0,
      productReviews: [],
      productCharacteristics: {}
    };
    this.getReviewsForProduct = this.getReviewsForProduct.bind(this);
    this.handleHelpClick = this.handleHelpClick.bind(this);
    this.handleReportClick = this.handleReportClick.bind(this);
    this.getCharacteristicsForProduct= this.getCharacteristicsForProduct.bind(this);
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
      })
      .catch((error) => {
        console.log(error);
      })
  }

  getCharacteristicsForProduct() {
    var params = {
      product_id: this.state.product_id,
    };

    axios.get(
      'http://127.0.0.1:3000/api/reviews/meta',
      {params: params},
      {params: params}
    )
    .then((response) => {
      this.setState({productCharacteristics: response.data.characteristics});
      console.log('product characteristics', this.state.productCharacteristics);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  componentDidMount() {
    this.getReviewsForProduct();
    this.getCharacteristicsForProduct();
  }

  handleHelpClick(e) {
    var reviewId = e.target.id;

    axios.put(
      `http://127.0.0.1:3000/api/reviews/${reviewId}/helpful`
    )
  }

  handleReportClick(e) {
    var reviewId = e.target.id;
    axios.put(
      `http://127.0.0.1:3000/api/reviews/${reviewId}/report`
    )
  }

  render() {
    const hasReviews = this.state.productReviews.length;
    return (
      <div>
        {hasReviews !== 0
            ? this.state.productReviews.map((review, i) => <ReviewListEntry review={review} handleHelpClick = {this.handleHelpClick} handleReportClick = {this.handleReportClick} key = {i})
            : null
          }
          <MoreReviews />
          <AddReview characteristics = {this.state.productCharacteristics} show = {this.state.isShowing} close = {this.modalHandler}/>
      </div>
    );
  }
}

export default ReviewList;





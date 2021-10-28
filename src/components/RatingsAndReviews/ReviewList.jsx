import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import ReviewListEntry from "./ReviewListEntry.jsx";

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productReviews: [
        {
          "product": "2",
          "page": 0,
          "count": 5,
          "results": [
            {
              "review_id": 5,
              "rating": 3,
              "summary": "I'm enjoying wearing these shades",
              "recommend": false,
              "response": null,
              "body": "Comfortable and practical.",
              "date": "2019-04-14T00:00:00.000Z",
              "reviewer_name": "shortandsweeet",
              "helpfulness": 5,
              "photos": [{
                  "id": 1,
                  "url": "urlplaceholder/review_5_photo_number_1.jpg"
                },
                {
                  "id": 2,
                  "url": "urlplaceholder/review_5_photo_number_2.jpg"
                },
              ]
            },
            {
              "review_id": 3,
              "rating": 4,
              "summary": "I am liking these glasses",
              "recommend": false,
              "response": "Glad you're enjoying the product!",
              "body": "They are very dark. But that's good because I'm in very sunny spots",
              "date": "2019-06-23T00:00:00.000Z",
              "reviewer_name": "bigbrotherbenjamin",
              "helpfulness": 5,
              "photos": [],
            },
          ]
        }

      ],
    };
    this.getReviewsForProduct = this.getReviewsForProduct.bind(this);
  }

  componentDidMount() {
    console.log(this.state);
  }

  getReviewsForProduct() {
    var headers = {
      authorization: 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,
    };

    var params = {
      product_id: 1,
    };
    axios
      .get(
        "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews",
        params,
        headers
      )
      .then((response) => {
        this.setState({ productReviews: response.results });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {this.state.productReviews.map((review) => <ReviewListEntry review={review} />)}
      </div>
    );
  }
}

export default ReviewList;

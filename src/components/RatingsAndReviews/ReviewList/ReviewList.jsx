import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import ReviewListEntry from "./ReviewListEntry.jsx";
import MoreReviews from "./MoreReviews.jsx";
import AddReview from "../AddReview/AddReview.jsx";
import Dropdown from "./Dropdown.jsx";
import RatingBreakdown from "../RatingBreakdown/RatingBreakdown.jsx";
import styled from "styled-components";

const StyledDiv = styled.div`
  position: relative;
  height: 500px;
  width: 750px;
  overflow-y: auto;
  margin-left: 19px;
  background: rgba(0,0,0, .1);
  border-radius: 15px;
  margin-top: 10px;
`;

const StyledContainer = styled.div`
  width: 750px;
  position: relative;
  margin-left: 333px;
`;

const StyledDivButton = styled.div`
  width: 100px;
  margin: 10px;
`;

const StyledDivButton1 = styled.div`
  width: 100px;
  margin: 10px;
`;

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: 0,
      productReviewsNewest: [],
      productReviewsHelpful: [],
      productReviewsRelevant: [],
      productCharacteristics: {},
      productReviewsSubArrayNewest: [],
      productReviewsSubArrayHelpful: [],
      productReviewsSubArrayRelevant: [],
      productMeta: null,
      reviewView: "relevant",
    };
    this.getReviewsForProductNewest =
      this.getReviewsForProductNewest.bind(this);
    this.getReviewsForProductHelpful =
      this.getReviewsForProductHelpful.bind(this);
    this.getReviewsForProductRelevant =
      this.getReviewsForProductRelevant.bind(this);
    this.handleHelpClick = this.handleHelpClick.bind(this);
    this.handleReportClick = this.handleReportClick.bind(this);
    this.getCharacteristicsForProduct =
      this.getCharacteristicsForProduct.bind(this);
    this.reviewCountRenderNewest = this.reviewCountRenderNewest.bind(this);
    this.reviewCountRenderHelpful = this.reviewCountRenderHelpful.bind(this);
    this.reviewCountRenderRelevant = this.reviewCountRenderRelevant.bind(this);
    this.reviewSortHandler = this.reviewSortHandler.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    return { product_id: props.firstProduct };
  }

  getReviewsForProductNewest() {
    var params = {
      product_id: this.state.product_id,
      sort: "newest",
    };

    axios
      .get(
        "http://127.0.0.1:3000/api/reviews",
        {
          params: params,
        },
        {
          params: params,
        }
      )
      .then((response) => {
        this.setState({
          productReviewsNewest: response.data.results.reverse(),
        });
        this.reviewCountRenderNewest();
      })
      .catch((error) => {});
  }

  getReviewsForProductHelpful() {
    var params = {
      product_id: this.state.product_id,
      sort: "helpful",
    };

    axios
      .get(
        "http://127.0.0.1:3000/api/reviews",
        {
          params: params,
        },
        {
          params: params,
        }
      )
      .then((response) => {
        this.setState({ productReviewsHelpful: response.data.results });
        this.reviewCountRenderHelpful();
      })
      .catch((error) => {});
  }

  getReviewsForProductRelevant() {
    var params = {
      product_id: this.state.product_id,
      sort: "relevant",
    };

    axios
      .get(
        "http://127.0.0.1:3000/api/reviews",
        {
          params: params,
        },
        {
          params: params,
        }
      )
      .then((response) => {
        this.setState({ productReviewsRelevant: response.data.results });
        this.reviewCountRenderRelevant();
      })
      .catch((error) => {});
  }

  getCharacteristicsForProduct() {
    var params = {
      product_id: this.state.product_id,
    };

    axios
      .get(
        "http://127.0.0.1:3000/api/reviews/meta",
        { params: params },
        { params: params }
      )
      .then((response) => {
        this.setState({
          productCharacteristics: response.data.characteristics,
          productMeta: response.data,
        });
      })
      .catch((error) => {});
  }

  componentDidMount() {
    this.getCharacteristicsForProduct();
    this.getReviewsForProductNewest();
    this.getReviewsForProductHelpful();
    this.getReviewsForProductRelevant();
  }

  handleHelpClick(e) {
    var reviewId = e.target.id;

    axios.put(`http://127.0.0.1:3000/api/reviews/${reviewId}/helpful`);
  }

  handleReportClick(e) {
    var reviewId = e.target.id;
    axios.put(`http://127.0.0.1:3000/api/reviews/${reviewId}/report`);
  }

  reviewCountRenderNewest() {
    if (this.state.productReviewsNewest.length > 0) {
      if (this.state.productReviewsSubArrayNewest.length > 0) {
        var reviewSubArray = this.state.productReviewsSubArrayNewest.concat(
          this.state.productReviewsNewest.slice(0, 2)
        );
      } else {
        reviewSubArray = this.state.productReviewsNewest.slice(0, 2);
      }

      var productReviews = this.state.productReviewsNewest;

      productReviews.splice(0, 2);

      this.setState({
        productReviewsNewest: productReviews,
        productReviewsSubArrayNewest: reviewSubArray,
      });
    }
  }

  reviewCountRenderHelpful() {
    if (this.state.productReviewsHelpful.length > 0) {
      if (this.state.productReviewsSubArrayHelpful.length > 0) {
        var reviewSubArray = this.state.productReviewsSubArrayHelpful.concat(
          this.state.productReviewsHelpful.slice(0, 2)
        );
      } else {
        reviewSubArray = this.state.productReviewsHelpful.slice(0, 2);
      }

      var productReviews = this.state.productReviewsHelpful;

      productReviews.splice(0, 2);

      this.setState({
        productReviewsHelpful: productReviews,
        productReviewsSubArrayHelpful: reviewSubArray,
      });
    }
  }

  reviewCountRenderRelevant() {
    if (this.state.productReviewsRelevant.length > 0) {
      if (this.state.productReviewsSubArrayRelevant.length > 0) {
        var reviewSubArray = this.state.productReviewsSubArrayRelevant.concat(
          this.state.productReviewsRelevant.slice(0, 2)
        );
      } else {
        reviewSubArray = this.state.productReviewsRelevant.slice(0, 2);
      }

      var productReviews = this.state.productReviewsRelevant;

      productReviews.splice(0, 2);

      this.setState({
        productReviewsRelevant: productReviews,
        productReviewsSubArrayRelevant: reviewSubArray,
      });
    }
  }

  reviewSortHandler(e) {
    this.setState({ reviewView: e.target.value });
  }

  render() {
    if (this.state.reviewView === "newest") {
      const hasReviews = this.state.productReviewsSubArrayNewest.length;
      var subArray = this.state.productReviewsSubArrayNewest;
      var reviews = this.state.productReviewsNewest;
      var reviewCountRender = this.reviewCountRenderNewest;
    } else if (this.state.reviewView === "helpful") {
      var hasReviews = this.state.productReviewsSubArrayHelpful.length;
      var subArray = this.state.productReviewsSubArrayHelpful;
      var reviews = this.state.productReviewsHelpful;
      var reviewCountRender = this.reviewCountRenderHelpful;
    } else if (this.state.reviewView === "relevant") {
      var hasReviews = this.state.productReviewsSubArrayRelevant.length;
      var subArray = this.state.productReviewsSubArrayRelevant;
      var reviews = this.state.productReviewsRelevant;
      var reviewCountRender = this.reviewCountRenderRelevant;
    }

    return (
      <div position="relative">
        {this.state.productMeta !== null ? (
          <RatingBreakdown meta={this.state.productMeta} />
        ) : null}

        <Dropdown sortHandler={this.reviewSortHandler} />
        <StyledDiv>
          {hasReviews !== 0
            ? subArray.map((review, i) => (
                <ReviewListEntry
                  review={review}
                  handleHelpClick={this.handleHelpClick}
                  handleReportClick={this.handleReportClick}
                  key={i}
                />
              ))
            : null}
        </StyledDiv>

        {/* <StyledContainer>
          <StyledDivButton1>
            <AddReview
              characteristics={this.state.productCharacteristics}
              show={this.state.isShowing}
              close={this.modalHandler}
              productId={this.state.product_id}
            />
          </StyledDivButton1>
          <StyledDivButton>
            {reviews.length !== 0 ? (
              <MoreReviews moreReviewHandler={reviewCountRender} />
            ) : null}
          </StyledDivButton>
        </StyledContainer> */}

        {reviews.length !== 0 ? (
          <StyledContainer>
            <div style={{width: '270px', display: 'flex', flexDirection: 'row', marginLeft: '256px', marginTop: '10px'}}>
              <StyledDivButton1>
                <AddReview
                  characteristics={this.state.productCharacteristics}
                  show={this.state.isShowing}
                  close={this.modalHandler}
                  productId={this.state.product_id}
                  />
              </StyledDivButton1>
              <StyledDivButton>
                <MoreReviews moreReviewHandler={reviewCountRender} />
              </StyledDivButton>
              </div>
            </StyledContainer> ) : (
            <StyledContainer>
              <div style={{width: '135px', marginLeft: '316px', marginTop: '10px'}}>
              <StyledDivButton1>
                <AddReview
                  characteristics={this.state.productCharacteristics}
                  show={this.state.isShowing}
                  close={this.modalHandler}
                  productId={this.state.product_id}
                />
              </StyledDivButton1>
            </div>
          </StyledContainer>
          )}
      </div>
    );
  }
}

export default ReviewList;
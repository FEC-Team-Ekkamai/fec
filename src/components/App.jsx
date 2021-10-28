import React from "react";
import ReactDOM from "react-dom";
import ReviewList from "./ReviewList.jsx";
import ReviewBody from "./ReviewBody.jsx";
import ProductDetail from "./ProductDetail/Main.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        This is the FEC app
        <ProductDetail />
        <ReviewList />
      </div>
    );
  }
}

export default App;

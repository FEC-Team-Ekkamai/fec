import React from 'react';
import ReactDOM from 'react-dom';
import ProductDetail from './ProductDetail/Main.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        This is the FEC app
        <ProductDetail />
      </div>
    )
  }
}

export default App;
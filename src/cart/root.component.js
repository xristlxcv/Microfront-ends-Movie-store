import React, { Component } from "react";
import "./cart.css";
import Counter from "./counter";

class Cart extends Component {
  state = {
    products: []
  };
  componentDidMount() {
    window.addEventListener(
      "addToCart",
      event => {
        this.setState({ products: [...this.state.products, event.detail] });
      },
      false
    );
  }
  checkCart = () => {
    return this.state.products.filter(
      (item, index) => this.state.products.indexOf(item) === index
    );
  };

  render() {
    console.log(this.state.products);
    return (
      <div id="first">
        <h1 id="cart">Cart</h1>
        <div>
          {this.checkCart().map(el => (
            <li>
              {el} :<Counter value={el} />
            </li>
          ))}
        </div>
      </div>
    );
  }
}
export default Cart;

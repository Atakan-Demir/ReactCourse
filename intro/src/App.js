import React, { Component } from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";
import FormDemo1 from "./FormDemo1";
import FormDemo2 from "./FormDemo2";


// App.js'i class component'te çeviriyoruz.
export default class App extends Component {

  state = { currentCategory: "all", products: [], cart: [] };

  changeCategory = (category) => {
    if (category === "all") {
      this.getProducts();
      this.setState({ currentCategory: "all" });
      return;
    }
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = (id) => {
    let url = "http://localhost:3000/products";
    if (id) {
      url += "?categoryId=" + id;
    }
    fetch(url).then(response => response.json()).then(data => this.setState({ products: data }));
  };


  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(product.productName + " added to cart!", 2);

  }

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.productName + " removed from cart!", 2);
  }

  render() {
    let categoryInfo = { title: "Category List" };
    let productInfo = { title: "Product List", baskaBirsey: "baska birsey" };
    return (
      <div >
        <Container>

          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />

          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>
            <Col xs="9">

              <Routes>
                {/* element özelliği, bir JSX elementi kabul eder. Bu özellik sayesinde React Router 6 ile uyumlu hale gelir. */}
                <Route path="/" element={

                  < ProductList
                    products={this.state.products}
                    addToCart={this.addToCart}
                    currentCategory={this.state.currentCategory}
                    info={productInfo} />
                } />
                <Route path="/cart" element={
                  <CartList
                    cart={this.state.cart}
                    removeFromCart={this.removeFromCart}
                  />
                } />
                <Route path="/form1" Component={FormDemo1} />
                <Route path="/form2" Component={FormDemo2} />
                <Route path="*" Component={NotFound} />

              </Routes>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}



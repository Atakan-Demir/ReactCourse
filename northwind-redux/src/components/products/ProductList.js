import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge, Button, Row, Table } from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as productActions from '../../redux/actions/productActions';
import * as cartActions from '../../redux/actions/cartActions';
import alertify from 'alertifyjs';
import { Link } from 'react-router-dom';

class ProductList extends Component {


    componentDidMount() {
        this.props.actions.getProducts()
    }

    addToCart = (product) => {
        this.props.actions.addToCart({ quantity: 1, product });
        alertify.success(product.productName + " added to cart!", 2);
    }

    render() {
        return (
            <div>
                <Row>
                    <h3>Products <Badge color='success'>{this.props.currentCategory.categoryName}</Badge></h3>
                </Row>
                <Row>
                    <Table>
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    Name
                                </th>
                                <th>
                                    Unit Price
                                </th>
                                <th>
                                    Quantity Per Unit
                                </th>
                                <th>
                                    In Stock
                                </th>
                                <th>

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.products.map(product => (
                                    <tr key={product.id}>
                                        <th scope="row">
                                            {product.id}
                                        </th>
                                        <td>

                                            <Link to={"/saveproduct/" + product.id}>{product.productName}</Link>

                                        </td>
                                        <td>
                                            {product.unitPrice}
                                        </td>
                                        <td>
                                            {product.quantityPerUnit}
                                        </td>
                                        <td>
                                            {product.unitsInStock}
                                        </td>
                                        <td>
                                            <Button onClick={() => this.addToCart(product)} color='success'
                                                disabled={product.unitsInStock < 1 ? true : false}>+</Button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Row>

            </div>

        )
    }
}




function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        products: state.productListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getProducts: bindActionCreators(productActions.getProducts, dispatch),
            addToCart: bindActionCreators(cartActions.addToCart, dispatch)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
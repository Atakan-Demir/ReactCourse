import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../../redux/actions/cartActions';
import { Button, Table } from 'reactstrap';
import alertify from 'alertifyjs';

class CartDetail extends Component {

    removeFromCart(product) {
        this.props.actions.removeFromCart(product);
        alertify.error(product.productName + " removed from cart!", 2);
    }


    render() {
        return (
            <div>
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
                                Quantity
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.cart.map(cartItem => (
                                <tr key={cartItem.product.id}>
                                    <th scope="row">
                                        {cartItem.product.id}
                                    </th>
                                    <td>
                                        {cartItem.product.productName}
                                    </td>
                                    <td>
                                        {cartItem.product.unitPrice}
                                    </td>
                                    <td>
                                        {cartItem.quantity}
                                    </td>
                                    <td>
                                        {cartItem.product.unitsInStock}
                                    </td>
                                    <td>
                                        <Button onClick={() => this.removeFromCart(cartItem.product)} color='danger'>X</Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);

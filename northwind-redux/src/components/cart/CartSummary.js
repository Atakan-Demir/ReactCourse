import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap'
import { bindActionCreators } from 'redux'
import * as cartActions from '../../redux/actions/cartActions'



class CartSummary extends Component {

    renderEmpty() {
        return (
            <div>
                <NavItem>
                    <NavLink>Empty Cart</NavLink>
                </NavItem>
            </div>
        )
    }
    renderSummary() {
        return (
            <div>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Cart - {this.props.cart.length}
                    </DropdownToggle>
                    <DropdownMenu end>

                        {
                            this.props.cart.map(cartItem => (
                                <DropdownItem
                                    key={cartItem.product.id}
                                >
                                    <Badge color="danger" onClick={() => this.props.actions.removeFromCart(cartItem.product)}> X </Badge>
                                    {cartItem.product.productName} - <Badge color="warning">{cartItem.quantity}</Badge>
                                </DropdownItem>
                            ))
                        }
                        <DropdownItem divider />
                        <DropdownItem>Go to Cart</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}

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

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);

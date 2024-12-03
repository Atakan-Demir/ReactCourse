import React, { Component } from 'react'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
    NavItem,
    NavLink,
} from 'reactstrap'

export default class CartSummary extends Component {

    renderSummary() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Cart - {this.props.cart.length}
                </DropdownToggle>
                <DropdownMenu end>
                    {
                        this.props.cart.map(p => (
                            <DropdownItem key={p.product.id}><Badge color='danger' onClick={() => this.props.removeFromCart(p.product)}> X </Badge> {p.product.productName} - <Badge color='success'>{p.quantity}</Badge></DropdownItem>
                        ))
                    }
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }

    renderEmptyCart() {
        return (
            <NavItem><NavLink>Empty Cart</NavLink></NavItem>
        )
    }

    render() {
        return (
            <div>{this.props.cart.length > 0 ? this.renderSummary() : this.renderEmptyCart()}</div>
        )
    }
}

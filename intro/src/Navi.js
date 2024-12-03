import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,


} from 'reactstrap';
import CartSummary from './CartSummary';

// bu bir Class Component
export default class Navi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }

    }
    // toggle fonksiyonu ile isOpen state'ini değiştiriyoruz
    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    // render metodu içerisinde return edilen JSX kodu ekrana yansıtılır
    render() {
        return (
            <div>
                <Navbar color='light' light expand="md">
                    <NavbarBrand href="/">App</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.isOpen} navbar>
                        <Nav className="ms-auto" navbar >

                            <CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart} />
                        </Nav>

                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

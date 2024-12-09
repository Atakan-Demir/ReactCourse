import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,

} from 'reactstrap';

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

                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ms-auto" navbar>
                            <NavItem>
                                <NavLink >Components</NavLink>
                            </NavItem>
                            <NavItem>

                                <NavLink>GitHub</NavLink>

                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                                </DropdownToggle>
                                <DropdownMenu end>
                                    <DropdownItem>Option 1</DropdownItem>
                                    <DropdownItem>Option 2</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Reset</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>

                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

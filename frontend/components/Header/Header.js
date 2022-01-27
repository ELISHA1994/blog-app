import {useState} from "react";
import {Collapse, Nav, Navbar, NavItem, NavLink, NavbarBrand, NavbarToggler} from "reactstrap";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color='light' light expand='md'>
                <NavbarBrand href='/'>Blogger</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='ml-auto' navbar>
                        <NavItem>
                            <NavLink href='/components/'>Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='https://github.com/reactstrap/reactstrap'>
                                GitHub
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
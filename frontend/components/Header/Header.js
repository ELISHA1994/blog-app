import { useState } from 'react';
import Link from "next/link";
import {APP_NAME} from "../../config";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import styles from  '../../styles/Header.module.scss';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    // console.log(process.env.NEXT_PUBLIC_APP_NAME);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color='light' light expand='md'>
                <Link href='/'>
                    <NavLink className={styles.logo}>Blogger</NavLink>
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='ml-auto' navbar>
                        <NavItem>
                            <Link href='/signin'>
                                <NavLink className={styles.cursor_pointer}>SignIn</NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link href='/signup'>
                                <NavLink className={styles.cursor_pointer}>SignUp</NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <NavLink href='https://github.com/alexticovschi/blogger'>
                                GitHub
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
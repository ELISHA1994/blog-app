import { useState } from 'react';
import Link from "next/link";
import { isAuth, signout } from "../../actions/auth";
import Router from "next/router";
import NProgress from "nprogress";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import styles from  '../../styles/Header.module.scss';
// hirefest@remotebase.com
// +92 336 5092908
Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    // console.log(process.env.NEXT_PUBLIC_APP_NAME);

    const toggle = () => setIsOpen(!isOpen);

    // const router = useRouter();

    return (
        <div>
            <Navbar color='light' light expand='md'>
                <Link href='/'>
                    <NavLink className={styles.logo}>Blogger</NavLink>
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='ml-auto' navbar>
                        {isAuth() ? (
                            <>
                                {isAuth().role === 1 ? (
                                    <NavItem>
                                        <Link href='/admin'>
                                            <NavLink>{`${isAuth().name}'s Dashboard`}</NavLink>
                                        </Link>
                                    </NavItem>
                                ) : (
                                    <NavItem>
                                        <Link href='/user'>
                                            <NavLink>{`${isAuth().name}'s Dashboard`}</NavLink>
                                        </Link>
                                    </NavItem>
                                )}
                                <NavItem>
                                    <Link href='/signin'>
                                        <NavLink
                                            className={styles.cursor_pointer}
                                            onClick={() => signout(() => Router.replace('/signin'))}
                                        >
                                            signOut
                                        </NavLink>
                                    </Link>
                                </NavItem>
                            </>
                        ) : (
                            <>
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
                            </>
                        )}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;



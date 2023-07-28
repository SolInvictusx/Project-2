import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Fireside from '../app/assets/img/Fireside.png';
import UserLoginForm from '../features/user/UserLoginForm';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
                <img src={Fireside} alt='Fireside logo' className='float-start' />
                <h1 className='mt-1'>Fireside Finder</h1>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/directory'>
                            Directory
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/about'>
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/contact'>
                            Contact
                        </NavLink>
                    </NavItem>
                </Nav>
                <UserLoginForm />
            </Collapse>
        </Navbar>
    );
};

export default Header;
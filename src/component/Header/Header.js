import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        Healthcare
                    </Navbar.Brand>
                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="mx-auto">
                            <Link to="/home">
                                <button type="button" class="btn btn-outline-info mx-2">Home</button>
                            </Link>
                            <Link to="/doctors">
                                <button type="button" class="btn btn-outline-info mx-2">Doctors</button>
                            </Link>
                            <Link to="/blogs">
                                <button type="button" class="btn btn-outline-info mx-2">Blogs</button>
                            </Link>

                        </Nav>
                        <Link to="/login">
                            <button type="button" class="btn btn-outline-info ">Login</button>
                        </Link>
                        <Link to="/register">
                            <button type="button" class="btn btn-outline-info mx-2">SignUp</button>
                        </Link>
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
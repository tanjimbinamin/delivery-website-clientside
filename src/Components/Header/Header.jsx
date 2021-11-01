import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../CustomHooks/useAuth';

const Header = () => {

    const {user,handleSignOut,setUser,setIsLoading}=useAuth()
    console.log(user)
    const handleGoogleSignOut=()=>{
        handleSignOut()
        .then(()=>{
            setUser('')
            setIsLoading(true)
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }
    return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <NavLink to ="/" style={{textDecoration:"none"}}>
                    <Navbar.Brand style={{fontSize:"30px"}}  href="#home">Bistora</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <NavLink to="/services" style={{textDecoration:"none"}} className="me-auto">
                        <Nav.Link href="#features"></Nav.Link>
                    </NavLink>
                    <Nav>
                        <NavLink to="/dashboard" style={{Color:"red",textDecoration:"none",fontSize:"20px"}}>
                            <Nav.Link href="#d">Admin Dasboard</Nav.Link>
                        </NavLink>

                        {user.email?(<NavLink  to="/login" style={{Color:"red",textDecoration:"none",fontSize:"20px"}}>
                            <Nav.Link onClick={handleGoogleSignOut} href="#d">Log Out</Nav.Link>
                        </NavLink>)
                        :
                        (<NavLink to="/login" style={{Color:"red",textDecoration:"none",fontSize:"20px"}}>
                            <Nav.Link href="#d">Log in</Nav.Link>
                        </NavLink>)}

                        <NavLink to="/" style={{Color:"red",textDecoration:"none",fontSize:"20px"}}>
                            <Nav.Link href="#d">Signed in as: <span style={{color:"cyan"}}>{user.displayName}</span></Nav.Link>
                        </NavLink>

                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
       
    );
};

export default Header;
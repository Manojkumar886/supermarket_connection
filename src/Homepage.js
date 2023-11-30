import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import './Images.css'



export const Homepage=()=>{
    return(
        <>
        <div id="bc1">
            <Navbar expand="lg" variant="light" >
                <Container>
                    <Navbar.Brand href="/" className="">JaiSuriya SuperMarket</Navbar.Brand>
                    <Navbar.Toggle aria-controls="manoj" />
                    <Navbar.Collapse id="manoj">
                        <Nav className="ms-5">   
                        <NavDropdown title="ProductDetails" id="basic-nav-dropdown">
                        <NavDropdown.Item href="createproduct">Create</NavDropdown.Item>
                        <NavDropdown.Item href="listallproductdetails">ListAll(update & Read & Delete)</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Nav className="ms-5">
                        <button className="btn btn-outline-dark me-5 "
                        onClick={
                            ()=>
                            {
                                sessionStorage.removeItem("auth");
                                window.location.assign("/");
                            }
                        }>
                                Logout
                        </button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
        </>
    )
}

import React from "react";
import {
  Button,
  Nav,
  Navbar,
  Container,
  Row,
  Col,
 
} from "react-bootstrap";
import "./Home.css";
import Footer from "../Home/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="Container ">
        <Navbar
          collapseOnSelect
          className="navcolor"
          expand="lg"
          variant="dark"
        >
          <Container>
            <Navbar.Brand className="header" href="#home">
              EDISONVALLEY
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#features">About</Nav.Link>
                <Nav.Link href="#pricing">Features</Nav.Link>
                <Nav.Link href="#pricing">Team</Nav.Link>
              </Nav>
              <Nav>
                <Button className="hbtn" variant="outline-success">
                  Sign in
                </Button>{" "}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div id="bg">
        <Container>
          <Row className="my-auto banner">
            <Col md="6">
              <div className="left">
                <h3>
                  Make Your Carrier <br />
                  with EdisonValley
                </h3>
                <p>
                  <br /> <br />
                  We are a bunch of tech enthusiasts determined to <br />
                  uplift the society utilising the latest technologies around
                  us.{" "}
                </p>
                <Link to={"/login"}>
                  <Button className="text-white btnOne" variant="warning">
                    Login
                  </Button>
                </Link>
              </div>
            </Col>
            <Col md="6">
              <div className="left">
                <img src={require("./sample.jpg")} alt="error" />
                {/* <h3>
              Make Your Carrier <br />
              with EdisonValley
            </h3>
            <p><br/> <br/>
        We are a bunch of tech enthusiasts determined to <br/>uplift the society utilising the latest technologies around us.{" "}
            </p>
            <Button className="text-white btnOne" variant="warning">
              LogIn
            </Button> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

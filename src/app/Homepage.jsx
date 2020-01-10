import React from 'react';
import { BlogEntryList } from './BlogEntryList';
import { BlogEntryRepository } from '../api/BlogEntryRepository';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';


export class Homepage extends React.Component {

    blogEntryRepository = new BlogEntryRepository();

    state = {
        entries: []
    };

    render() {
        return <>
            <Container fluid="true" id="shav-home-container">
                <Row className="d-flex justify-content-center align-items-center shav-header">
                    <Col>
                        <Navbar expand="lg">
                            <Navbar.Brand href="/">
                                <img
                                    alt=""
                                    src="https://i.imgur.com/a1JTXXB.png"
                                    width="350"
                                    height="100"
                                    className="d-inline-block align-top"
                                />{' '}
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto" id="shav-nav" fill>
                                    <div id="shav-nav-link">
                                        <Nav.Link href="/">Home</Nav.Link>
                                    </div>
                                    <div id="shav-nav-link">
                                        <Nav.Link href="/edit">Edit</Nav.Link>
                                    </div>
                                    <div id="shav-nav-link">
                                        <Nav.Link href="#">Not Real Link Playa</Nav.Link>
                                    </div>
                                    <div id="shav-nav-link">
                                        <Nav.Link href="#">Example Link Silly</Nav.Link>
                                    </div>
                                    <div id="shav-nav-link">
                                        <Nav.Link href="#">Notha Example</Nav.Link>
                                    </div>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>

                <Row>
                    <Col id="shav-img-container">
                    {/* <Image src="https://i.imgur.com/1V5vDI2.png" id="shav-image" fluid/> */}
                    </Col>
                </Row>


                <Row>
                    <Col>
                        <BlogEntryList entries={this.state.entries} />
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center shav-create-btn">
                        <Button href="/create" variant="outline-dark" size="lg">Create New Entry</Button>
                    </Col>
                </Row>

                {/* footer section */}
                {/* <Container id="shav-footer">
                    <Row>
                        <Col>
                            <Navbar expand="lg" fixed="bottom">
                                <Navbar.Brand href="/">
                                    Bloggerina&#8482;
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav id="shav-nav">
                                        <Nav.Link href="/">Home</Nav.Link>
                                        <Nav.Link href="/edit">Edit</Nav.Link>
                                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                    </Row>
                </Container> */}
            </Container>
        </>
    }

    componentDidMount() {
        this.blogEntryRepository.getAllBlogEntries()
            .then(entries =>
                this.setState({
                    entries: entries
                }));
    }
}
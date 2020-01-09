import React from 'react';
import { BlogEntryRepository } from '../api/BlogEntryRepository';
import { Redirect, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

export class BlogEditor extends React.Component {

    blogEntryRepository = new BlogEntryRepository();

    state = {
        entryId: "",
        entryTitle: "",
        entryAuthor: "",
        entryPost: "",
        entryDate: ""
    }

    render() {
        return <>
            {this.state.redirect && <Redirect to="/" />}
            <Container fluid="true">
                <Row className="d-flex justify-content-center align-items-center shav-header">
                    <Col>
                        <Navbar expand="lg" id="shav-links">
                            <Navbar.Brand href="#home">
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
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#link">Link</Nav.Link>
                                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-dark">Search</Button>
                                </Form>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Image src="https://i.imgur.com/Dhj3wTX.jpg" id="shav-image" fluid />
                    </Col>
                    <Col>
                        <Card id="shav-form">
                            <Card.Body>
                                <Form>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridEntryId">
                                            <Form.Label>Blog Entry Id</Form.Label>
                                            <Form.Control type="text" placeholder="e.g. 13"
                                                value={this.state.entryId} onChange={e => this.setState({ entryId: e.target.value })} />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridEntryDate">
                                            <Form.Label>Creation Date</Form.Label>
                                            <Form.Control type="text" placeholder="e.g. Jan 7. 2020"
                                                value={this.state.entryDate} onChange={e => this.setState({ entryDate: e.target.value })} />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Group controlId="formGridEntryTitle">
                                        <Form.Label>Blog Entry Title</Form.Label>
                                        <Form.Control type="text" placeholder="e.g. Why Today Was A Good Ass Day - Meow!"
                                            value={this.state.entryTitle} onChange={e => this.setState({ entryTitle: e.target.value })} />
                                    </Form.Group>

                                    <Form.Group controlId="formGridEntryPost">
                                        <Form.Label>And what's on your mind today?</Form.Label>
                                        <textarea className="form-control" rows="6" placeholder="e.g. Hi, my name is Shae and I'm going to tell you why today was a good ass day! For starters.."
                                            value={this.state.entryPost} onChange={e => this.setState({ entryPost: e.target.value })}></textarea>
                                    </Form.Group>

                                    <Form.Group controlId="formGridEntryAuthor">
                                        <Form.Label>Created By:</Form.Label>
                                        <Form.Control type="text" placeholder="e.g. Shae C."
                                            value={this.state.entryAuthor} onChange={e => this.setState({ entryAuthor: e.target.value })} />
                                    </Form.Group>

                                    {/* i dont need a checkbox now but maybe something to think about later? */}

                                    {/* <Form.Group id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group> */}
                                    <Container id="shav-form-btns">
                                        <Button variant="dark" type="button" size="md" id="shav-form-btn"
                                            onClick={e => this.onSubmit()}>
                                            Submit
                                        </Button>{' '}
                                        <Button href="/" variant="dark" size="md">
                                            Cancel
                                        </Button>
                                    </Container>

                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


                {/* footer section */}
                <Container className="shav-footer">
                    <Row>
                        <Col>
                            <Navbar expand="lg" sticky="bottom">
                                <Navbar.Brand href="#home">
                                    Bloggerina&#8482;
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto" id="shav-nav">
                                        <Nav.Link href="#home">Home</Nav.Link>
                                        <Nav.Link href="#link">Link</Nav.Link>
                                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                    <Form inline>
                                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                        <Button variant="outline-success">Search</Button>
                                    </Form>
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                    </Row>
                </Container>
            </Container>


        </>
    }


    onSubmit() {
        var onSaveComplete = () => this.setState({ redirect: true })

        // if (this.state.entryId) {
        //     this.blogEntryRepository.updateBlogEntry(this.state.entryId, this.state)
        //         .then(onSaveComplete);
        // } else {
        this.blogEntryRepository.addBlogEntry(this.state.entryId, this.state)
            .then(onSaveComplete);
    }
}
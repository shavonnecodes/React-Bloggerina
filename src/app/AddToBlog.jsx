import React from 'react';
import { BlogEntryRepository } from '../api/BlogEntryRepository';
import { Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

export class AddToBlog extends React.Component {

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
                    <Col>
                        <Image src="https://i.imgur.com/Dhj3wTX.jpg" id="shav-image" fluid />
                    </Col>
                    <Col>
                        <Card id="shav-edit-card">
                            <Card.Body id="shav-edit-card-body">
                                <Form>
                                    <Form.Group controlId="formGridEntryDate">
                                        <Form.Label>Creation Date</Form.Label>
                                        <Form.Control type="text" placeholder="e.g. Jan 7. 2020"
                                            value={this.state.entryDate} onChange={e => this.setState({ entryDate: e.target.value })} />
                                    </Form.Group>

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
                                </Form>
                            </Card.Body>
                        </Card>
                        <Container id="shav-form-btns">
                            <Button variant="outline-dark" type="button" size="md" id="shav-form-btn"
                                onClick={e => this.onSubmit()}>
                                Submit
                            </Button>{' '}
                            <Button href="/" variant="outline-dark" size="md">
                                Cancel
                            </Button>
                        </Container>
                    </Col>
                </Row>
            </Container>


        </>
    }


    onSubmit() {
        var onSaveComplete = () => this.setState({ redirect: true })

        this.blogEntryRepository.addBlogEntry(this.state.entryId, this.state)
            .then(onSaveComplete);
    }
}
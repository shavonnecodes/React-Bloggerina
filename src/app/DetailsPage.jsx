import React from 'react';
import { BlogEntryRepository } from '../api/BlogEntryRepository';
import { Redirect } from 'react-router-dom';
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

export class DetailsPage extends React.Component {

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
                    <Col lg="6">
                        <Image src="https://i.imgur.com/Dhj3wTX.jpg" id="shav-image" fluid />
                    </Col>
                    <Col lg="6">
                        <Card id="shav-detail-card">
                            <Card.Header as="h2">{this.state.entryTitle}</Card.Header>
                            <Card.Body id="shav-post">
                                <Card.Title>Created By: {this.state.entryAuthor}</Card.Title>
                                <Card.Text>
                                    {this.state.entryPost}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">{this.state.entryDate}</Card.Footer>
                        </Card>
                        <Container id="shav-form-btns">
                            <Button href={`/update/${this.state.entryId}`} variant="outline-dark" size="md">
                                Edit Blog Entry
                            </Button>{' '}
                            <Button variant="outline-dark" type="button" size="md" id="shav-form-btn"
                                onClick={e => this.delete()}>
                                Delete Blog Entry
                            </Button>
                        </Container>
                    </Col>
                </Row>

                <Container id="shav-detail-btn-container">
                    <Row>
                        <Col>
                            <Button href="/edit" variant="outline-dark" size="md" id="shav-detail-btn">
                                Return to Edit Page
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Container>


        </>
    }

    componentDidMount() {
        let entryId = this.props.match.params.entryId;
        this.blogEntryRepository.getBlogEntryById(entryId)
            .then(blogEntry => this.setState(blogEntry));
    }

    delete() {
        var onDeleteComplete = () => this.setState({ redirect: true })

        alert("Are you want to delete?");

        this.blogEntryRepository.deleteBlogEntry(this.state.entryId, this.state)
            .then(onDeleteComplete);
    }
}
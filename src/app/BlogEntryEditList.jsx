import React from 'react';
import { BlogEntryRepository } from '../api/BlogEntryRepository';
import { Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';


export class BlogEntryEditList extends React.Component {

    blogEntryRepository = new BlogEntryRepository();

    state = {
        entries: []
    };

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
                                        <Nav.Link href="#">Edit</Nav.Link>
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

                <Container id="shav-edit-container" fluid>
                    <Row>
                        <Col>
                            <Table responsive id="shav-edit-table">
                                <thead variant="dark">
                                    <tr>
                                        <th>Entry Id</th>
                                        <th>Title</th>
                                        <th>Author</th>
                                        <th>Date</th>
                                        <th>Post</th>
                                        <th>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.entries.map(blogEntry =>
                                        <tr key={blogEntry.entryId}>
                                            <td>{blogEntry.entryId}</td>
                                            <td>{blogEntry.entryTitle}</td>
                                            <td>{blogEntry.entryAuthor}</td>
                                            <td>{blogEntry.entryDate}</td>
                                            <td>{blogEntry.entryPost}</td>
                                            <td>
                                                <Button href={`/entries/${blogEntry.entryId}`} variant="outline-dark btn-sm">Edit</Button>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
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
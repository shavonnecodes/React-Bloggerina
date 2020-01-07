import React from 'react';
import { BlogEntryList } from './BlogEntryList';
import { BlogEntryRepository } from '../api/BlogEntryRepository';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export class Homepage extends React.Component {

    blogEntryRepository = new BlogEntryRepository();

    state = {
        entries: []
    };

    render() {
        return <>
            <Container fluid="true">
                <Row className="d-flex justify-content-center align-items-center shav-header">
                    <Col xs={5}>
                        <img src="https://i.imgur.com/zisdp99.png"></img>
                    </Col>
                    <Col>
                        <Link to="#" className="shav-header-link">Link</Link>
                    </Col>
                    <Col>
                        <Link to="#" className="shav-header-link">Link</Link>
                    </Col>
                    <Col>
                        <Link to="#" className="shav-header-link">Link</Link>
                    </Col>
                    <Col>
                        <Link to="#" className="shav-header-link">Link</Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <BlogEntryList entries={this.state.entries} />
                    </Col>
                </Row>
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
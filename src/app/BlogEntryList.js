import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const BlogEntryList = props => {

    return <>

        <CardDeck bsPrefix="shav-carddeck">
            {props.entries.map(blogEntry =>
                <Card id="shav-card" border="light">
                    <Card.Header as="h2">{blogEntry.entryTitle}</Card.Header>
                    <Card.Body id="shav-post">
                        <Card.Title>{blogEntry.entryAuthor}</Card.Title>
                        <Card.Text>
                            <div id="inner">
                                {blogEntry.entryPost}
                            </div>
                        </Card.Text>
                        {/* think about using this as a "read more" button */}
                        <Button variant="dark btn-sm" disabled>Read More</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">{blogEntry.entryDate}</Card.Footer>
                </Card>
            )}
        </CardDeck>
    </>
}
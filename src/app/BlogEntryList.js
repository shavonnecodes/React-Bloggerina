import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';

export const BlogEntryList = props => {

    return <>

        <CardDeck>
            {props.entries.map(blogEntry =>
                <Card className="shav-card">
                    <Card.Header as="h2">{blogEntry.entryTitle}</Card.Header>
                    <Card.Body>
                        <Card.Title>{blogEntry.entryAuthor}</Card.Title>
                        <Card.Text>
                            {blogEntry.entryPost}
                        </Card.Text>
                        {/* think about using this as a "read more" button */}
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">{blogEntry.entryDate}</Card.Footer>
                </Card>
            )}
        </CardDeck>
    </>
}
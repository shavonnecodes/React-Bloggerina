import React from 'react';
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

export const BlogEntryList = props => {

    return <>

        <CardDeck bsPrefix="shav-carddeck">
            {props.entries.map(blogEntry =>
                <Card key={blogEntry.entryId} id="shav-card" border="light">
                    <Card.Header as="h2">
                        <NavLink to={`/entries/${blogEntry.entryId}`} id="shav-link">
                            {blogEntry.entryTitle}
                        </NavLink>
                    </Card.Header>
                    <Card.Body id="shav-post">
                        <Card.Title>Created By: {blogEntry.entryAuthor}</Card.Title>
                        <Card.Text>
                            {blogEntry.entryPost}
                        </Card.Text>
                        {/* think about using this as a "read more" button */}
                    </Card.Body>
                    <Card.Footer className="text-muted">{blogEntry.entryDate}</Card.Footer>
                </Card>
            )}
        </CardDeck>
    </>
}


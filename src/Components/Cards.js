import React from 'react'
import { Card, Button } from 'react-bootstrap'
import CardAccordion from './CardAccordion'

function Cards(props) {
    const { apiCallData } = props
    return (
        <>
            <Card style={{ width: '18rem', margin: 'auto', marginTop: '50px' }}>
                <Card.Header>
                    <h4>{apiCallData.title}</h4>
                </Card.Header>

                {apiCallData.media_type === 'image' ? (
                    <Card.Img variant="top" src={apiCallData.hdurl} alt={apiCallData.title} />
                ) : ''}

                <Card.Body>
                    <Card.Title>{apiCallData.date}</Card.Title>
                    <CardAccordion dataExplination={apiCallData.explanation} />
                </Card.Body>

                {apiCallData.copyright ? (
                    <Card.Footer>
                        &copy; {apiCallData.copyright}
                    </Card.Footer>
                ) : (
                    <Card.Footer>
                        &copy; NASA
                    </Card.Footer>
                )}

            </Card>
        </>
    )
}

export default Cards
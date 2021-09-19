import React from 'react'
import './CardAccordion.css'
import { Accordion } from 'react-bootstrap'

function CardAccordion(props) {
    const { dataExplination } = props

    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Explination</Accordion.Header>
                <Accordion.Body>
                    {dataExplination}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default CardAccordion

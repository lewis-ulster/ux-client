import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default function Spin() {
    return (
            <Container>
                <Row>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
                </Row>
            </Container>
    )
}

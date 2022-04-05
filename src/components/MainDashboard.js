import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


function MainDashboard(props) {

    return (

        <Row xs={1} md={2}  >
            {props.nomistanze.map((nomestanza, id) => (
                <Col>
                    <Card bg="light" border="success" style={{ marginLeft: 100, marginRight: 100, marginTop: 95, marginBottom: 20 }}>
                        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                        <Card.Body>
                            <Card.Title><h2>{nomestanza}</h2></Card.Title>
                            <Card.Text>
                                Numero pazienti attivi: <b>{(props.pazienti_attivi[id]).length}</b>
                            </Card.Text>
                            <Button onClick={event => window.location.href = '/dettagliostanza/' + nomestanza} variant="success">Visualizza dettagli stanza
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>

    )
}

export default MainDashboard
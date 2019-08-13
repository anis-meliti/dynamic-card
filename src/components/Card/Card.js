import React, { Component } from 'react'
// ********Style*********
import './Card.css'
import { Container, Row, Col, FormLabel } from 'react-bootstrap'
// *******image*********
import chip from '../assets/img/chip.jpg'


class Card extends Component {
    render() {
        return (
            <Container className="main-cont">
                <Row>
                    <Col sm={{ span: 5, offset: 7 }}>
                        CARD HOLDER
                    </Col>
                </Row>
                <Row>
                    <Col className="chip-cont">
                        <img src={chip} alt="chip" />
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <FormLabel className="number">{this.props.number} </FormLabel>
                    </Col>
                </Row>
                <Row>
                    <Col className="holder">
                        <FormLabel > {this.props.holder} </FormLabel>
                    </Col>
                    <Col >
                        <FormLabel className="val"> MM/YY </FormLabel>
                    </Col>
                </Row>
                <Row>
                    <Col sm={{ offset: 4 }}>
                        <FormLabel className="val">VALID THRU</FormLabel>
                    </Col>
                    <Col>
                        <FormLabel >{this.props.validity}</FormLabel>
                    </Col>
                </Row>



            </Container>
        )
    }
}

export default Card

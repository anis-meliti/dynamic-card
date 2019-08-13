import React, { Component } from 'react'
import { Container, Col, Row, FormControl } from 'react-bootstrap';

class Formu extends Component {
    constructor(props) {
        super();

    }
    state = {
        number: '',
        holder: '',
        Validity: ''
    }

    onChange = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    render() {
        return (
            <Container>
                <Col>
                    <Row>
                        <FormControl type="text" placeholder="Card Number" id='number' onChange={this.onChange} />
                    </Row>
                    <Row>
                        <FormControl type="text" placeholder="Card Holder" id='holder' onChange={this.onChange} />
                    </Row>
                    <Row>
                        <FormControl type="text" placeholder="Validity thru" id='validity' onChange={this.onChange} />
                    </Row>
                </Col>
            </Container>
        )
    }
}

export default Formu

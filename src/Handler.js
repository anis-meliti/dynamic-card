import React, { Component } from 'react'
// ******style*************
import { Container, Col, Row, FormControl } from 'react-bootstrap'
// *********Components***********
import Card from './components/Card/Card'


class Holder extends Component {
    state = {
        number: '',
        holder: '',
        Validity: '',
        isInvalNumber: false,
        isValidNumber: true,
        isInvalVal: false,
        isValidVal: true

    }


    onChange = (event) => {
        let valRegEx = /^(((0)[0-9])|((1)[0-2]))(\/)\d{2}$/;
        // eslint-disable-next-line default-case
        switch (event.target.id) {
            case 'number': (event.target.value.length > 16) ? this.setState({ isInvalNumber: true, isValidNumber: false }) : this.setState({ number: event.target.value });
                break;
            case 'Validity': !(valRegEx.test(event.target.value)) ? this.setState({ isInvalVal: true, isValidVal: false }) : this.setState({ Validity: event.target.value });
                break;
            case 'holder': this.setState({ holder: event.target.value.toUpperCase() })
                break
        }

    }
    render() {
        return (
            <Container>
                <Row>
                    <Col >
                        <Card number={this.state.number} holder={this.state.holder} validity={this.state.Validity} />
                    </Col>
                    <Col>
                        <Container>
                            <Col>
                                <Row>
                                    <FormControl type="number" placeholder="Card Number" id='number' isValid={this.state.isValidNumber} isInvalid={this.state.isInvalNumber} onChange={this.onChange} />
                                </Row>
                                <Row>
                                    <FormControl type="text" placeholder="Card Holder" id='holder' maxLength={20} onChange={this.onChange} />
                                </Row>
                                <Row>
                                    <FormControl type="text" placeholder="Validity thru" id='Validity' isValid={this.state.isValidVal} isInvalid={this.state.isInvalVal} maxLength={5} onChange={this.onChange} />
                                </Row>
                            </Col>
                        </Container>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Holder

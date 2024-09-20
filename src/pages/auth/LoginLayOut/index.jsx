import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import "./index.scss"

const LoginLayout = ({ children }) => {
    return (
        <Container fluid="xxl" className='container-layout'>
            <Row>
                <Col xs={12} md={6} lg={8} >{children}</Col>
                <Col className={"d-none d-md-block"} xs={'none'} md={6} lg={4}>
                    <Image className='avatar-right' src="/images/login-image.png" rounded />
                </Col>
            </Row>
        </Container>
    )
}


export default LoginLayout;
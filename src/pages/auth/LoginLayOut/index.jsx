import React from 'react'
import { Navigate } from 'react-router-dom';
import { Col, Container, Image, Row } from 'react-bootstrap';
import "./index.scss"
import { useSelector } from 'react-redux';

const LoginLayout = ({ children }) => {
    const { user = null } = useSelector(state => state?.auth);
    
    const LoginComponents = () => (
        <Container fluid="xs" className='container-layout'>
            <Row className="w-100">
                <Col xs={12} md={6} lg={8} >{children}</Col>
                <Col className={"d-none d-md-block"} xs={'none'} md={6} lg={4}>
                    <Image className='avatar-right' src="/images/login-image.png" rounded />
                </Col>
            </Row>
        </Container>
    )

    return (<>{ user ===null ? <LoginComponents /> : <Navigate to={"/home"} />} </>)
}


export default LoginLayout;
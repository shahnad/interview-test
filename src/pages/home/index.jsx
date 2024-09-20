import React from 'react'
import Header from './header'
import { Col, Container, Row } from 'react-bootstrap'
import "./index.scss"

const Home = () => {
    return (
        <div className='px-5 home-container'>
            <Header />
            <Container fluid={"xxl"} className="p-0 my-4">
                <Row>
                    <Col><div className='w-100 h-100 border-2 border-top border-primary'></div></Col>
                    <Col><h1 className='text-center  welcome-text text-primary'>WELCOME</h1></Col>
                    <Col><div className='w-100 h-100 border-2 border-bottom border-primary'></div></Col>
                </Row>
            </Container>
        </div>
    )
}
export default React.memo(Home)
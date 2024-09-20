import React, { Suspense } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./index.scss"

const Header = React.lazy(() => import('./header'));
const Slides = React.lazy(() => import('./slides'));
const Countries = React.lazy(() => import('./countries'));

const Home = () => {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <div className='home-container w-100'>
                    <Header />
                    <Container fluid={"xs"} className="p-0 my-5 w-100">
                        <Row className='w-100'>
                            <Col><div className='w-100 h-100 border-2 border-top border-primary'></div></Col>
                            <Col><h1 className='text-center  welcome-text text-primary'>WELCOME</h1></Col>
                            <Col><div className='w-100 h-100 border-2 border-bottom border-primary'></div></Col>
                        </Row>
                    </Container>
                    <Slides />
                    <Countries />
                </div>
            </Suspense>
        </>
    )
}
export default React.memo(Home)
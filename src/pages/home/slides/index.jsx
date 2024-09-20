import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SlickCarousal } from '../../../components/carousal';

const randomImages = [
    { id: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjphUYQBzxsOUSCmXX7BfAov3z-qPkQoycIA&s" },
    { id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQrdT6fJeCpWp4Nf7qjN0ux9CGdQ7SZ5hofw&s" },
    { id: 3, image: "https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg" },
    { id: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS88H-zLGf3tAz4lupAZWuvf_1ppXBmtTO1Q&s" },
];

const Slides = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        adaptiveHeight: true,
        fade: true
    };

    const slides2 = [
        { id: 1, image: "https://plus.unsplash.com/premium_photo-1670226145723-d3b3e23079f7?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 2, image: "https://images.unsplash.com/photo-1669115380104-886eeab91820?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
    ]

    return (
        <Container fluid={"xs"} className="p-0 m-0 w-100 my-4">
            <Row className='flex flex-row justify-content-between flex-xs-row-reverse'>
                <Col xs={12} sm={12} lg={8} className='slide-col p-0 m-0'>
                    <div className='p-3'>
                        <div className='border border-2 border-tertiary p-0 m-0'>
                            <SlickCarousal slides={randomImages} />
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} lg={4} className=' slide-col p-0 m-0  '>
                    <div className=''>
                        <div className='border border-2 border-tertiary p-0 m-0'>
                            <SlickCarousal slides={slides2} settings={settings} />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Slides;
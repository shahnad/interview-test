import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SlickCarousal } from '../../../components/carousal';

const randomImages = [
    { id: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjphUYQBzxsOUSCmXX7BfAov3z-qPkQoycIA&s" },
    { id: 2, image: "https://img.freepik.com/free-photo/free-photo-background-summer-travel-beach-waves-surfing-blue-evening-sky-with-mountains_1340-23548.jpg?t=st=1726848115~exp=1726851715~hmac=6950ef8288a237ed2d6d123a89c0069a99c6ceec9d5e56eb8dddff21ff32ec79&w=1380" },
    { id: 3, image: "https://img.freepik.com/free-photo/young-asia-girl-wear-medical-face-mask-use-mobile-phone-with-dressed-casual-cloth-self-isolation-social-distancing-quarantine-corona-virus-panoramic-banner-blue-background-with-copy-space_7861-2703.jpg?t=st=1726848151~exp=1726851751~hmac=5bab3b6c2d5ff1bef2bfa9e5f319a3f06384decc14891e519f133f1352eda5b3&w=1380" },
    { id: 4, image: "https://img.freepik.com/free-photo/young-asia-girl-wear-medical-face-mask-use-mobile-phone-with-dressed-casual-cloth-self-isolation-social-distancing-quarantine-corona-virus-panoramic-banner-blue-background-with-copy-space_7861-2703.jpg?t=st=1726848151~exp=1726851751~hmac=5bab3b6c2d5ff1bef2bfa9e5f319a3f06384decc14891e519f133f1352eda5b3&w=1380" },
    { id: 5, image: "https://img.freepik.com/free-photo/mountain-landscape-day-time_23-2150724875.jpg?t=st=1726848197~exp=1726851797~hmac=cda0d36c8ffe90876fa81c6b4458498eed84977f06799cfc2729a04b372c8321&w=1480" },
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
            <Row className=' flex flex-row justify-content-between'>
                <Col xs={12} sm={12} lg={8} className='border border-2 border-tertiary mh-20'>
                    <SlickCarousal slides={randomImages} />
                </Col>
                <Col xs={12} sm={12} lg={3} className='border border-2 border-tertiary mh-20'>
                    <SlickCarousal slides={slides2} settings={settings} />
                </Col>
            </Row>
        </Container>
    )
}

export default Slides;
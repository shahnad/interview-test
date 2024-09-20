import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SlickCarousal } from '../../../components/carousal';

const randomImages = [
    { id: 1, image: "https://www.shutterstock.com/shutterstock/photos/2476723479/display_1500/stock-photo-africa-inscription-in-shroud-african-continent-nature-of-africa-journey-through-shroud-safari-2476723479.jpg" },
    { id: 2, image: "https://www.shutterstock.com/shutterstock/photos/2470678123/display_1500/stock-photo-world-map-showing-numerical-data-across-continents-blue-and-black-background-emphasizing-economic-2470678123.jpg" },
    { id: 3, image: "https://www.shutterstock.com/shutterstock/photos/2412643141/display_1500/stock-photo-africa-continent-shaped-from-golden-glitter-on-a-black-background-2412643141.jpg" },
    { id: 4, image: "https://www.shutterstock.com/shutterstock/photos/2480961741/display_1500/stock-vector-futuristic-world-map-silhouette-simple-world-map-in-good-quality-digital-map-template-for-2480961741.jpg" },
    { id: 5, image: "https://www.shutterstock.com/shutterstock/photos/2427542713/display_1500/stock-vector-the-world-map-with-cartoon-animals-for-kids-nature-discovery-and-continent-name-ocean-name-2427542713.jpg" },
];

const Slides = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        adaptiveHeight: true,
        fade :true
    };
    
    return (
        <Container fluid={"xs"} className="p-0 m-0 w-100 my-4">
            <Row>
                <Col xs={12} sm={12} lg={9} >
                    <SlickCarousal slides={randomImages} />
                </Col>
                <Col xs={12} sm={12} lg={3} >
                    <SlickCarousal slides={randomImages} settings={settings} />
                </Col>
            </Row>
        </Container>
    )
}

export default Slides;
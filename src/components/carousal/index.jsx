import React from 'react'

import { Image } from 'react-bootstrap';
import Slider from 'react-slick';

const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    
};

export const SlickCarousal = ({ settings = defaultSettings, slides = [] }) => {
    return (
        <div className='w-100'>
            {!!slides?.length ? <Slider {...settings} >
                {!!slides?.length && slides?.map(({ id, image }) =>
                    <div key={id} className='w-100'>
                        <Image  style={{ minHeight: 400, maxHeight: 400, height: 400, objectFit: 'contain' }} className='w-100 h-100' src={image} />
                    </div>)}
            </Slider> : <div>
                No slides are present
            </div>
            }
        </div>
    )
}

import React from 'react'
import { Image } from 'react-bootstrap';
import Slider from 'react-slick';
import  "./index.scss"

const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    adaptiveHeight: true,
   
    

};

export const SlickCarousal = ({ settings = defaultSettings, slides = [] }) => {
    return (
        <div className='w-100 carousal'>
            {!!slides?.length ? <Slider {...settings} >
                {!!slides?.length && slides?.map(({ id, image }) =>
                    <div key={id} className='w-100'>
                        <Image fluid className='carousal-image w-100 h-100' src={image} />
                    </div>)}
            </Slider> : <div>
                No slides are present
            </div>
            }
        </div>
    )
}

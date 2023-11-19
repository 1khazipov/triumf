import {Swiper,  SwiperSlide} from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import image1 from "../../static/location/image1.jpg";
import image2 from "../../static/location/image2.jpg";
import image3 from "../../static/location/image3.jpg";
import image4 from "../../static/location/image4.jpg";
import image5 from "../../static/location/image5.jpg";
import React from "react";

const LocationGallery:React.FC = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            navigation={{ nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",}}
            pagination={{ clickable: true}}
            loop={true}
            slidesPerView={1}
            className="swiper_how_to_fond"

        >
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>


            <SwiperSlide>
                <img className="location_image" src={image1} />
            </SwiperSlide>
            <SwiperSlide>
                <img className="location_image" src={image2} />
            </SwiperSlide>
            <SwiperSlide>
                <img className="location_image" src={image3} />
            </SwiperSlide>
            <SwiperSlide>
                <img className="location_image" src={image4} />
            </SwiperSlide>
            <SwiperSlide>
                <img className="location_image" src={image5} />
            </SwiperSlide>
        </Swiper>
    )
}

export default LocationGallery;
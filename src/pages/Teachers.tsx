import React from 'react';
import {Swiper, SwiperProps, SwiperRef, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "../styles/Teachers.css"

import {teachers} from "../constants/teachersList"


interface TeachersProps {}

export const Teachers: React.FC<TeachersProps> = ({ }) => {
    function showInfo(index: number) {
        console.log(index)
    }

    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={3}
            navigation={{ nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",}}
            pagination={{ clickable: true }}
            onSwiper={(swiper: typeof Swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            loop={true}
            style={{ marginTop: 50}}
        >
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>

            {teachers.map((teacherContent, index) => (
                <SwiperSlide key={index}>
                    <button onClick={(e) => showInfo(index)} style={{cursor: 'pointer'}}>
                        <img src={teacherContent.photo}/>
                    </button>
                </SwiperSlide>
                ))}

            ...
        </Swiper>
    );
};

export default Teachers;

import React, {useState} from 'react';
import {Swiper,  SwiperSlide} from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import "../styles/teachers.css"

import {teachers} from "../constants/teachersList"


interface TeachersProps {}

export const Teachers: React.FC<TeachersProps> = () => {
    const [currentTeacher, setCurrentTeacher] = useState(teachers[1]);

    return (
        <div>
            <div className="page_name">
                Преподаватели
            </div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                // slidesPerView={3}
                navigation={{ nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",}}
                pagination={{ clickable: true }}
                loop={true}
                style={{ marginTop: 80}}
                onSwiper={(swiper: typeof Swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                        // width: 640,
                        slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                        // width: 768,
                        slidesPerView: 3,
                    },
                }}
            >
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>

                {teachers.map((teacherContent, index) => (
                    <SwiperSlide key={index}>
                        <button className="button_to_show_info_teacher" onClick={(e) => {
                            setCurrentTeacher(teachers[index]);

                        }}>
                            <img className="teacher_image" src={teacherContent.photo}/>
                        </button>
                    </SwiperSlide>
                    ))}
            </Swiper>

            <div className="info_about_teacher">
                <div className="teacher_name">
                    {currentTeacher.name}
                </div>
                <div className="teacher_special">
                    {currentTeacher.special}
                </div>
                <div className="teacher_description">
                    {currentTeacher.description}
                </div>
            </div>
        </div>
    );
};

export default Teachers;

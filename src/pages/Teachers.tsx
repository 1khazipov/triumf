import React, {useState} from 'react';
import {Swiper,  SwiperSlide} from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import "../styles/Teachers.css"

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
                slidesPerView={3}
                navigation={{ nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",}}
                pagination={{ clickable: true }}
                loop={true}
                style={{ marginTop: 80}}
                onSwiper={(swiper: typeof Swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
            >
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>

                {teachers.map((teacherContent, index) => (
                    <SwiperSlide key={index}>
                        <button onClick={(e) => {
                            setCurrentTeacher(teachers[index]);

                        }}>
                            <img src={teacherContent.photo}/>
                        </button>
                    </SwiperSlide>
                    ))}
            </Swiper>

            <div className="info_about_teacher">
                <p> <strong>Имя:</strong> {currentTeacher.name}</p>
                <p> <strong>Специальность:</strong> {currentTeacher.special}</p>
                <p> <strong>Деятельность:</strong> {currentTeacher.description}</p>
            </div>
        </div>
    );
};

export default Teachers;

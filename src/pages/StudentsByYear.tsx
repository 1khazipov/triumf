import React from 'react';
import {useParams} from "react-router-dom";

import {studentsMap} from "../constants/studentsList";
import {Swiper,  SwiperSlide} from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';

import "../styles/students-by-year.css"

interface StudentsByYearProps {}

export const StudentsByYear: React.FC<StudentsByYearProps> = ({ }) => {
    let { studentYear } = useParams();
    if (studentYear === undefined) studentYear = '2021';
    return (
        <div>
            <div className="page_name">
                Выпускники {studentYear} года
            </div>

            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination]}
                navigation={{ nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",}}
                pagination={{ clickable: true }}
                loop={true}
                style={{ marginTop: 80}}
                onSwiper={(swiper: typeof Swiper) => console.log(swiper)}
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                        width: 640,
                        slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                        width: 768,
                        slidesPerView: 2,
                    },
                }}

            >
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>

                {studentsMap.get(studentYear).map((studentContent: { photo: string | undefined; name: string | undefined;
                    special: string; study: string}, index: React.Key | null | undefined) => (
                    <SwiperSlide key={index} style={{  flexFlow: "column"}}>
                        <div className="student_image_div">
                            <img className="student_image"src={studentContent.photo}/>
                        </div>
                        <div className="info_about_student">
                            <div className="student_name">
                                {studentContent.name}
                            </div>
                            <div className="student_special">
                                {studentContent.special}
                            </div>
                            <div className="student_study">
                                {studentContent.study}
                            </div>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default StudentsByYear;
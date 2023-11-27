import React, {useState} from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import "./teachers.css"

import {teachers} from "../../constants/teachersList"
import TeachersSwiper from "./TeachersSwiper";

interface TeachersProps {}

export const Teachers: React.FC<TeachersProps> = () => {
    return (
        <div>
            <div className="page_name">
                Преподаватели
            </div>

            <TeachersSwiper />
        </div>
    );
};

export default Teachers;

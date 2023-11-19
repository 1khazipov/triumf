import React from 'react';
import {news} from "../../constants/newList";
import {Link} from "react-router-dom";
import "./home.css"

import students2021_all from "../../static/students/2021/students2021_all.webp";
import students2020_all from "../../static/students/2020/students2020_all.webp";
import {Swiper,  SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import {homePhoto, homeReviews} from "../../constants/homeMaterials";
import "swiper/css/autoplay"
import Schedule from "../schedule/Schedule";
import ScheduleTabDropdown from "../../components/ScheduleTabDropdown";
import HomeGallery from "./HomeGallery";
import NewsHome from "./NewsHome";
import ReviewsHome from "./ReviewsHome";
interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
    return (
        <div>
            <div className="page_name" style={{marginBottom: 30}}>
                Главная
            </div>
            <HomeGallery />
            <div className="page_content">
                <NewsHome />
                <ReviewsHome />

                <div className="title_home" style={{ marginBottom: 10}}>
                    <div style={{ fontSize: '1.8rem', marginLeft: 20}}>
                        Расписание
                    </div>
                </div>
                <ScheduleTabDropdown />
            </div>
        </div>
    );
};

export default Home;

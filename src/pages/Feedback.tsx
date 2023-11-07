import React from 'react';
import {Swiper,  SwiperSlide} from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import {reviews} from "../constants/reviewsList";

import "../styles/feedback.css"

interface FeedbackProps {}

export const Feedback: React.FC<FeedbackProps> = ({ }) => {
    return (
        <div className="page_content">
            <div className="page_name">
                Отзывы
            </div>

            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination]}
                navigation={{ nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",}}
                pagination={{ clickable: true }}
                loop={true}
                style={{ marginTop: 80, display: "flex", alignItems: "center", justifyContent: "center"}}
                onSwiper={(swiper: typeof Swiper) => console.log(swiper)}
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                        width: 640,
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

                {reviews.map((reviewContent, index) => (
                    <SwiperSlide key={index}>
                        <div className="review" >
                            <div className="review_header" >
                                <div style={{ width: 50, height: 50}}>
                                    <img className="review_image" src={reviewContent.photo} />
                                </div>
                                <div style={{marginLeft: 10}}>
                                    <div style={{ fontWeight: 600, marginBottom: 2, fontSize: '1.3rem'}}>
                                        {reviewContent.name}
                                    </div>
                                    <div style={{ color: "gray"}}>
                                        {reviewContent.date}
                                    </div>
                                </div>
                            </div>

                            <div className="review_content">
                                {reviewContent.content}
                            </div>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Feedback;

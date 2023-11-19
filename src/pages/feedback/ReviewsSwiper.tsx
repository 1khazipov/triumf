import {Swiper,  SwiperSlide} from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import {reviews} from "../../constants/reviewsList";
import React from "react";

interface SwiperProps {
}
const ReviewsSwiper:React.FC<SwiperProps> = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            navigation={{ nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",}}
            pagination={{ clickable: true }}
            loop={true}
            style={{ marginTop: 80, display: "flex", alignItems: "center", justifyContent: "center"}}
            breakpoints={{
                600: {
                    slidesPerView: 1,
                },
                900: {
                    slidesPerView: 2,
                },
                1101: {
                    slidesPerView: 3,
                }
            }}

        >
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>

            {reviews.map((reviewContent, index) => (
                <SwiperSlide key={index} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
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
    )
}

export default ReviewsSwiper;
import React from 'react';
import YandexMap from "../components/YandexMap";
import {Swiper,  SwiperSlide} from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import image1 from "../static/location/image1.jpg"
import image2 from "../static/location/image2.jpg"
import image3 from "../static/location/image3.jpg"
import image4 from "../static/location/image4.jpg"
import image5 from "../static/location/image5.jpg"

import "../styles/how-to-find.css"
// import 'swiper/css';


interface HowToFindProps {}

export const HowToFind: React.FC<HowToFindProps> = ({ }) => {
    return (
        <div className="page_content">
            <div className="page_name">
                Как нас найти
            </div>
            <div>
                <YandexMap />
            </div>

            <div className="swiper_and_info">
                {/*<div className="swipers">*/}
                    <div className="swiper_div">
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination]}
                            navigation={{ nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev",}}
                            pagination={{ clickable: true}}
                            loop={true}
                            onSlideChange={() => console.log('slide change')}
                            slidesPerView={1}

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
                    </div>

                    {/*<div className="swiper_gallery">*/}
                    {/*    <Swiper*/}
                    {/*        // install Swiper modules*/}
                    {/*        modules={[Navigation, Pagination]}*/}
                    {/*        onSwiper={(swiper: typeof Swiper) => console.log(swiper)}*/}
                    {/*        slidesPerView={4}*/}

                    {/*    >*/}


                    {/*        <SwiperSlide>*/}
                    {/*            <img className="gallery_image" src={image1} />*/}
                    {/*        </SwiperSlide>*/}
                    {/*        <SwiperSlide>*/}
                    {/*            <img className="gallery_image" src={image2} />*/}
                    {/*        </SwiperSlide>*/}
                    {/*        <SwiperSlide>*/}
                    {/*            <img className="gallery_image" src={image3} />*/}
                    {/*        </SwiperSlide>*/}
                    {/*        <SwiperSlide>*/}
                    {/*            <img className="gallery_image" src={image4} />*/}
                    {/*        </SwiperSlide>*/}
                    {/*        <SwiperSlide>*/}
                    {/*            <img className="gallery_image" src={image5} />*/}
                    {/*        </SwiperSlide>*/}
                    {/*    </Swiper>*/}
                    {/*</div>*/}
                {/*</div>*/}

                <div className="info_location">
                    <div className="title_info_location">
                        адрес:
                    </div>
                    <div className="desc_info_location">
                        <a className="link_location" href="https://yandex.ru/maps/-/CDaDiQnM">г. Казань, ул. Жуковского, д. 8, офис 313</a>
                    </div>

                    <div className="title_info_location">
                        телефоны:
                    </div>
                    <div className="desc_info_location">
                        <a className="link_location" href="tel:+78432589759">+7 (843) 258-97-59, </a>
                        <a className="link_location" href="tel:+79600489759">+7 (960) 048-97-59</a>
                    </div>

                    <div className="title_info_location">
                        e-mail:
                    </div>
                    <div className="desc_info_location">
                        <a className="link_location" href="mailto:info@tutor-kzn.ru">info@tutor-kzn.ru</a>
                    </div>

                    <div className="title_info_location">
                        социальные сети:
                    </div>
                    <div className="desc_info_location">
                        <a className="link_location" href="https://vk.com/kazantriumf" >vk.com/kazantriumf</a>
                        <a className="link_location" href="https://www.instagram.com/_triumf_/">@_triumf_</a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HowToFind;

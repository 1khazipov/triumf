import React from "react";
import {useParams} from "react-router-dom";
import postsContent from "../../constants/postsContentList";
import {Swiper,  SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination, Keyboard} from 'swiper/modules';
import "./post.css"

interface PostProps {}

export const Post: React.FC<PostProps> = () => {
    let { postId } = useParams();
    if (postId === undefined) postId = '1';
    const post = postsContent[+postId - 1];
    return (
        <div className="page_content">
            <div className="page_name">
                {post.title}
            </div>

            {post.images.length === 0 &&
            <div className="image_container">
                <iframe width="560" height="315" src={post.video}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
            </div>}

            {post.images.length === 1 &&
                <div className="image_container">
                    <img src={post.images[0]} alt={post.title} style={{objectFit: "cover"}}/>
                </div>}

            {post.images.length > 1 &&
                <Swiper
                    modules={[Navigation, Pagination, Autoplay, Keyboard]}
                    navigation={{ nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",}}
                    keyboard={{ enabled: true }}
                    pagination={{ clickable: true }}
                    loop={true}
                    style={{ marginTop: 80}}
                    slidesPerView={1}
                    autoplay={{
                        delay: 1200,
                        disableOnInteraction: false
                    }}

                >
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                    {post.images.map((image, index) => (
                        <SwiperSlide key={index} style={{  flexFlow: "column", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <img src={image} alt={post.title}/>
                        </SwiperSlide>
                    ))}
                </Swiper>}

            <div className="post_content">
                {post.content}
            </div>
        </div>
    )
}

export default Post
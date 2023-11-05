import React from 'react';

import "../styles/news.css"
import {Link} from "react-router-dom";
import {news} from "../constants/newList";


interface NewsProps {}

export const News: React.FC<NewsProps> = ({ }) => {

    return (
        <div>
            <div className="page_name">
                Новости
            </div>

            <div className="news">

                {news.map((newsContent, index) => (

                    <Link to={newsContent.link} className="news_div">
                    <div className="news_photo_div">
                        <img className="news_photo" src={newsContent.image}/>
                    </div>
                    <div className="news_info">
                        <div className="news_date">
                            {newsContent.date}
                        </div>
                        <div className="news_title">
                            {newsContent.title}
                        </div>
                        <div className="news_brief">
                            {newsContent.brief}
                        </div>
                    </div>
                </Link> ))}
            </div>
        </div>
    );
};

export default News;

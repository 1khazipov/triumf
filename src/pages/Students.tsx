import React from 'react';
import {Link} from "react-router-dom";

import "../styles/students.css"

import students2021_all from "../static/students/2021/students2021_all.webp"
import students2020_all from "../static/students/2020/students2020_all.webp"
import students2019_all from "../static/students/2019/students2019_all.webp"
import students2018_all from "../static/students/2018/students2018_all.webp"
import students2017_all from "../static/students/2017/students2017_all.webp"
import students2016_all from "../static/students/2016/students2016_all.webp"
import students2015_all from "../static/students/2015/students2015_all.webp"
import students2014_all from "../static/students/2014/students2014_all.webp"
import students2013_all from "../static/students/2013/students2013_all.webp"





interface StudentsProps {}

export const Students: React.FC<StudentsProps> = ({ }) => {
    return (
        <div style={{ marginLeft: '10%', marginRight: '10%'}}>
            <div className="page_name">
                Наши ученики
            </div>

            <div className="students_grid">
                <Link to="/students/2021" className="link_to_all_students">
                    <div>
                        <img className="students_photo" src={students2021_all}/>
                        <p className="students_photo_caption">
                            Выпускники 2021 года
                        </p>
                    </div>
                </Link>

                <Link to="/students/2020" className="link_to_all_students" >
                    <div >
                        <img className="students_photo" src={students2020_all}/>
                        <p className="students_photo_caption">
                            Выпускники 2020 года
                        </p>
                    </div>
                </Link>

                <Link to="/students/2019" className="link_to_all_students" >
                    <div >
                        <img className="students_photo" src={students2019_all}/>
                        <p className="students_photo_caption">
                            Выпускники 2019 года
                        </p>
                    </div>
                </Link>


                <Link to="/students/2018" className="link_to_all_students" >
                    <div >
                        <img className="students_photo" src={students2018_all}/>
                        <p className="students_photo_caption">
                            Выпускники 2018 года
                        </p>
                    </div>
                </Link>

                <Link to="/students/2017" className="link_to_all_students" >
                    <div >
                        <img className="students_photo" src={students2017_all}/>
                        <p className="students_photo_caption">
                            Выпускники 2017 года
                        </p>
                    </div>
                </Link>

                <Link to="/students/2016" className="link_to_all_students" >
                    <div >
                        <img className="students_photo" src={students2016_all}/>
                        <p className="students_photo_caption">
                            Выпускники 2016 года
                        </p>
                    </div>
                </Link>

                <Link to="/students/2015" className="link_to_all_students" >
                    <div >
                        <img className="students_photo" src={students2015_all}/>
                        <p className="students_photo_caption">
                            Выпускники 2015 года
                        </p>
                    </div>
                </Link>

                <Link to="/students/2014" className="link_to_all_students" >
                    <div >
                        <img className="students_photo" src={students2014_all}/>
                        <p className="students_photo_caption">
                            Выпускники 2014 года
                        </p>
                    </div>
                </Link>

                <Link to="/students/2013" className="link_to_all_students" >
                    <div >
                        <img className="students_photo" src={students2013_all}/>
                        <p className="students_photo_caption">
                            Выпускники 2013 года
                        </p>
                    </div>
                </Link>


            </div>
        </div>
    );
};

export default Students;

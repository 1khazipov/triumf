import React from 'react';
import "../styles/exam-preparation.css"
import {materials} from "../components/materialsList";

interface ExamPreparationProps {}

export const ExamPreparation: React.FC<ExamPreparationProps> = ({ }) => {
    return (
        <div className="page_content">
            <div className="page_name">
                Подготовка к экзаменам
            </div>

            <div style={{ textAlign: 'left', margin: '25px', color: 'black', lineHeight: 1.4 }}>
                <p>Предлагаем школьникам старших классов, готовящимся к сдаче ЕГЭ и ОГЭ, пройти программу дополнительной подготовки по основным образовательным предметам: математике, русскому языку, обществознанию, информатике, химии и др.</p>
                <p>Занятия проводятся в группах по 3-5 человек (усиленной подготовки), консультации – индивидуально.</p>
                <p>Интенсивность обучения зависит от выбранного профиля – технического или гуманитарного.</p>
                <p>"Гильдия репетиторов ТРИУМФ" - это:</p>
                    <ul>
                    <li>ведущие преподаватели вузов Казани;</li>
                    <li>индивидуальный подход в обучении;</li>
                    <li>консультации психолога
                        (в том числе и по вопросам профориентации);</li>
                    <li>консультации по вопросам поступления в вузы РФ;</li>
                    <li>проведение пробных ЕГЭ и ГИА.</li>
                </ul>
                <p style={{color: "gray"}}>Начало занятий со второй недели сентября, в дальнейшем – в зависимости от выбранного профиля и продолжительности обучения. Объявления о последующем наборе будут выставлены на сайте, в Инстаграм, в группе ВК и в СМИ в качестве рекламы.</p>
            </div>

            <div className="study_materials">
                <div style={{fontSize: '2rem', textAlign: 'center', fontFamily: 'inter', paddingTop: '10px'}}>
                    Учебные пособия
                </div>

                <div className="study_books">
                    {materials.map((materialContent) => (
                        <div className="study_book">
                            <div className="book_name">
                                {materialContent.name}
                            </div>
                            <div className="icon_and_link">
                                <img className="book_image" src={materialContent.icon} />
                                <a className="book_link" href={materialContent.link} download>Скачать</a>
                            </div>
                        </div>
                    ))}
                </div>



            </div>
        </div>
    );
};

export default ExamPreparation;

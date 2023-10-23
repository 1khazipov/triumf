import React from 'react';
import head_img from '../static/head_img.png';
import { Link } from 'react-router-dom';
import '../styles/About.css';

const About = () => {
    return (
        <div className='w-full'>
            <header className='w-full' style={{ position: 'relative' }}>
                <img src={head_img} alt="head_img" style={{ width: '100%', height: '200px' }} />
                <div className="button-row" style={{ position: 'absolute', bottom: '5px', display: 'flex', justifyContent: 'space-around', width: '100%' }}>
                    <Link to="/">
                        <button className="navigation-button">О нас</button>
                    </Link>
                    <button className="navigation-button">Новости</button>
                    <button className="navigation-button">Преподаватели</button>
                    <button className="navigation-button">Подготовка к экзаменам</button>
                    <button className="navigation-button">Расписание</button>
                    <button className="navigation-button">Отзывы</button>
                    <button className="navigation-button">Наши ученики</button>
                    <button className="navigation-button">Как нас найти</button>
                </div>
            </header>
            <h1 style={{ textAlign: 'left', margin: '50px', color: '#00008B' }}>
                <p>О нас</p>
            </h1>

            <div style={{ textAlign: 'left', margin: '50px', color: 'black' }}>
                <p>"Гильдия репетиторов ТРИУМФ" была организована в августе 2013 года как профессиональное сообщество, объединяющее высококвалифицированных преподавателей ведущих казанских университетов.</p>
                <p>В основу работы Гильдии положен простой принцип: Мы не даем обещаний – мы гарантируем результат. Именно он отражает наше основное отличие от конкурентов и выражает бескомпромиссное отношение преподавателей к качеству обучения.</p>
                <p>Наши выпускники ежегодно добиваются стабильно высоких результатов на государственных итоговых аттестациях различных уровней. Это становится возможным благодаря разумному сочетанию следующих факторов:</p>
                <ul>
                    <li>большой практический опыт преподавателей;</li>
                    <li>авторские психолого-педагогические методики;</li>
                    <li>индивидуальный подход в обучении;</li>
                    <li>обучение в малых группах;</li>
                    <li>реализация принципа конкуренции, при котором слушатели с разным начальным уровнем подготовки добиваются максимально возможного результата усвоения знаний;</li>
                </ul>
            </div>
        </div>
    );
};

export default About;

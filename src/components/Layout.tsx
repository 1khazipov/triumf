import React, { ReactNode } from 'react';
import head_img from '../static/head_img.png';
import instagram from '../static/instagram.png';
import vk from '../static/vk.png';
import { Link } from 'react-router-dom';
import EmblemHeader from './EmblemHeader';
import EmblemFooter from './EmblemFooter';


interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const backgroundImage = {
        backgroundImage: `url(${head_img})`,
        width: '100%',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
    };

    return (
        <div>
            <header className='w-full' style={{ position: 'relative', justifyContent: 'flex-start', alignItems: 'center' }}>
                <div className="background-image" style={backgroundImage}>
                    <Link to="/">
                        <EmblemHeader />
                    </Link>
                    <div className='text-white'>
                        <h1 style={{ textAlign: 'center', font:'inter', color: '#ffffff', fontSize: '1.5vw', transform: 'translateY(25%) translateX(-25%)' }}>
                            ГИЛЬДИЯ РЕПЕТИТОРОВ
                        </h1>
                        <h1 style={{ textAlign: 'center', font:'inter', color: '#ffffff', fontSize: '3vw', transform: 'translateY(-25%) translateX(-25%)' }}>
                            ТРИУМФ
                        </h1>
                    </div>

                    <div className='info-about' style={{ position: 'absolute', right: 50, top: 0, display: 'flex', flexFlow: 'column', color: '#ffffff', font:'inter' }}>
                        <div style={{ fontSize: '0.8vw', marginTop: 10 }}>
                            Запись по телефонам:
                        </div>
                        <div style={{ fontSize: '1.0vw', marginTop: 8}}>
                            <a href="tel:+78432589759" style={{color: '#ffffff'}}>+7 (843) 258-97-59, </a>
                            <a href="tel:+79600489759" style={{color: '#ffffff'}}>+7 (960) 048-97-59</a>
                        </div>
                        <div style={{ fontSize: '0.8vw', marginTop: 8 }}>
                            Адрес:
                        </div>
                        <div style={{fontSize: '1.0vw', marginTop: 8 }}>
                            <a href="https://yandex.ru/maps/-/CDaDiQnM" style={{color: '#ffffff'}}>г. Казань, ул. Жуковского, д. 8, офис 313</a>
                        </div>
                        <div style={{ marginTop: 9, display: 'flex'}}>
                            <a href="https://vk.com/kazantriumf" >
                                <img src={vk} alt="vk" style={{ height: 30, width: 30, marginTop: 0 }} />
                            </a>
                            <a href="https://www.instagram.com/_triumf_/" >
                                <img src={instagram}  alt="instagram" style={{ height: 30, width: 30, marginTop: 0, marginLeft: 8 }} />
                            </a>
                        </div>
                    </div>

                    <div className="button-row" style={{ position: 'absolute', display: 'flex',
                        justifyContent: 'space-around', width: '100%', bottom: 10}}>
                        <Link to="/about">
                            <button className="navigation-button">О нас</button>
                        </Link>
                        <Link to="/news">
                            <button className="navigation-button">Новости</button>
                        </Link>
                        <Link to="/teachers">
                            <button className="navigation-button">Преподаватели</button>
                        </Link>
                        <Link to="/exam-preparation">
                            <button className="navigation-button">Подготовка к экзаменам</button>
                        </Link>
                        <Link to="/schedule">
                            <button className="navigation-button">Расписание</button>
                        </Link>
                        <Link to="/feedback">
                        <button className="navigation-button">Отзывы</button>
                        </Link>
                        <Link to="/students">
                            <button className="navigation-button">Наши ученики</button>
                        </Link>
                        <Link to="/how-to-find">
                            <button className="navigation-button">Как нас найти</button>
                        </Link>
                    </div>
                </div>
            </header>

            <main>
              {children}
            </main>

            <footer style={{ position: 'relative' }}>
                <div className="footer-container" style={{ backgroundColor: '#002e5d', height: '200px', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="footer-column" style={{ display: 'flex', flexFlow: 'column', paddingTop: 5}}>
                        <Link to="/">
                            <EmblemFooter />
                        </Link>

                        <h1 style={{ textAlign: 'center', width: '10%', height: '10%', color: '#ffffff', fontSize: '0.65vw', transform: 'translateY(45%) translateX(15%)' }}>
                            ГИЛЬДИЯ РЕПЕТИТОРОВ
                        </h1>

                        <h1 style={{ textAlign: 'center', width: '10%', height: '10%', color: '#ffffff', fontSize: '1.8vw', transform: 'translateY(-35%) translateX(15%)' }}>
                            ТРИУМФ
                        </h1>
                    </div>

                </div>
            </footer>
        </div>
    );
};

export default Layout;

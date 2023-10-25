import React, { ReactNode } from 'react';
import head_img from '../static/head_img.png';
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
                        <h1 style={{ textAlign: 'center', font:'inter', color: '#ffffff', fontSize: '1.5rem', transform: 'translateY(25%) translateX(-25%)' }}>
                            ГИЛЬДИЯ РЕПЕТИТОРОВ
                        </h1>
                        <h1 style={{ textAlign: 'center', font:'inter', color: '#ffffff', fontSize: '3rem', transform: 'translateY(-25%) translateX(-25%)' }}>
                            ТРИУМФ
                        </h1>
                    </div>

                    <div className="button-row" style={{ position: 'absolute', bottom: '2%', display: 'flex', justifyContent: 'space-around', width: '100%' }}>
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

            <footer className='w-full' style={{ position: 'relative' }}>
                <div className="footer-container" style={{ backgroundColor: '#002e5d', height: '200px', width: '100%', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="footer-column">
                        <Link to="/">
                            <EmblemFooter />
                        </Link>

                        <h1 style={{ textAlign: 'center', width: '10%', height: '10%', color: '#ffffff', fontSize: '0.65rem', transform: 'translateY(45%) translateX(15%)' }}>
                            ГИЛЬДИЯ РЕПЕТИТОРОВ
                        </h1>
                        
                        <h1 style={{ textAlign: 'center', width: '10%', height: '10%', color: '#ffffff', fontSize: '1.8rem', transform: 'translateY(-35%) translateX(15%)' }}>
                            ТРИУМФ
                        </h1>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;

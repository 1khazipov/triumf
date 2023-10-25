import React from 'react';
import '../styles/About.css';

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
    return (
        <div className='w-full' style = {{ width: '80%', margin: '0 auto', backgroundColor: 'white' }}>
            <h1 style={{ textAlign: 'left', margin: '25px', color: '#00008B' }}>
                <p>О нас</p>
            </h1>

            <div style={{ textAlign: 'left', margin: '25px', color: 'black' }}>
                <p>"Гильдия репетиторов ТРИУМФ" была организована в августе 2013 года как профессиональное сообщество, объединяющее высококвалифицированных преподавателей ведущих казанских университетов.</p>
                <p>В основу работы Гильдии положен простой принцип: Мы не даем обещаний – мы гарантируем результат. Именно он отражает наше основное отличие от конкурентов и выражает бескомпромиссное отношение преподавателей к качеству обучения.</p>
                <p>Наши выпускники ежегодно добиваются стабильно высоких результатов на государственных итоговых аттестациях различных уровней. Это становится возможным благодаря разумному сочетанию следующих факторов:</p>
                <ul>
                    <li>большой практический опыт преподавателей;</li>
                    <li>авторские психолого-педагогические методики;</li>
                    <li>индивидуальный подход в обучении;</li>
                    <li>обучение в малых группах;</li>
                    <li>реализация принципа конкуренции, при котором слушатели с разным начальным уровнем подготовки добиваются максимально возможного результата усвоения знаний.</li>
                </ul>
                <p>Кроме того, Гильдия в лице дипломированных специалистов-психологов  с большим опытом практической работы  всегда готова оказать помощь в виде психологических и профориентационных консультаций на любых этапах подготовки к экзаменам. Для информирования учеников и родителей Гильдия организует консультации специалистов приемных комиссий, а также представителей профессорско-преподавательского состава казанских университетов.</p>
            </div>
        </div>
    );
};

export default About;

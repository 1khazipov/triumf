import React from 'react';
import head_img from '../static/head_img.png';
import { Link } from 'react-router-dom';
import '../styles/About.css';

const About = () => {
    const backgroundImage = {
        backgroundImage: `url(${head_img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '200px',
    };

    return (
        <div className='w-full'>
            <header className='w-full' style={{ position: 'relative' }}>
                <div className="background-image" style={backgroundImage}>
                    <Link to="/">
                        <svg style={{ width: '60%', height: '60%', transform: 'translateX(-40%) translateY(5%)', display: 'block' }} preserveAspectRatio="xMidYMid meet" data-bbox="0 0.011 8604.737 7205.9" viewBox="0 0.011 8604.737 7205.9" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" data-type="color" role="presentation" aria-hidden="true">
                            <g>
                                <path d="M2840.58 4714.12c-425.99-66.61-934.35-192.11-1035.83-577.16-56.51-214.45 17.57-484.96 175.64-755.25 133.98-229.11 283.74-501.91 443.66-777.01 222.73-383.12 155.6-557.81 56.14-1036.66-82.54-397.37-190.13-818.24-264.67-1057.92 118.57 61.31 338.59 169.68 625.07 233.61v3970.38zM5805.03 743.73c286.48-63.94 506.5-172.29 625.06-233.6-74.54 239.68-182.13 660.55-264.67 1057.92-99.46 478.85-166.59 653.54 56.14 1036.66 159.92 275.1 309.67 547.9 443.66 777.01 158.07 270.29 232.15 540.8 175.64 755.25-101.47 385.04-609.85 510.54-1035.82 577.16V743.74z" fill="#ffffff" data-color="1"></path>
                                <path d="M4796.66 4161.61v-72.3c-9.85-28.15-320.47-62.13-323.15-122.96l-3.14-2134.63h653.48l97.49 456.82c5.7 26.68 61.29 24.47 65.98-.28l115.71-610.79H3230.54l45.57 623.04c1.83 25.1 58.01 26.37 65.98.28l143.21-469.08h653.48l-3.14 2134.63c-2.68 60.84-313.3 94.82-323.15 122.96v72.3h984.17z" fill="#ffffff" data-color="1"></path>
                                <path d="M4320.93 5558.64c-27.5 0-53.69-12.45-75.89-29.51-18.98-14.56-38.35-35.43-48.25-48.5l-.12-.16-.2.16c-86.32-113.99-262.09-215.34-463.56-298.39-281.8-116.17-609.18-193.85-822.41-222.46l-4.18-.56c-520.34-69.81-1313.56-176.26-1460.52-724.71-34.16-127.54-30.4-269.38 4.72-417.95 35.92-151.91 104.74-311.54 199.09-470.22 81.56-137.17 157.16-268.68 236.15-406.14 86.41-150.35 176.63-307.31 256.79-442.93 209-353.6 169.29-536.27 81.2-941.5-6.72-30.98-13.63-62.67-28.46-132.89-43.31-205.1-93.83-419.38-144.1-617.01-53.27-209.42-105.59-396.72-148.05-530.99-13.64-43.24 10.35-89.37 53.59-103.01 21.88-6.91 44.51-4.16 63.29 5.83 94.97 48.27 248.81 123.28 444.4 185.94 196.77 63.03 437.32 114.51 706.24 115.95 211.06 1.12 425.32-39.74 619.24-120.43 182.38-75.89 346.06-186.82 470.97-330.84 29.59-34.2 81.32-37.94 115.52-8.34 3.25 2.81 6.23 5.83 8.93 9.01 124.84 143.7 288.29 254.41 470.39 330.17 193.92 80.69 408.17 121.55 619.24 120.43 268.92-1.44 509.47-52.92 706.24-115.95 196.53-62.96 350.9-138.39 445.76-186.63 40.4-20.55 89.83-4.46 110.38 35.94 10.15 19.96 11.36 42.13 5.11 61.92-42.43 134.29-94.76 321.58-148.02 531-50.27 197.63-100.78 411.91-144.1 617.01-14.83 70.22-21.73 101.91-28.46 132.89-88.09 405.23-127.79 587.91 81.2 941.5 80.16 135.62 170.38 292.58 256.79 442.93 78.99 137.46 154.59 268.97 236.15 406.14 94.35 158.69 163.17 318.32 199.09 470.22 35.11 148.58 38.88 290.41 4.72 417.95-146.96 548.42-940.11 654.87-1460.44 724.7l-4.26.57c-213.06 28.58-540.07 106.16-821.69 222.16-201.72 83.08-377.69 184.35-464.1 298.03-11.15 14.66-30.68 35.8-51.05 50.6-22.55 16.37-48.93 28.07-77.34 28.07zm-525.77-527.86c222.8 91.84 420.83 207.95 527.81 345.26 107.25-137.62 305.42-253.8 528.2-345.56 295.41-121.68 638.54-203.08 862.14-233.07l4.26-.57c477.36-64.06 1205.04-161.73 1323.73-604.69 26.87-100.3 23.09-215.31-6-338.37-31.97-135.17-94.38-279.21-180.48-424.02-67.79-114.01-150.39-257.7-236.8-408.06-77.91-135.57-159.21-277.02-256.15-441.01-241.84-409.16-197.91-611.26-100.45-1059.59 11.38-52.41 23.62-108.67 28.46-131.61 45.05-213.33 95.87-429.46 145.38-624.07 33.37-131.18 66.43-254 97.06-361.06-83.95 37.42-185.06 78.07-301.06 115.23-209.78 67.2-466.88 122.09-755.67 123.63-232.98 1.24-469.21-43.76-682.77-132.62-176.23-73.32-337.65-176.67-470.01-308.74-132.36 132.07-293.78 235.42-470.01 308.74-213.56 88.86-449.79 133.86-682.77 132.62-288.79-1.54-545.89-56.43-755.67-123.63-116-37.16-217.11-77.81-301.06-115.23 30.62 107.06 63.69 229.88 97.06 361.06 49.5 194.61 100.33 410.74 145.38 624.07 4.84 22.94 17.08 79.19 28.46 131.61 97.45 448.32 141.39 650.42-100.45 1059.59-96.94 163.99-178.24 305.44-256.15 441.01-86.4 150.35-169 294.05-236.8 408.06-86.1 144.81-148.51 288.85-180.48 424.02-29.09 123.06-32.86 238.08-6 338.37 118.7 443 846.44 540.66 1323.81 604.7l4.18.56c223.78 30.02 567.29 111.52 862.85 233.37z" fill="#ffffff" data-color="1"></path>
                                <path d="M3132.27 6302.08c-175.45-1.94-387.83 25.95-634.11 109.31-269.73 91.28-1051.92 96.64-1452.54-470.4-14.28-20.22-13.06-46.81-.4-37.51 433.19 318.15 677.53 214 1243.77 292.42 282.63 39.14 342.84 43.71 350.3 7.93-110.94-35.16-301.9-143.57-446.78-340.92-113.2-154.18-292.22-517.78-258.61-525.86 122.34 84.51 298.89 272.56 423.19 407.78 228.81 248.9 414.69 403.06 816.28 498.95 0 0-7.6 58.66-41.11 58.29zm-1062.84-338.92c7.65 35.69-92.91 55.74-120.27 35.17-55.71-41.92-170.67-30.62-328.88-67.55-263.98-61.6-857.59-256.44-1258.39-962.32-47.82-84.2-5.77-115.06 3.49-100.49 234.29 368.56 552.01 399.53 894.2 586.94 88.54 48.49 290.08 226.45 345.75 283.53 65.12 66.77 170.04 45.91 119.24-22.66-264.24-356.71-295.86-377.32-356.39-800.4-23.72-165.63-62.87-328.89-85.54-372.41-28.67-55.07-14.12-94.24 14.35-63.55 80.76 87.06 247.76 347.35 324.19 519.67 89.59 201.98 264.79 861.76 448.25 964.06zm-806.84-713.86c-83.4.28-249.95-109.86-323.17-158.64-160.43-106.87-267.62-203.61-365.39-280.75C347.23 4631-18.64 4181.51.74 3688.67c3.24-82.34 55.52-.28 62.97 43.56 42.87 252.04 232.7 415.79 466.38 642.84 180.37 175.29 225.14 328.58 365.72 496.08 40.26 47.98 73.55 18.43 41.67-96.94-31.17-112.77-60.27-153.53-69.59-284.53-16.06-225.46 20.38-533.94 58.19-674.79 23.28-86.69 97.91-195.7 93.16-154.38-17.11 148.4 45.05 434.04 68.71 620.86 27.74 219.02 48.4 762.71 174.64 967.92zM654.6 4246.42c-83.67-83.21-271.69-330.71-329.39-431.34C236.93 3661.15 5.19 3333 22.52 2792.84c10.72-334.47 90.96-435.18 98.01-254.83 9.43 241.69 74.43 415.18 148.9 592.71 82.11 195.72 175.69 394.4 218.81 647.58 9.67 56.71 65.48 56.21 59.05-2.31-28.63-260.32 66.6-547.74 167.91-716.59 51-85.02 159.77-263.41 197.86-384.2 11.26-35.72 44.83-136.17 50.95-59.56 8.55 107.39-43.55 522.13-122.5 710.06-71.21 169.58-166.01 516.68-176.29 773.2-1.51 37.96 23.94 181.87-10.61 147.52zM486.3 2153.35c12.45 158.54 7.45 299.23-5.31 475.27-3.9 53.81 26.6 50.81 47.41-3.84 61.55-161.64 131.53-269.94 272.24-436 67.99-80.21 238-242.77 328.74-352.75 57.44-69.63 87.23-66.08 77.53 7.33-13.5 102.15-151.71 368.99-321.62 600.4-114.33 155.69-244.03 289.49-336.43 483.85-16.39 34.48-62.2 247.19-83.83 209.18-17.92-31.49-49.04-158.51-70.25-223.96-84.32-260.08-163.88-535.25-158.03-836.7 3.67-190.1 76.64-538.64 193.07-717.54 41.49-63.74 94.71-78.25 77.36-13.44-6.98 26.08-47.2 162.44-48.95 312.89-2.01 172.87 13.48 309.7 28.06 495.32zm394.12-884.7c-35.76 178.7-81.05 291.85-96.25 407.39-5.82 44.27 23.11 85.56 52.72 47.05 87.61-113.94 118.74-225.43 268.1-331.24 157.43-111.51 294.48-169.18 415.81-333.63 45.63-61.85 84.26-73.32 55.63 25.19-132 454.17-509.56 526.4-812.25 872.28-59.81 68.34-102.21 211.81-125.2 155.41-11.48-28.16 1.47-143.12-1.42-200.46-13.59-269.88-44.77-493.98 27.16-725.98 21.9-70.63 55.35-142 100.04-215.6 78.72-129.65 176.76-254.32 321.92-310.47 68.74-26.6 30.17 18.91-13.55 84.85-95.88 144.62-143.61 279.92-192.71 525.22zm943.62-1002.77c-413.6 227.44-714.64 582.55-738.17 901.14-4.2 56.98 11.36 28.29 60.58 4.22 226.21-110.65 449.58-582.83 750.77-856.55 108.81-98.88-12.24-82.33-73.18-48.81zm3553.95 5987.61s7.52 68.38 41.11 68c175.47-2.02 368.38 35.63 614.71 119.01 269.76 91.32 1071.31 77.25 1471.94-489.8 14.3-20.24 12.72-47.29.4-37.51-350.38 278-687.22 243.08-1253.48 321.53-282.66 39.15-333.13 14.6-340.59-21.18 110.94-35.16 301.88-172.67 446.78-370.02 113.21-154.2 292.22-488.67 258.61-496.75-122.34 84.51-287.09 264.96-403.79 388.37-270.97 286.56-441.63 470.17-835.69 518.36zm1086.24-264.36c-7.65 35.69 74.89 53.29 102.26 32.69 55.72-41.94 203.09-63.52 364.6-81.33 317.91-35.05 898.25-266.61 1299.05-972.48 47.82-84.21 6.91-114.29-3.49-100.49-257.41 341.25-624.2 457.98-966.39 645.43-88.59 48.51-341.76 204.22-396.19 262.55-52.52 56.27-95.21 42.55-51.98-31.08 103.33-175.99 340.71-465.06 353.01-684.23 11.6-206.91 72.81-448.31 103.63-507.49 28.69-55.1 14.12-94.24-14.35-63.55-80.76 87.06-247.75 347.35-324.19 519.67-89.59 201.99-238.45 783.15-465.95 980.32zm828.22-781.47c2.93 36.38-8.99 108.92 20.12 90.93 75.5-46.66 183.08-137.03 295.21-213.52 156.66-106.88 322.34-205.1 422.03-282.24 228.5-176.82 464.57-459.62 570.41-998.22 18.68-95-26.22-111.42-32.21-95.25-148.5 400.82-364.61 530.27-638.52 808.11-70.89 71.9-246.94 285.64-282.32 357.09-34.13 68.95-87.17 65.32-48.99-14.85 86.65-181.94 125.65-432.51 100.5-680.1-20.95-206.09-64.99-411.71-58.99-478.02 8.86-97.89-30.74-88-49.12-50.68-52.36 106.34-85.14 435-108.82 621.83-27.76 219.03-44.71 762.71-189.31 934.92zm614.01-912.72c28.67-28.49 68.65-90.74 109.36-154.33 76.34-119.24 148.09-188.74 229.75-296.43 136.03-179.37 335.89-520.42 344.16-965.72 3.41-183.03-78.43-460-82.28-393.97-22.34 381.57-110.07 504.62-240.97 783.02-72.81 154.85-97.09 309.06-155.33 454.09-21.45 53.41-50.02 56.77-49.36-2.13 3.23-285.76-79.46-442.99-180.78-611.9-51.06-85.09-175.49-253.32-213.62-374.15-11.28-35.76-44.84-136.22-50.94-59.56-8.55 107.42 33.88 492.98 112.82 680.95 71.24 169.61 165.99 516.65 176.29 773.2 1.52 38-33.72 201.32.89 166.94zm214.11-2896.63c65.31 148.12 34.55 482.33-1.56 766.41-20.09 157.97-1.48 317.48-10.35 463.88-3.27 53.9-28.08 50.84-50.09-3.84-65.05-161.66-138.92-260.2-287.61-426.28-71.84-80.23-206.72-204.64-302.57-314.63-60.7-69.64-83.23-95.72-72.97-22.32 14.26 102.17 106.57 360.5 286.09 591.91 120.81 155.71 239.94 268.3 337.56 509.26 14.45 35.65 83.6 221.78 106.47 183.77 18.95-31.49 31.21-158.45 53.69-223.97 89.22-260.08 214.15-438.2 207.89-739.74-4.39-211.44-19.21-422.38-125.93-670.03-29.71-68.94-63.97-136.17-93.01-161.24-41.43-35.79-83.96-35.6-47.61 46.82zm-511.38-524.75c49.55 120.98 79.62 232.98 115.34 467.63 19.85 130.49 80.22 243.65 106.24 362.35 9.57 43.66-20.36 66.32-49.98 27.79-87.63-113.95-195.78-266.71-345.15-372.53-157.43-111.52-233.93-133.39-366.28-289.59-49.69-58.65-84.27-73.35-55.63 25.19 49.66 170.82 176.84 375.6 392.92 528.38 132.24 93.5 314.32 236.45 429.02 367.49 59.83 68.36 92.5 188.22 115.52 131.81 11.5-28.18-1.47-143.12 1.42-200.46 13.59-269.88 44.77-493.98-27.16-725.98-21.9-70.63-55.34-142-100.04-215.6-78.72-129.66-191.87-220.66-335.69-280.2-65.1-26.94 77.34 70.87 119.46 173.71zm-823.52-560.88c501.67 241.64 774.89 604.31 752.03 922.24-4.21 58.65-9.16 27.18-58.28-6.53-238.77-163.83-557.08-655.85-782.67-887.29-109.76-112.59 19.99-61.63 88.93-28.43zM5340.91 7109.25c-196.41-220.95-497.42-422.35-647.39-535.91-41.16-31.17-121.13-95.08-159.02-129.48-98.9-89.79 87.15-64.01 156.71-27.92 62.8 32.61 101.21 56.33 182.03 100.65 532.65 292.01 816.89 415.56 1144.2 423.78 379.71 9.53 708.2-176.59 772.15-337.45-403.1 178.65-723.62 102.54-1027.1 0-310.1-104.77-727.75-343.73-1140.41-349.98-118.01-1.8-218.87 19.25-312.08 53.92-87.31 32.49-54.32 28.24-145.07 2.89-114.67-32.02-234.49-50.08-354.99-48.26-412.63 6.24-743.01 236.68-1053.08 341.43-303.46 102.51-625.18 166.91-1028.28-11.74 63.95 160.86 437.29 335.59 816.97 326.09 327.28-8.19 713.47-180.68 1065.94-462.11 102.38-81.74 229.56-99.3 365.95-80.79 89.93 12.16 97 49.47 25.9 92.98-56.95 34.86-115.27 71.05-177.5 106.01-164.06 92.19-450.97 314.96-647.39 535.91l130.09 96.64c1.26.93 432.14-524.03 875.57-720.22 63.53-28.11 81.68-30.69 151.1 0 443.48 196.05 874.31 721.16 875.57 720.22l130.09-96.64z" fill="#ffffff" data-color="1"></path>
                            </g>
                        </svg>
                    </Link>

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
                </div>
            </header>
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

import React from 'react';
import { Tab, Tabs as TabsComponent, TabList, TabPanel } from "react-tabs";
import "../styles/schedule.css";



interface ScheduleProps {}

export const Schedule: React.FC<ScheduleProps> = ({ }) => {
    return (
        <div>
            <div className="page_name">
                Расписание занятий
            </div>
            <TabsComponent>
                <TabList>
                    <Tab key="monday">Понедельник</Tab>
                    <Tab key="tuesday">Вторник</Tab>
                    <Tab key="wednesday">Среда</Tab>
                    <Tab key="thursday">Четверг</Tab>
                    <Tab key="friday">Пятница</Tab>
                    <Tab key="saturday">Суббота</Tab>
                    <Tab key="sunday">Воскресенье</Tab>
                </TabList>

                <TabPanel key="monday">
                    <table>
                        <tbody>
                            <tr><td className="schedule__time"> 16:10–17:40 </td><td> 11(1) / информатика</td></tr>
                        </tbody>
                    </table>
                </TabPanel>

                <TabPanel key="tuesday">
                    <table>
                        <tbody>
                            <tr><td className="schedule__time"> 14:30–16:00 </td> <td> 9(1) / обществознание</td></tr>
                            <tr><td className="schedule__time"> 16:10–17:40 </td><td> 11(1) / русский язык</td></tr>
                            <tr><td className="schedule__time"> 16:10–17:40 </td><td> 11(1) / обществознание</td></tr>
                        </tbody>
                    </table>
                </TabPanel>
                <TabPanel key="wednesday">df</TabPanel>
                <TabPanel key="thursday">df</TabPanel>
                <TabPanel key="friday">df</TabPanel>
                <TabPanel key="saturday">df</TabPanel>
                <TabPanel key="sunday">df</TabPanel>

            </TabsComponent>
        </div>
    );
};

export default Schedule;

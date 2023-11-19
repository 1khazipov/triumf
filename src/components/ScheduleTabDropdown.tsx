import React, {useState} from 'react';
import { Tab, Tabs as TabsComponent, TabList, TabPanel } from "react-tabs";
import "../pages/schedule/schedule.css";
import "../styles/dropdown.scss"



interface ScheduleProps {}

export const ScheduleTabDropdown: React.FC<ScheduleProps> = ({ }) => {
    const [value, setValue] = useState(0);
    const [open, setOpen] = useState("");
    const week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]

    function handleSelectTitle(e: React.MouseEvent) {
        if (open == "") setOpen("active")
        if (open == "active") setOpen("")
    }

    return (
        <div >
            <TabsComponent selectedIndex={value}>
                <TabList>
                    <Tab key="monday" onClick={() => setValue(0)}>{week[0]}</Tab>
                    <Tab key="tuesday" onClick={() => setValue(1)}>{week[1]}</Tab>
                    <Tab key="wednesday" onClick={() => setValue(2)}>{week[2]}</Tab>
                    <Tab key="thursday" onClick={() => setValue(3)}>{week[3]}</Tab>
                    <Tab key="friday" onClick={() => setValue(4)}>{week[4]}</Tab>
                    <Tab key="saturday" onClick={() => setValue(5)}>{week[5]}</Tab>
                    <Tab key="sunday" onClick={() => setValue(6)}>{week[6]}</Tab>
                </TabList>
                <div className="select_schedule">
                    <form>
                        <div className="__select" data-state={open}>
                            <div className="__select__title"
                                 onClick={handleSelectTitle}>
                                {week[value]}
                            </div>
                            <div className="__select__content">
                                {week.map((value, index) => (
                                    <div>
                                        <input id="singleSelect" className="__select__input" type="radio"
                                               name="singleSelect"/>
                                        <label htmlFor="singleSelect" className="__select__label"
                                               onClick={() => {setValue(index); setOpen("")}}>{week[index]}</label>
                                        <input id="singleSelect" className="__select__input" type="radio"
                                               name="singleSelect" checked/>
                                        <label htmlFor="singleSelect" className="__select__label"
                                               onClick={() => {setValue(index); setOpen("")}}>{week[index]}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </form>
                </div>

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

export default ScheduleTabDropdown;

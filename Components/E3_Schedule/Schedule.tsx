import style from "./Schedule.module.scss"
import {H3} from "../X_Common/H3/H3";
import {scheduleData} from "./scheduleData";
import {labels, ScheduleRow} from "./ScheduleRow/ScheduleRow";

export const Schedule = () => {
    //const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className={style.schedule}>
            <div className={style.inner}>
                <H3>Levels Schedule</H3>


                <div className={style.table}>

                    <div className={style.label}>
                        Don't miss it
                    </div>

                    <div className={style.head}>
                        {
                            labels.map((label, index) => (
                                <div className={style.headCell} key={index}>
                                    {label}
                                </div>
                            ))
                        }
                    </div>

                    <div className={style.table_mobile}>
                        {
                            scheduleData
                                .slice(1, 7)
                                .map((row, index) => (
                                    <ScheduleRow key={index}
                                                 {...row}
                                                 selected={
                                                     //selectedIndex === index
                                                     row.selected
                                                 }
                                                 //onClick={() => setSelectedIndex(index)}
                                    />
                                ))
                        }
                    </div>

                    <div className={style.table_desktop}>
                        {
                            scheduleData
                                .map((row, index) => (
                                    <ScheduleRow key={index}
                                                 {...row}
                                                 selected={
                                                     //selectedIndex === index
                                                     row.selected
                                                 }
                                                 //onClick={() => setSelectedIndex(index)}
                                    />
                                ))
                        }
                    </div>

                </div>

                <button className={style.loadBtn}>Load more</button>


            </div>
        </div>
    )
}
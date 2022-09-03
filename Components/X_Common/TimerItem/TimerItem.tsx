import style from "./TimerItem.module.scss"
import {FC} from "react";
import clsx from "clsx";

interface ITimerItem {
    time: string
    unit: string
    animationDelay: string
}

export const TimerItem: FC<ITimerItem> = ({
                                              time,
                                              unit,
                                              animationDelay
}) => {
    return (
        <div className={style.timerItem}>
            <div className={style.wrapper}>
                <div className={clsx(style.shadow, "animShadow")}
                     style={{animationDelay}}
                >
                    <div className={style.shadowInner}/>
                </div>
            </div>

            <div className={style.inner}>
                <p className={style.time}>{time}</p>
                <p className={style.unit}>{unit}</p>
            </div>
            <div className={clsx(style.ball, "animBall")}
                 style={{animationDelay}}
            />

        </div>
    )
}
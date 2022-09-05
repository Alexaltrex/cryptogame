import style from "./TimerItem.module.scss"
import {FC} from "react";
import clsx from "clsx";

interface ITimerItem {
    time: string
    unit: string
    animationDelay: string
    className?: string
    animShadowClassName?: string
    animBallClassName?: string
    finish?: boolean
}

export const TimerItem: FC<ITimerItem> = ({
                                              time,
                                              unit,
                                              animationDelay,
                                              className,
                                              animShadowClassName = "animShadow",
                                              animBallClassName = "animBall",
                                              finish = false
                                          }) => {
    return (
        <div className={clsx(style.timerItem, Boolean(className) && className)}>
            <div className={style.wrapper}>
                {
                    !finish &&
                    <div className={clsx(
                        style.shadow,
                        animShadowClassName
                    )}
                         style={{animationDelay}}
                    >
                        <div className={style.shadowInner}/>
                    </div>
                }

            </div>

            <div className={style.inner}>
                <p className={clsx({
                    [style.time]: true,
                    [style.time_finish]: finish,
                })}>{time}</p>
                <p className={style.unit}>{unit}</p>
            </div>
            {
                !finish &&
                <div className={clsx(
                    style.ball,
                    animBallClassName
                )}
                     style={{animationDelay}}
                />
            }

        </div>
    )
}
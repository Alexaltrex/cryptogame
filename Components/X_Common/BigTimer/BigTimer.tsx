import style from "./BigTimer.module.scss"
import {FC} from "react";
import clsx from "clsx";
import {units} from "../../../consts/date";

interface IBigTimer {
    className?: string
    animShadowClassName?: string
    animBallClassName?: string
    date: {
        days: string
        hours: string
        minutes: string
        seconds: string
    }
}

export const BigTimer: FC<IBigTimer> = ({
                                            className,
                                            animShadowClassName = "animShadow",
                                            animBallClassName = "animBall",
                                            date
                                        }) => {
    const finishes = [
        date.days === "00",
        date.days === "00" && date.hours === "00",
        date.days === "00" && date.hours === "00" && date.minutes === "00",
        date.days === "00" && date.hours === "00" && date.minutes === "00" && date.seconds === "00"
    ]

    return (
        <div className={clsx(style.bigTimer, Boolean(className) && className)}>

            {
                !finishes[3] &&
                <div className={style.wrapper}>
                    <div className={clsx(
                        style.shadow,
                        animShadowClassName
                    )}>
                        <div className={style.shadowInner}/>
                    </div>
                </div>
            }

            <div className={style.inner}>

                <div className={style.item}>
                    <p className={clsx({
                        [style.time]: true,
                        [style.time_finish]: finishes[0],
                    })}>
                        {date.days}
                    </p>
                    <p className={style.unit}>{units[0]}</p>
                </div>

                <p className={style.divider}>:</p>

                <div className={style.item}>
                    <p className={clsx({
                        [style.time]: true,
                        [style.time_finish]: finishes[1],
                    })}>
                        {date.hours}
                    </p>
                    <p className={style.unit}>{units[1]}</p>
                </div>

                <p className={style.divider}>:</p>

                <div className={style.item}>
                    <p className={clsx({
                        [style.time]: true,
                        [style.time_finish]: finishes[2],
                    })}>
                        {date.minutes}
                    </p>
                    <p className={style.unit}>{units[2]}</p>
                </div>

                <p className={style.divider}>:</p>

                <div className={style.item}>
                    <p className={clsx({
                        [style.time]: true,
                        [style.time_finish]: finishes[3],
                    })}>
                        {date.seconds}
                    </p>
                    <p className={style.unit}>{units[3]}</p>
                </div>

            </div>

            {
                !finishes[3] &&
                <div className={clsx(
                    style.ball,
                    animBallClassName
                )}/>
            }

        </div>
    )
}
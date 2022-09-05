import style from "./Timer.module.scss"
import {TimerItem} from "../X_Common/TimerItem/TimerItem";
import {H2} from "../X_Common/H2/H2";
import * as React from "react";
import {svgIcons} from "../../assets/svgIcons";
import {units} from "../../consts/date";
import {useTimer} from "../../hooks/useTimer";

export const Timer = () => {
    const date = useTimer();

    return (
        <div className={style.timer}>
            <div className={style.inner}>
                <H2 className={style.title}>Access to the next level will be obtained through:</H2>

                <div className={style.blocks}>
                    <div className={style.arrow_access_mobile}>{svgIcons.arrow_access_mobile}</div>
                    <div className={style.arrow_access_desktop}>{svgIcons.arrow_access_desktop}</div>

                    <div className={style.level}>Level 3</div>

                    <p className={style.divider1}>:</p>
                    <p className={style.divider2}>:</p>
                    <p className={style.divider3}>:</p>

                    <div className={style.inner}>
                        {
                            [
                                {time: date.days, finish: date.days === "00"},
                                {time: date.hours, finish: date.days === "00" && date.hours === "00"},
                                {
                                    time: date.minutes,
                                    finish: date.days === "00" && date.hours === "00" && date.minutes === "00"
                                },
                                {
                                    time: date.seconds,
                                    finish: date.days === "00" && date.hours === "00" && date.minutes === "00" && date.seconds === "00"
                                },
                            ]
                                .map((el, index) => (
                                    <TimerItem {...el}
                                               unit={units[index]}
                                               key={index}
                                               animationDelay={`${index * 6 / 4}s`}
                                    />
                                ))
                        }
                    </div>

                </div>

            </div>

        </div>
    )
}
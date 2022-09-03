import style from "./Timer.module.scss"
import {TimerItem} from "../X_Common/TimerItem/TimerItem";
import {H2} from "../X_Common/H2/H2";
import * as React from "react";
import {svgIcons} from "../../assets/svgIcons";

export const Timer = () => {



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
                                {time: "11", unit: "Days"},
                                {time: "11", unit: "Hours"},
                                {time: "11", unit: "Minutes"},
                                {time: "11", unit: "Seconds"},
                            ].map(({time, unit}, index) => (
                                <TimerItem time={time}
                                           unit={unit}
                                           key={index}
                                           animationDelay={`${index * 6/4}s`}
                                />
                            ))
                        }
                    </div>

                </div>

            </div>

        </div>
    )
}
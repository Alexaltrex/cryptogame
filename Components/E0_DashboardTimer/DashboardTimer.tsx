import style from "./DashboardTimer.module.scss";
import {InvitedBlock} from "../X_Common/InvitedBlock/InvitedBlock";
import * as React from "react";
import {TimerItem} from "../X_Common/TimerItem/TimerItem";
import {BigTimer} from "../X_Common/BigTimer/BigTimer";
import {units} from "../../consts/date";
import {useTimer} from "../../hooks/useTimer";

export const DashboardTimer = () => {
    const date = useTimer();

    return (
        <div className={style.dashboardTimer}>
            <div className={style.inner}>

                <InvitedBlock label="Smart contract:"
                              value="0x41eaD2756Eawdas11241eaD2756Eawdas112"
                              onClick={() => {
                              }}
                              className={style.invitedBlock}
                />



                <div className={style.timerWrapper}>
                    <div className={style.titleWrapper}>
                        <div className={style.label}>Level 3</div>
                        <p className={style.timerTitle}>Will be available via: </p>
                    </div>

                    <div className={style.timerMobile}>
                        <BigTimer animBallClassName="animBall3"
                                  animShadowClassName="animShadow3"
                                  date={date}
                        />
                    </div>

                    <div className={style.timerItemsDesktop}>
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
                                ].map((el, index) => (
                                    <TimerItem {...el}
                                               unit={units[index]}
                                               key={index}
                                               animationDelay={`${index * 6 / 4}s`}
                                               className={style.timerItem}
                                               animBallClassName="animBall2"
                                               animShadowClassName="animShadow2"
                                    />
                                ))
                            }
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
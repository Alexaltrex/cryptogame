import style from "./Blocks.module.scss";
import {ButtonCustom} from "../../X_Common/ButtonCustom/ButtonCustom";
import * as React from "react";
import {svgIcons} from "../../../assets/svgIcons";

export const Registration = () => {
    return (
        <>
            <p className={style.title}>Registration and start of the game</p>

            <p className={style.subtitle}>
                To start playing, you need to follow two easy steps:
            </p>

            <div className={style.text}>
                <p>
                    1. Register and connect your crypto wallet;
                </p>
                <br/>
                <p>
                    2. Log in to your personal account and open the available levels.
                </p>
                <br/>
                <p>
                    That is all. Immediately after opening the levels, you will start making a profit.
                </p>
            </div>

            <ButtonCustom label="Let’s Start"
                          className={style.startBtn}
                          onClick={() => console.log("click")}
                          icon={svgIcons.right_arrow}
            />

        </>
    )
}
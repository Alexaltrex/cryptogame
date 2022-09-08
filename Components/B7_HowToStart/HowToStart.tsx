import style from "./HowToStart.module.scss"
import {H2} from "../X_Common/H2/H2";
import clsx from "clsx";
import {ButtonOutlined} from "../X_Common/ButtonOutlined/ButtonOutlined";
import {svgIcons} from "../../assets/svgIcons";
import * as React from "react";

const steps = [
    {
        step: "01",
        src: "/png/how to start/01.png",
        text: "Connect the wallet"
    },
    {
        step: "02",
        src: "/png/how to start/02.png",
        text: "Open your first level"
    },
    {
        step: "03",
        src: "/png/how to start/03.png",
        text: "Start making a profit"
    },
]

export const HowToStart = () => {
    return (
        <div className={style.howToStart}>
            <div className={style.inner}>
                <H2>How to start?</H2>
                <div className={style.cards}>

                    <div className={style.arrowMobile}
                         data-aos="zoom-in"
                    >
                        {svgIcons.arrow_howToStart_mobile}
                    </div>

                    <div className={style.arrowDesktop}
                         data-aos="zoom-in"
                    >
                        {svgIcons.arrow_howToStart_desktop}
                    </div>

                    <div className={style.tryMobile}
                         data-aos="zoom-in"
                         data-aos-delay="250"
                    >
                        {svgIcons.try_mobile}
                    </div>

                    <div className={style.tryDesktop}
                         data-aos="zoom-in"
                         data-aos-delay="250"
                    >
                        {svgIcons.try_desktop}
                    </div>

                    {
                        steps.map(({step, src, text}, index) => (
                            <div className={style.card}
                                 key={index}
                            >
                                <div className={style.imgWrapper}>
                                    <img src={src} alt=""/>
                                </div>
                                <div className={style.textWrapper}>
                                    <p className={style.step}>{step}</p>
                                    <p className={style.text}>{text}</p>
                                </div>
                            </div>
                        ))
                    }
                    <div className={clsx(style.card, style.card_blue)}>
                        <p className={style.title}>Join us</p>
                        <p className={style.subtitle}>and get NFT as a gift</p>
                        <ButtonOutlined label="Start now!"
                                        icon={svgIcons.right_arrow}
                                        className={style.btn}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
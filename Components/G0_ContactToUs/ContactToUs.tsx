import style from "./ContactToUs.module.scss"
import {H3} from "../X_Common/H3/H3";
import {svgIcons} from "../../assets/svgIcons";
import {observer} from "mobx-react-lite";
import * as React from "react";

const cards = [
    {
        src: "/png/contact to us/card0.png",
        title: "Support Telegram Bot",
        description: "Write here if you have any problems",
        iconM: svgIcons.arrow_contact1_m,
        iconD: svgIcons.arrow_contact1_d,

    },
    {
        src: "/png/contact to us/card1.png",
        title: "News Telegram Channel",
        description: "Updates, news and opening levels",
        iconM: svgIcons.arrow_contact2_m,
        iconD: svgIcons.arrow_contact2_d,
    },
]

export const ContactToUs = observer(() => {

    return (
        <div className={style.contactToUs}>
            <H3>Contact with us</H3>
            <div className={style.cards}>
                {
                    cards.map(({src, title, description, iconM, iconD}, index) => (
                        <div key={index}
                             className={style.card}
                        >

                            <div className={style.top}>

                                <div className={style.arrowMobile}
                                     data-aos="zoom-in"
                                     data-aos-delay={index === 0 ? "0" : "500"}
                                >
                                    {iconM}
                                </div>

                                <div className={style.arrowDesktop}
                                     data-aos="zoom-in"
                                     data-aos-delay={index === 0 ? "0" : "500"}
                                >
                                    {iconD}
                                </div>

                                <img src={src} alt=""
                                     className={style.logo}
                                     data-aos="zoom-in"
                                     data-aos-delay={index === 0 ? "250" : "750"}
                                />

                                <p className={style.title}>{title}</p>
                                <p className={style.description}>{description}</p>
                            </div>

                            <div className={style.bottom}>
                                <p>go</p>
                            </div>

                        </div>
                    ))
                }
            </div>

        </div>
    )
})
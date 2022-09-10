import style from "./Footer.module.scss"
import Link from "next/link";
import {ButtonCustom} from "../X_Common/ButtonCustom/ButtonCustom";
import * as React from "react";
import {AnimatedLink} from "../X_Common/AnimatedLink/AnimatedLink";
import clsx from "clsx";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import {svgIcons} from "../../assets/svgIcons";

export const footerLinks = [
    {label: "How it works?", href: "howItWorks"},
    {label: "Promo", href: "promo"},
    //{label: "Disclaimer", href: "disclaimer"},
]

export const Footer = observer(() => {
    const {setDisclaimer, setLogin} = useStore();
    return (
        <footer className={style.footer}>

            <div className={style.top}>
                <div className={style.inner}>
                    <Link href="/" onClick={() => setLogin(false)}>
                        <a className={style.logoBlock}>
                            {svgIcons.logo}
                        </a>
                    </Link>

                    <div className={style.links}>
                        {
                            footerLinks.map(({label, href}, index) => (
                                <AnimatedLink key={index}
                                              className={style.animatedLink}
                                >
                                    <Link key={index} href={href}>
                                        <a className={style.link}>
                                            {label}
                                        </a>
                                    </Link>
                                </AnimatedLink>

                            ))
                        }
                        <AnimatedLink className={style.animatedLink}
                        >
                            <button className={clsx(style.link, style.disclaimerBtn)}
                                    onClick={() => setDisclaimer(true)}
                            >
                                Disclaimer
                            </button>
                        </AnimatedLink>

                    </div>

                    <ButtonCustom label="Let’s Start"
                                  className={style.btn}
                    />

                </div>
            </div>

            <div className={style.bottom}>
                <div className={style.inner}>
                    <p className={style.right}>All rights reserved © 2022</p>
                    <div className={style.links}>
                        <a href="#"
                           target="_blank"
                           rel="nofollow noopener noreferrer"
                        >
                            Support Telegram Bot
                        </a>

                        <Link href="/policy">
                            <a className={style.policy}>
                                Privace Policy
                            </a>
                        </Link>
                    </div>
                </div>
                
            </div>

        </footer>
    )
})
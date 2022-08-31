import style from "./Footer.module.scss"
import Link from "next/link";
import {ButtonCustom} from "../X_Common/ButtonCustom/ButtonCustom";
import * as React from "react";

export const footerLinks = [
    {label: "How it works?", href: "howItWorks"},
    {label: "Promo", href: "promo"},
    {label: "Disclaimer", href: "disclaimer"},
]

export const Footer = () => {
    return (
        <footer className={style.footer}>

            <div className={style.top}>
                <div className={style.inner}>
                    <Link href="/">
                        <a className={style.logoBlock}>
                            <img src="/png/logo.png" alt=""/>
                            <p className={style.text}>Good Game</p>
                        </a>
                    </Link>

                    <div className={style.links}>
                        {
                            footerLinks.map(({label, href}, index) => (
                                <Link key={index} href={href}>
                                    <a className={style.link}>
                                        {label}
                                    </a>
                                </Link>
                            ))
                        }
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
                            <a className={style.logoBlock}>
                                Privace Policy
                            </a>
                        </Link>
                    </div>
                </div>
                
            </div>

        </footer>
    )
}
import * as React from "react";
import style from "./Header.module.scss";
import Link from "next/link";
import {ButtonCustom} from "../X_Common/ButtonCustom/ButtonCustom";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import {svgIcons} from "../../assets/svgIcons";

export const headerLinks = [
    {label: "How it works?", href: "howItWorks"},
    {label: "Promo", href: "promo"},
]

export const Header = observer(() => {
    const {burgerMenu, setBurgerMenu} = useStore();

    return (
        <header className={style.header}>
            <div className={style.inner}>
                <Link href="/">
                    <a className={style.left}
                       onClick={() => setBurgerMenu(false)}
                    >
                        <img src="/png/logo.png" alt=""/>
                        <p className={style.text}>Good Game</p>
                    </a>
                </Link>

                <div className={style.center}>
                    {
                        headerLinks.map(({label, href}, index) => (
                            <Link key={index} href={href}>
                                <a className={style.link}>
                                    {label}
                                </a>
                            </Link>
                        ))
                    }
                </div>

                <div className={style.right}>
                    <ButtonCustom label="Let’s Start"
                                  className={style.btn}
                                  //disabled
                                  onClick={() => console.log("click")}
                    />

                    <button className={style.burgerBtn}
                            onClick={() => setBurgerMenu(!burgerMenu)}
                    >
                        {burgerMenu ? svgIcons.close : svgIcons.burger}
                    </button>
                </div>

            </div>
        </header>
    )
})
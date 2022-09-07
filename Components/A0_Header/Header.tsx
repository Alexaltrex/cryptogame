import * as React from "react";
import style from "./Header.module.scss";
import Link from "next/link";
import {ButtonCustom} from "../X_Common/ButtonCustom/ButtonCustom";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import {svgIcons} from "../../assets/svgIcons";
import clsx from "clsx";
import {useRouter} from "next/router";
import {AccountBlock} from "./AccountBlock/Account";
import {AnimatedLink} from "../X_Common/AnimatedLink/AnimatedLink";

export const headerLinks = [
    {label: "How it works?", href: "/howItWorks"},
    {label: "Promo", href: "/promo"},
]

export const authHeaderLinks = [
    {label: "Dashboard", href: "/dashboard"},
    {label: "Referrals", href: "/referrals"},
    {label: "Support", href: "/support"},
]

export const Header = observer(() => {
    const {burgerMenu, setBurgerMenu, login, setConnectWallet} = useStore();
    const router = useRouter();
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
                        (login ? authHeaderLinks : headerLinks).map(({label, href}, index) => (
                            <AnimatedLink key={index}
                                          enable={!router.pathname.includes(href)}
                                          className={style.animatedLink}
                            >
                                <Link key={index} href={href}>
                                    <a className={clsx({
                                        [style.link]: true,
                                        [style.link_active]: router.pathname.includes(href),
                                    })}>
                                        {label}
                                    </a>
                                </Link>
                            </AnimatedLink>


                        ))
                    }
                </div>

                <div className={style.right}>

                    {
                        login ? (
                            <AccountBlock/>
                            ) : (
                            <ButtonCustom label="Let’s Start"
                                          className={style.btn}
                                          onClick={() => setConnectWallet(true)}
                            />
                        )
                    }


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
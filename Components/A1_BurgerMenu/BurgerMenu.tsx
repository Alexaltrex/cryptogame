import style from "./BurgerMenu.module.scss"
import Link from "next/link";
import * as React from "react";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import clsx from "clsx";
import {authHeaderLinks, headerLinks} from "../A0_Header/Header";
import {ButtonCustom} from "../X_Common/ButtonCustom/ButtonCustom";

export const BurgerMenu = observer(() => {
    const {burgerMenu, setBurgerMenu, login, setLogin, setConnectWallet} = useStore();

    return (
        <div className={clsx({
            [style.burgerMenu]: true,
            [style.burgerMenu_show]: burgerMenu,
        })}>
            {
                (login ? authHeaderLinks : headerLinks).map(({label, href}, index) => (
                    <Link key={index} href={href}>
                        <a className={style.link}
                           onClick={() => setBurgerMenu(false)}
                        >
                            {label}
                        </a>
                    </Link>
                ))
            }

            {
                !login &&
                <ButtonCustom label="Let’s Start"
                              className={style.btn}
                              onClick={() => {
                                  setBurgerMenu(false)
                                  setConnectWallet(true)
                              }}
                />
            }
        </div>
    )
})
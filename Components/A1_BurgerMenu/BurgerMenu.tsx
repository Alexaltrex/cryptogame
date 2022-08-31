import style from "./BurgerMenu.module.scss"
import Link from "next/link";
import * as React from "react";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import clsx from "clsx";
import {headerLinks} from "../A0_Header/Header";
import {ButtonCustom} from "../X_Common/ButtonCustom/ButtonCustom";

export const BurgerMenu = observer(() => {
    const {burgerMenu, setBurgerMenu} = useStore();

    return (
        <div className={clsx({
            [style.burgerMenu]: true,
            [style.burgerMenu_show]: burgerMenu,
        })}>
            {
                headerLinks.map(({label, href}, index) => (
                    <Link key={index} href={href}>
                        <a className={style.link}
                           onClick={() => setBurgerMenu(false)}
                        >
                            {label}
                        </a>
                    </Link>
                ))
            }

            <ButtonCustom label="Let’s Start"
                          className={style.btn}
                //disabled
                          onClick={() => console.log("click")}
            />
        </div>
    )
})
import style from "./AccountBlock.module.scss"
import {svgIcons} from "../../../assets/svgIcons";
import clsx from "clsx";
import {useRef, useState} from "react";
import {useOutsideClick} from "../../../hooks/useOutsideClick";

const list = [
    {icon: svgIcons.copy, label: "Copy Address"},
    {icon: svgIcons.link, label: "View Explorer"},
    {icon: svgIcons.logout, label: "Disconnect Wallet"},
]


export const AccountBlock = () => {
    const balance = "32.221";
    const account = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";

    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null!)

    // useOutsideClick(ref, () => {
    //     if (open) {
    //         setOpen(false)
    //     }
    // })

    return (
        <div className={style.accountBlock}>

            <div className={clsx(style.wrapper, style.balance)}>
                {svgIcons.balance}
                <p>{balance}</p>
            </div>

            <button className={style.accountWrapper}
            >
                <div className={style.inner}
                     onClick={() => setOpen(!open)}
                >
                    <div className={style.metamask}>{svgIcons.metamask}</div>
                    <p className={style.account}>{account}</p>
                    <div className={clsx(style.arrow, open && style.arrow_open)}>{svgIcons.arrow_down}</div>
                </div>


                {
                    open &&
                    <div className={style.list} ref={ref}>
                        {
                            list.map(({icon, label}, index) => (
                                <button className={style.listItem}
                                        onClick={() => setOpen(false)}
                                >
                                    {icon}
                                    <p>{label}</p>
                                </button>
                            ))
                        }
                    </div>
                }

            </button>
        </div>
    )
}
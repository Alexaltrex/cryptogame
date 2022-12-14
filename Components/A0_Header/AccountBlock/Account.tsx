import style from "./AccountBlock.module.scss"
import {svgIcons} from "../../../assets/svgIcons";
import clsx from "clsx";
import {useRef, useState} from "react";
//import {useOutsideClick} from "../../../hooks/useOutsideClick";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/useStore";

export const AccountBlock = observer(() => {
    const {setLogin} = useStore();

    const balance = "32.221";
    const account = "0x77997970C51812dc3A010C7d01b50e0d17dc79C8";

    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null!)

    // useOutsideClick(ref, () => {
    //     if (open) {
    //         setOpen(false)
    //     }
    // })

    const list = [
        {icon: svgIcons.copy, label: "Copy Address", onClick: () => navigator.clipboard.writeText(account)},
        {
            icon: svgIcons.share, label: "View Explorer", onClick: () => {
            }
        },
        {icon: svgIcons.logout, label: "Disconnect Wallet", onClick: () => setLogin(false)},
    ]

    return (
        <div className={style.accountBlock}>

            <div className={clsx(style.wrapper, style.balance)}>
                {svgIcons.balance}
                <p>{balance}</p>
            </div>

            <button className={style.accountWrapper}>
                <div className={style.inner}
                     onClick={() => setOpen(!open)}
                >
                    <div className={style.metamask}>{svgIcons.metamask}</div>
                    <p className={style.account}>{account}</p>
                    <div className={clsx(style.arrow, open && style.arrow_open)}>{svgIcons.arrow_down2}</div>
                </div>

                {
                    open &&
                    <div className={style.list} ref={ref}>
                        {
                            list.map(({icon, label, onClick}, index) => (
                                <button key={index}
                                        className={style.listItem}
                                        onClick={() => {
                                            onClick();
                                            setOpen(false);
                                        }}
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
})

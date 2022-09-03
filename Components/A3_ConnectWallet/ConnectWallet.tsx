import style from "./ConnectWallet.module.scss"
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import clsx from "clsx";
import {useRef} from "react";
import {useOutsideClick} from "../../hooks/useOutsideClick";
import {svgIcons} from "../../assets/svgIcons";
import {walletsData} from "./walletsData";

export const ConnectWallet = observer(() => {
    const {connectWallet, setConnectWallet, setLogin} = useStore();
    const ref = useRef<HTMLDivElement>(null!)
    useOutsideClick(ref, () => setConnectWallet(false));

    return (
        <div className={clsx({
            [style.connectWallet]: true,
            [style.connectWallet_show]: connectWallet,
        })}>
            <div className={style.inner}
                 ref={ref}
            >
                <button className={style.closeBtn}
                        onClick={() => setConnectWallet(false)}
                >
                    {svgIcons.close}
                </button>
                <p className={style.title}>Connect Wallet</p>

                <div className={style.wallets}>
                    {
                        walletsData.map(({icon, title, description}, index) => (
                            <div className={style.walletItem} key={index}>
                                <div className={style.leftBlock}>
                                    <div className={style.icon}>{icon}</div>
                                    <div className={style.texts}>
                                        <p className={style.walletTitle}>{title}</p>
                                        <p className={style.description}>{description}</p>
                                    </div>
                                </div>
                                <button className={style.arrowBtn}
                                        onClick={() => {
                                            setLogin(true);
                                            setConnectWallet(false)
                                        }}
                                >
                                    {svgIcons.arrow_right}
                                </button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
})
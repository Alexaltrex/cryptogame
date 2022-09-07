import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import {useRef} from "react";
import {useOutsideClick} from "../../hooks/useOutsideClick";
import clsx from "clsx";
import {svgIcons} from "../../assets/svgIcons";
import style from "./DisclaimerModal.module.scss"

export const DisclaimerModal = observer(() => {
    const {disclaimer, setDisclaimer} = useStore();
    const ref = useRef<HTMLDivElement>(null!)
    useOutsideClick(ref, () => setDisclaimer(false));

    return (
        <div className={clsx({
            [style.disclaimerModal]: true,
            [style.disclaimerModal_show]: disclaimer,
        })}>
            <div className={style.inner} ref={ref}>

                <button className={style.closeBtn}
                        onClick={() => setDisclaimer(false)}
                >
                    {svgIcons.close}
                </button>

                <p className={style.title}>
                    Disclaimer
                </p>

                <p className={style.description}>
                    You take all the responsibility for your actions. By interacting with the smart contract, you agree
                    to the rules of the game and understand that all blockchain transactions are irrevocable.
                    The GAME sticks to the basic principles of smart contract, such as decentralization, transparency of
                    each transaction, no fees, no fund accumulation of any kind.
                </p>

            </div>
        </div>
    )
})
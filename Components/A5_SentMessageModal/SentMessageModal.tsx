import style from "./SentMessageModal.module.scss"
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import {useRef} from "react";
import {useOutsideClick} from "../../hooks/useOutsideClick";
import {svgIcons} from "../../assets/svgIcons";
import clsx from "clsx";
import {ButtonOutlined} from "../X_Common/ButtonOutlined/ButtonOutlined";


export const SentMessageModal = observer(() => {
    const {sentMessage, setSentMessage} = useStore();
    const ref = useRef<HTMLDivElement>(null!)
    useOutsideClick(ref, () => setSentMessage(false));

    const onOkHandler = () => {
        console.log("ok")
        setSentMessage(false)
    }

    return (
        <div className={clsx({
            [style.sentMessageModal]: true,
            [style.sentMessageModal_show]: sentMessage,
        })}>
            <div className={style.inner} ref={ref}>

                <button className={style.closeBtn}
                        onClick={() => setSentMessage(false)}
                >
                    {svgIcons.close}
                </button>

                <p className={style.title}>Your message has been sent!</p>

                <p className={style.description}>We will reply to you as soon as possible</p>

                <img src="/png/sent message modal/logo.png" alt="" className={style.logo}/>

                <ButtonOutlined label="OK"
                                className={style.okBtn}
                                onClick={onOkHandler}
                />

            </div>
        </div>
    )
})
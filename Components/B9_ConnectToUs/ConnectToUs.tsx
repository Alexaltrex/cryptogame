import style from "./ConnectToUs.module.scss"
import {ButtonOutlined} from "../X_Common/ButtonOutlined/ButtonOutlined";
import {svgIcons} from "../../assets/svgIcons";

export const ConnectToUs = () => {
    return (
        <div className={style.connectToUs}>
            <div className={style.inner}>
                <p className={style.title}>
                    Connect to us in <span>Telegram</span>
                </p>
                <p className={style.text}>Stay informed. News, Promo, Level updates etc.</p>

                <ButtonOutlined label="Connect"
                                icon={svgIcons.right_arrow}
                                animateIcon={false}
                                className={style.btn}
                />
            </div>

        </div>
    )
}
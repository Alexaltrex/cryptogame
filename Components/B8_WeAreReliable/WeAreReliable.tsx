import style from "./WeAreReliable.module.scss"
import {svgIcons} from "../../assets/svgIcons";
import {ButtonOutlined} from "../X_Common/ButtonOutlined/ButtonOutlined";
import {CopyButton} from "../X_Common/CopyButton/CopyButton";

export const WeAreReliable = () => {
    const account = "0x41eaD2756aDEawdas122SF41eaD2756aDEawdas122SF";
    const onCopy = () => navigator.clipboard.writeText(account);

    return (
        <div className={style.weAreReliable}>
           <div className={style.inner}>

                <div className={style.firstBlock}>
                    <p className={style.title}>We are reliable Smart Contract</p>

                    <p className={style.text}>The crypto game is based on a smart contract:</p>

                    <div className={style.accountWrapper}>
                        <p className={style.account}>
                            {account}
                        </p>

                        <CopyButton className={style.copyBtn}
                                             onClick={onCopy}
                        />

                        <button className={style.linkBtn}>
                            {svgIcons.link2}
                        </button>
                    </div>

                    <ButtonOutlined label="Download Promo"
                                    icon={svgIcons.download}
                                    className={style.downloadBtn}
                                    animateIcon={false}
                    />
                </div>

               <div className={style.secondBlock}>
                   <img src="/png/we are reliable/img.png" alt="" className={style.card}/>
                   <button className={style.playBtn}>
                       {svgIcons.play}
                   </button>
                   <p className={style.text}>Play promo video</p>
                   <img src="/png/we are reliable/label_m.png" alt="" className={style.labelMobile}/>
                   <img src="/png/we are reliable/label_d.png" alt="" className={style.labelDesktop}/>
               </div>
           </div>
        </div>
    )
}
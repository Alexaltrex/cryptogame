import style from "./WeAreReliable.module.scss"
import {svgIcons} from "../../assets/svgIcons";
import {useRef, useState} from "react";
import {ButtonOutlined} from "../X_Common/ButtonOutlined/ButtonOutlined";
import {ButtonCustom} from "../X_Common/ButtonCustom/ButtonCustom";
import {LangSelector} from "../X_Common/LangSelector/LangSelector";
import clsx from "clsx";




export const WeAreReliable = () => {
    const ref = useRef<HTMLParagraphElement>(null!);
    const account = "0x55eaD2756aDEawdas122SF41eaD2756aDEawdas122SF";
    const onCopy = () => navigator.clipboard.writeText(account);
    const [lang, setLang] = useState('EN');

    return (
        <div className={style.weAreReliable}>
            <div className={style.inner}>

                <div className={style.firstBlock}>
                    <p className={style.title}>We are reliable Smart Contract</p>

                    <p className={clsx(style.text, style.text_1)}>The crypto game is based on a smart contract:</p>

                    <div className={style.accountWrapper}>
                        <p className={style.account}
                           ref={ref}
                        >
                            {account}
                        </p>
                        <button className={style.copyBtn}
                                onClick={onCopy}
                        >
                            {svgIcons.copy}
                        </button>
                        <button className={style.linkBtn}>
                            {svgIcons.link2}
                        </button>
                    </div>

                        <p className={clsx(style.text, style.text_2)}>Presentation and Brandbook:</p>
                        <div className={style.selectAndButton}>

                            <LangSelector lang={lang}
                                          setLang={(lang: string) =>  setLang(lang)}
                            />

                            <ButtonCustom label="Download Promo"
                                icon={svgIcons.download}
                                className={style.downloadBtn}
                                animateIcon={false}

                            />

                        </div>

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
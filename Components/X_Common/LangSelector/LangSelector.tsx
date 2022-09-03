import style from "./LangSelector.module.scss";
import {FC, useRef, useState} from "react";
import clsx from "clsx";
import {svgIcons} from "../../../assets/svgIcons";
import {useOutsideClick} from "../../../hooks/useOutsideClick";

const langs = {
    EN: {
        flagSrc: "/png/lang selector/EN.png"
    },
    RU: {
        flagSrc: "/png/lang selector/EN.png"
    }
}


interface ILangSelector {
    lang: string
    setLang: (lang: string) => void
    className?: string
}

export const LangSelector: FC<ILangSelector> = ({
                                                    lang,
                                                    setLang,
                                                    className
                                                }) => {
    const [open, setOpen] = useState(false);
    const [hover, setHover] = useState(false);

    const ref = useRef<HTMLDivElement>(null!);
    const outsideClickHandler = () => {
        setOpen(false)
    }
    useOutsideClick(ref, outsideClickHandler)

    return (
        <div className={clsx(
            style.langSelector,
            Boolean(className) && className,
            (hover || open) && style.langSelector_hover
        )}
        >
            <div className={style.inner}
                 onClick={() => setOpen(true)}
                 onMouseEnter={() => setHover(true)}
                 onMouseLeave={() => setHover(false)}
            >
                <div className={style.left}>
                    {/*@ts-ignore*/}
                    <img src={langs[lang].flagSrc} alt="" className={style.flag}/>
                    <p className={style.lang}>{lang}</p>
                </div>

                <div className={clsx({
                    [style.arrowIcon]: true,
                    [style.arrowIcon_open]: open,
                })}>
                    {svgIcons.arrow_down}
                </div>
            </div>


            {
                open &&
                <div className={style.list}
                     ref={ref}
                >
                    {
                        Object.keys(langs).map((lang, index) => (
                            <div className={style.item}
                                 key={index}
                                 onClick={() => {
                                     setLang(lang);
                                     setOpen(false)
                                 }}
                            >
                                {/*@ts-ignore*/}
                                <img src={langs[lang].flagSrc} alt="" className={style.flag}/>
                                <p className={style.lang}>{lang}</p>
                            </div>
                        ))
                    }
                </div>
            }

        </div>
    )
}
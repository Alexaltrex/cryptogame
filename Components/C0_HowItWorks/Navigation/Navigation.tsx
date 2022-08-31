import style from "./Navigation.module.scss"
import {svgIcons} from "../../../assets/svgIcons";
import {useState} from "react";
import {useStore} from "../../../store/useStore";
import {observer} from "mobx-react-lite";
import {contentLinks} from "../HowItWorks";
import clsx from "clsx";
import Link from "next/link";

//contentLinks


export const Navigation = observer(() => {
    const [open, setOpen] = useState(false);
    const {activeLink, setActiveLink} = useStore();

    return (
        <div className={style.navigation}>

            <div className={style.header}>
                {svgIcons.list}
                <p className={style.title}>Navigation</p>
            </div>

            <div className={style.list}>
                {
                    open ? (
                        <>
                            {
                                contentLinks.map(link => (
                                    <Link href={`#${link}`} key={link}>
                                        <a className={clsx({
                                            [style.link]: true,
                                            [style.link_active]: link === activeLink,
                                        })}
                                           onClick={() => {
                                               setActiveLink(link)
                                               setOpen(false)
                                           }}
                                        >
                                            {link}
                                        </a>
                                    </Link>




                                    // <p key={link}
                                    //    className={clsx({
                                    //        [style.link]: true,
                                    //        [style.link_active]: link === activeLink,
                                    //    })}
                                    //    onClick={() => {
                                    //        setActiveLink(link)
                                    //        setOpen(false)
                                    //    }}
                                    // >
                                    //     {link}
                                    // </p>
                                ))
                            }
                        </>
                    ) : (
                        <p className={clsx(style.link, style.link_active)}>{activeLink}</p>
                    )
                }
                <button className={clsx({
                    [style.btn]: true,
                    [style.btn_open]: open,
                })}
                        onClick={() => setOpen(!open)}
                >
                    {svgIcons.arrow_down}
                </button>

            </div>
        </div>
    )
})
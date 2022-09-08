import style from "./TableOfContent.module.scss"
import {contentLinks} from "../HowItWorks";
import Link from "next/link";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/useStore";
import clsx from "clsx";
import {ButtonCustom} from "../../X_Common/ButtonCustom/ButtonCustom";

export const TableOfContent = observer(() => {
    const {activeLink, setActiveLink} = useStore();
    const index = contentLinks.findIndex(el => el === activeLink);

    return (
        <aside className={style.tableOfContent}>
            <div className={style.header}>
                Table of contents
            </div>
            <div className={style.links}>
                {
                    contentLinks.map((link, index) => (
                        <Link href={`/howItWorks#${link}`} key={index}>
                            <a className={clsx({
                                [style.link]: true,
                                [style.link_active]: link === activeLink,
                            })}
                               onClick={() => setActiveLink(link)}
                            >
                                {link}
                            </a>
                        </Link>
                    ))
                }
                <div className={style.mover}
                     style={{top: ` ${26 + 41 * index}px`}}
                />
            </div>
            <ButtonCustom label="Join the Game" className={style.joinBtn}/>
        </aside>
    )
})
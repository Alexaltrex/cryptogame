import style from "./OpenLevel.module.scss"
import {svgIcons} from "../../assets/svgIcons";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import {useRef} from "react";
import {useOutsideClick} from "../../hooks/useOutsideClick";
import clsx from "clsx";

export const OpenLevel = observer(() => {
    const {openLevel, setOpenLevel} = useStore();
    const ref = useRef<HTMLDivElement>(null!)
    useOutsideClick(ref, () => setOpenLevel(false));

    return (
        <div className={clsx({
                 [style.openLevel]: true,
                 [style.openLevel_show]: openLevel,
             })}
        >

            <div className={style.inner}
                 ref={ref}
            >
                <button className={style.closeBtn}
                        onClick={() => setOpenLevel(false)}
                >
                    {svgIcons.close}
                </button>

                <p className={style.title}>Opening the Level</p>
                <p className={style.text}>
                    You're going to open <span>Level 3</span> for <span>0.075 BNB</span>, right?
                </p>

                <div className={style.btns}>
                    <button onClick={() => {
                        setOpenLevel(false)
                    }}>
                        No
                    </button>
                    <button onClick={() => {
                        setOpenLevel(false)
                    }}>
                        Yes, open!
                    </button>
                </div>

            </div>
        </div>
    )
})
import style from "./ClearRules.module.scss"
import {H2} from "../X_Common/H2/H2";
import animationData from "../../assets/json/anim.json";
import Lottie, {useLottie} from "lottie-react";
import {ButtonOutlined} from "../X_Common/ButtonOutlined/ButtonOutlined";
import {svgIcons} from "../../assets/svgIcons";
import {useEffect, useRef, useState} from "react";
import useIntersectionObserver from "@react-hook/intersection-observer";

export const ClearRules = () => {
    const options = {
        animationData: animationData,
        loop: false,
        autoplay: false,
    };
    const {View, play, stop} = useLottie(options);

    const onRefreshHandler = () => {
        stop();
        play();
    }

    const ref = useRef<HTMLDivElement>(null!);
    const {isIntersecting} = useIntersectionObserver(
        ref,
        {
            threshold: 1
        }
    );
    const [isIntersected, setIsIntersected] = useState(false);
    useEffect(() => {
        if (isIntersecting) {
            setIsIntersected(true);
        }
    }, [isIntersecting]);

    useEffect(() => {
        if (isIntersected) {
            play();
        }
    }, [isIntersected])

    return (
        <div className={style.clearRules}>
            <div className={style.inner}>
                <div className={style.first}>
                    <H2 className={style.title}>Clear rules</H2>
                    <div className={style.description}>
                        <p>There are 10 levels available in the game, which open according to the schedule.</p>
                        <br/>
                        <p>By opening a level, you start to make a profit while it is filled with players. With each
                            player who enters, you get a profit until the level is filled to the end.</p>
                        <br/>
                        <p>The more levels you open, the more profit you will receive.</p>
                    </div>
                    <ButtonOutlined label="More details" className={style.btn}/>
                </div>
                <div className={style.second}>
                    <div className={style.wrapper} ref={ref}>
                        <button className={style.refreshBtn}
                                onClick={onRefreshHandler}
                        >
                            {svgIcons.refresh}
                        </button>
                        <>{View}</>
                    </div>
                    <ButtonOutlined label="More details" className={style.btnMobile}/>
                </div>

            </div>
        </div>
    )
}
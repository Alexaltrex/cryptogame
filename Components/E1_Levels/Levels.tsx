import style from "./Levels.module.scss"
import {H3} from "../X_Common/H3/H3";
import {levelsData} from "./levelsData";
import {LevelCard} from "./LevelCard/LevelCard";
import {useState} from "react";
import clsx from "clsx";

export const Levels = () => {
    const [showMore, setShowMore]  = useState(false);

    return (
        <div className={style.levels}>
            <div className={style.inner}>

                <H3>CryptoGame Levels</H3>

                <div className={clsx({
                    [style.cards]: true,
                    [style.cards_showMore]: showMore,
                })}>
                    <div className={style.cards_mobile}>
                        {
                            (
                                showMore ? levelsData : levelsData.slice(0,6)
                            )
                                .map((card, index) => (
                                    <LevelCard key={index} {...card}/>
                                ))
                        }
                        {
                            !showMore &&
                            <div className={style.cardWrapper}>
                                <LevelCard  {...levelsData[6]}/>
                            </div>
                        }

                    </div>
                    <div className={style.cards_desktop}>
                        {
                            levelsData
                                .slice(0,10)
                                .map((card, index) => (
                                    <LevelCard key={index} {...card}/>
                                ))
                        }
                    </div>

                </div>

                {
                    !showMore &&
                    <button className={style.moreBtn}
                         onClick={() => setShowMore(true)}
                >
                    Load more
                </button>
                }
            </div>
        </div>
    )
}
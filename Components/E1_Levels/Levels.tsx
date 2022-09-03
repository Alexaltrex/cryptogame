import style from "./Levels.module.scss"
import {H3} from "../X_Common/H3/H3";
import {levelsData} from "./levelsData";
import {LevelCard} from "./LevelCard/LevelCard";

export const Levels = () => {
    return (
        <div className={style.levels}>
            <div className={style.inner}>

                <H3>CryptoGame Levels</H3>

                <div className={style.cards}>
                    <div className={style.cards_mobile}>
                        {
                            levelsData
                                .slice(0,7)
                                .map((card, index) => (
                                    <LevelCard key={index} {...card}/>
                                ))
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
            </div>
        </div>
    )
}
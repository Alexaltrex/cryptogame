import * as React from "react";
import style from "./TopPlayers.module.scss"
import {H2} from "../X_Common/H2/H2";
import {topPlayersCards} from "./topPlayersCards";
import clsx from "clsx";
import {svgIcons} from "../../assets/svgIcons";

export const TopPlayers = () => {
    return (
        <div className={style.topPlayers}>
            <div className={style.inner}>
                <H2>Top players</H2>
                <div className={style.cards}>
                    {/*<div className={style.borders}></div>*/}
                    {
                        topPlayersCards.map(({id, playsFor, balance,openLevels, link}, index) => (
                            <div key={index}
                                 className={clsx({
                                [style.card]: true,
                                [style.card_first]: index === 0,
                            })}>
                                <div className={style.top}>
                                   <div className={style.top_left}>
                                       <p className={style.number}>{`#${index + 1}`}</p>
                                       <p className={style.id}>{`ID ${id}`}</p>
                                       <p className={style.playsFor}>
                                           <span>Plays for </span><span>{`${playsFor} days`}</span>
                                       </p>
                                   </div>
                                    <div className={style.top_right}>
                                        <p className={style.label}>Balance</p>
                                        <div className={style.valueBlock}>
                                            <p>{balance}</p>
                                            {svgIcons.balance}
                                        </div>
                                    </div>
                                </div>
                                <div className={style.bottom}>
                                    <p className={style.label}>Open levels</p>
                                    <div className={style.levels}>
                                        {
                                            (new Array(10).fill(0)).map((el, index) => (
                                                <div className={clsx({
                                                    [style.item]: true,
                                                    [style.item_fill]: index + 1 <= openLevels,
                                                })}
                                                    key={index}
                                                />


                                            ))
                                        }
                                    </div>
                                    <a href={link}
                                       className={style.link}
                                       target="_blank"
                                       rel="noopener nofollow noreferrer"
                                    >
                                        {svgIcons.share}
                                    </a>
                                </div>
                                <div className={style.popover}>
                                    <a href={link}
                                       className={style.link}
                                       target="_blank"
                                       rel="noopener nofollow noreferrer"
                                    >
                                        More
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
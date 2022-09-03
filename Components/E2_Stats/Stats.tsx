import {useState} from "react";
import style from "./Stats.module.scss";
import * as React from "react";
import clsx from "clsx";
import {tabsItems} from "./tabsItems";
import {H2} from "../X_Common/H2/H2";
import {H3} from "../X_Common/H3/H3";

export const Stats = () => {
    const [selected, setSelected] = useState('Total');

    return (
        <div className={style.stats}>

            <div className={style.titleContainer}>
                <div className={style.titleInner}>
                    <H3>Player’s stats</H3>
                </div>
            </div>


            <div className={style.block}>
                <img src={'/png/tabs.png'} alt="" className={style.tabsImg}/>

                <div className={style.menu}>
                    <div className={style.inner}>
                        {
                            Object.keys(tabsItems).map(key => (
                                <p key={key}
                                   className={clsx({
                                       [style.item]: true,
                                       [style.item_selected]: key === selected,
                                   })}
                                   onClick={() => setSelected(key)}
                                >
                                    <span>{key}</span>
                                </p>
                            ))
                        }
                    </div>
                </div>

                <div className={style.values}>
                    <div className={style.inner}>
                        {
                            // @ts-ignore
                            Object.values(tabsItems[selected].values).map(({value, text}, index) => (
                                    <div key={index}
                                         className={style.valuesItem}
                                    >
                                        <p className={style.value}>{value}</p>
                                        <p className={style.text}>{text}</p>
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
            </div>


        </div>
    )
}
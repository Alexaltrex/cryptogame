import * as React from "react";
import style from "./Tabs.module.scss";
import {useState} from "react";
import {tabsItems} from "./tabsItems";
import clsx from "clsx";



export const Tabs = () => {
    const [selected, setSelected] = useState('Total');

    return (
        <div className={style.tabs}>

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
    )
}
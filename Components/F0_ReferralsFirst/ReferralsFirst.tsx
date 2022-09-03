import style from "./ReferralsFirst.module.scss"
import {InvitedBlock} from "../X_Common/InvitedBlock/InvitedBlock";
import {useState} from "react";
import * as React from "react";
import clsx from "clsx";
import {tabsItems} from "./tabsItems";

export const ReferralsFirst = () => {
    const [selected, setSelected] = useState('Total');

    return (
        <div className={style.referralsFirst}>
            <div className={style.inner}>

                <div className={style.invitedBlockWrapper}>
                    <InvitedBlock label="Your invite link"
                                  value="https://cg.spase/?invite_id06120612061206120612"
                                  className={style.invitedBlock}
                    />
                </div>


                <div className={style.tabsWrapper}>

                    <img src="/png/referralsFirst.png" alt="" className={style.back}/>

                    <div className={style.menu}>
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

                    <div className={style.values}>
                        <div className={style.valuesInner}>
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
        </div>
    )
}
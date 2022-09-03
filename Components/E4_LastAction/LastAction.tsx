import { H3 } from "../X_Common/H3/H3"
import style from "./LastAction.module.scss"
import {actionData} from "./actionData";
import {svgIcons} from "../../assets/svgIcons";
import clsx from "clsx";
import React from "react";

export const LastAction = () => {
    return (
        <div className={style.lastAction}>
           <div className={style.inner}>
                <H3>Your last actions</H3>

               <div className={style.table}>

                   <div className={style.head}>
                       {
                           ["Event", "Date", "Profit BNB"].map((label, index) => (
                               <div className={style.headCell} key={index}>
                                   {label}
                               </div>
                           ))
                       }
                   </div>

                   <div>
                       {
                           actionData.map(({icon, profit, event, date}, index) => (
                               <React.Fragment key={index}>

                                   <div className={clsx(style.row_mobile, index === 0 && style.row_select)}>

                                       <div className={style.cell}>
                                           <div className={style.iconWrapper}>{icon}</div>
                                       </div>

                                       <div className={style.cell}>
                                           <p className={style.label}>Profit BNB</p>
                                           <div className={style.profitWrapper}>
                                               <p className={style.value}>{profit}</p>
                                               {svgIcons.balance}
                                           </div>
                                       </div>

                                       <div className={style.cell}>
                                           <p className={style.label}>Event</p>
                                           <p className={style.value}>{event}</p>
                                       </div>

                                       <div className={style.cell}>
                                           <p className={style.label}>Date</p>
                                           <p className={style.value}>{date}</p>
                                       </div>
                                   </div>

                                   <div className={clsx(style.row_desktop, index === 0 && style.row_select)}>
                                       <div className={style.cell}>
                                           <div className={style.iconWrapper}>{icon}</div>
                                           <p className={style.value}>{event}</p>
                                       </div>
                                       <div className={style.cell}>
                                           <p className={style.value}>{date}</p>
                                       </div>
                                       <div className={style.cell}>
                                           <div className={style.profitWrapper}>
                                               <p className={style.value}>{profit}</p>
                                               {svgIcons.balance}
                                           </div>
                                       </div>
                                   </div>

                               </React.Fragment>


                           ))
                       }
                   </div>

               </div>

               <button className={style.loadBtn}>Load more</button>
           </div>
        </div>
    )
}
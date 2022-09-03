import style from "./YourReferals.module.scss"
import {H3} from "../X_Common/H3/H3";
import {yourReferralsData} from "./yourReferralsData";
import {ReferralTableRow} from "./ReferralTableRow/ReferralTableRow";
import React from "react";

export const YourReferrals = () => {
    return (
        <div className={style.yourReferrals}>
            <div className={style.inner}>
                <H3>Your referals</H3>

                <div className={style.table}>

                    <div className={style.label}>Activity history</div>

                    <div className={style.head}>
                        {
                            ["ID","BNB Bonus","Open levels","Invite date"]
                                .map((label, index) => (
                                    <div key={index} className={style.headCell}>
                                        {label}
                                    </div>
                                ))
                        }
                    </div>

                    <div className={style.table_mobile}>
                        {
                            yourReferralsData
                                .slice(0, 5)
                                .map((row, index) => <ReferralTableRow key={index} {...row} />)
                        }
                    </div>

                    <div className={style.table_desktop}>
                        {
                            yourReferralsData
                                .slice(0, 8)
                                .map((row, index) => <ReferralTableRow key={index} {...row} />)
                        }
                    </div>

                </div>

                <button className={style.loadBtn}>Load more</button>
            </div>
        </div>
    )
}
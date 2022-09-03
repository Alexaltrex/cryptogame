import {FC} from "react";
import {IReferralTableRow} from "../yourReferralsData";
import style from "./ReferralTableRow.module.scss"
import {svgIcons} from "../../../assets/svgIcons";

export const ReferralTableRow: FC<IReferralTableRow> = ({
                                                            id,
                                                            bonus,
                                                            openLevels,
                                                            inviteDate,
}) => {
    return (
        <div className={style.referralTableRow}>

            <div className={style.cell}>
                <p className={style.label}>ID</p>
                <p className={style.value}>{id}</p>
            </div>

            <div className={style.cell}>
                <p className={style.label}>BNB Bonus</p>
                <div className={style.balance}>
                    <p className={style.value}>{bonus}</p>
                    {svgIcons.balance}
                </div>

            </div>

            <div className={style.cell}>
                <p className={style.label}>Open levels</p>
                <p className={style.value}>{openLevels}<span>/4</span></p>
            </div>

            <div className={style.cell}>
                <p className={style.label}>Invite date</p>
                <div className={style.date}>
                    <p className={style.value}>{inviteDate}</p>
                    <div className={style.link}>{svgIcons.link}</div>
                </div>
            </div>

        </div>
    )
}
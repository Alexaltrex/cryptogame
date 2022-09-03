import {FC} from "react";
import style from "./InvitedBlock.module.scss";
import {svgIcons} from "../../../assets/svgIcons";
import clsx from "clsx";

interface IInvitedBlock {
    label: string
    value: string
    onClick?: () => void
    className?: string
}

export const InvitedBlock: FC<IInvitedBlock> = ({
                                                    label,
                                                    value,
                                                    onClick,
                                                    className
}) => {

    const onCopy = () => navigator.clipboard.writeText(value)

    return (
        <div className={clsx(style.invitedBlock, Boolean(className) && className)}>
            <p className={style.id}>ID 32124</p>
            <p className={style.idDescription}>Invited by ID 250997 2 weeks ago</p>

            <div className={style.middle}>

                <div className={style.left}>
                    <p className={style.label}>Total BNB profit</p>
                    <div className={style.profitWrapper}>
                        <p>24.3953</p>
                        {svgIcons.balance}
                    </div>
                </div>

                <div className={style.right}>
                    <p className={style.label}>BNB Balance</p>
                    <div className={style.profitWrapper}>
                        <p>24.3953</p>
                        {svgIcons.balance}
                    </div>
                </div>

            </div>

            <div className={style.bottom}>
                <p className={style.label}>{label}</p>

                <div className={style.accountBlock}>
                    <p className={style.value}>
                        {value}
                    </p>
                    <button className={style.copyBtn}
                            onClick={onCopy}
                    >
                        {svgIcons.copy}
                    </button>
                    {
                        onClick &&
                        <button className={style.linkBtn}
                                onClick={onClick}
                        >
                            {svgIcons.link2}
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}
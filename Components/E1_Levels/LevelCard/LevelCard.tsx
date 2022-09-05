import {FC, useState} from "react";
import {ILevelCard, StatusEnum} from "../../../types/types";
import style from "./LevelCard.module.scss"
import clsx from "clsx";
import {Dot} from "../Dot/Dot";
import {svgIcons} from "../../../assets/svgIcons";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/useStore";
import {ClickAwayListener, styled, Tooltip, TooltipProps} from "@mui/material";
import tooltipClasses from "@mui/material/Tooltip/tooltipClasses";

export const LevelCard: FC<ILevelCard> = observer(({
                                              level,
                                              bonus,
                                              info,
                                              payment,
                                              profit,
                                              status
}) => {
    const {setOpenLevel} = useStore();
    const [open, setOpen] = useState(false);

    return (
        <div className={style.levelCard}
        >

            <div className={clsx({
                [style.level]: true, // closed
                [style.level_blocked]: status === StatusEnum.Blocked,
                [style.level_active]: status === StatusEnum.Active,
            })}>
                {`Lvl ${level}`}
            </div>
            <div className={style.top}>

                <div className={style.block}>
                    <p className={style.label}>Status</p>
                    <p className={clsx({
                        [style.value]: true,
                        [style.value_active]: status === StatusEnum.Active,
                        [style.value_blocked]: status === StatusEnum.Blocked,
                    })}>
                        {status}
                    </p>
                </div>

                <div className={style.block}>
                    <p className={style.label}>Lvl profit, BNB</p>
                    <p className={style.value}>{status === StatusEnum.Closed ? "-" : profit}</p>
                </div>

                <div className={style.block}>

                    <div className={style.tooltipWrapperMobile}>
                        <ClickAwayListener onClickAway={() => setOpen(false)}>
                                <HtmlTooltip
                                    PopperProps={{
                                        disablePortal: true,
                                    }}
                                    onClose={() => setOpen(false)}
                                    open={open}
                                    disableFocusListener
                                    disableHoverListener
                                    disableTouchListener
                                    title={
                                        <div className={style.tooltipBlock}>
                                            <button className={style.closeBtn}
                                                    onClick={() => setOpen(false)}
                                            >
                                                {svgIcons.close}
                                            </button>
                                            <p className={style.tooltipTitle}>Lorem Ipsum </p>
                                            <p className={style.tooltipText}>
                                                is simply dummy text of the printing and typesetting industry.
                                            </p>
                                        </div>
                                    }
                                    placement="top-start"
                                    arrow
                                >
                                    <p className={clsx(style.label, style.label_dashed)}
                                       onClick={() => setOpen(true)}
                                    >
                                        Payment
                                    </p>
                                </HtmlTooltip>
                        </ClickAwayListener>
                    </div>

                    <div className={style.tooltipWrapperDesktop}>
                        <HtmlTooltip disableFocusListener
                                 disableTouchListener
                                 title={
                                     <div className={style.tooltipBlock}>
                                         <button className={style.closeBtn}
                                                 onClick={() => setOpen(false)}
                                         >
                                             {svgIcons.close}
                                         </button>
                                         <p className={style.tooltipTitle}>Lorem Ipsum </p>
                                         <p className={style.tooltipText}>
                                             is simply dummy text of the printing and typesetting industry.
                                         </p>
                                     </div>
                                 }
                                 placement="top-start"
                                 arrow
                        >
                            <p className={clsx(style.label, style.label_dashed)}>
                                Payment
                            </p>
                        </HtmlTooltip>
                    </div>


                    <div className={style.dots}>
                        {
                            [
                                payment === 0 ? 0 : payment === 1 ? 1 : 2,
                                payment <= 2 ? 0 : payment === 3 ? 1 : 2,
                                payment <= 4 ? 0 : payment === 5 ? 1 : 2,
                            ].map((st, index) => (
                                <Dot key={index}
                                     status={st}
                                     className={style.dot}
                                />
                                )
                            )
                        }
                    </div>
                </div>

                <div className={style.block}>
                    <p className={style.label}>Ref bonus, BNB</p>
                    <p className={style.value}>{status === StatusEnum.Closed ? "-" : bonus}</p>
                </div>
            </div>

            <div className={clsx({
                [style.bottom]: true,
                [style.bottom_blocked]: status === StatusEnum.Blocked,
                [style.bottom_active]: status === StatusEnum.Active,
            })}
                 onClick={() => setOpenLevel(true)}
            >
                {info}{status === StatusEnum.Active && svgIcons.balance}
            </div>
        </div>
    )
})

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        padding: 0,
        borderRadius: "7px",
        border: "none",
    },
}));
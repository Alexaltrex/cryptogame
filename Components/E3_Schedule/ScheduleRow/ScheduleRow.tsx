import {IScheduleRow, ScheduleStatusEnum} from "../scheduleData";
import style from "./ScheduleRow.module.scss"
import clsx from "clsx";
import {FC} from "react";
import {svgIcons} from "../../../assets/svgIcons";

export const labels = [
    "Level",
    "Status",
    "Price BNB",
    "Date",
]

// interface IScheduleRowComponent extends IScheduleRow {
//     selected: boolean
//     onClick: () => void
// }

export const ScheduleRow: FC<IScheduleRow> = (row) => {
    return (
        <div className={clsx({
            [style.scheduleRow]: true,
            [style.scheduleRow_selected]: row.selected,
        })}
             //onClick={onClick}
        >
            {
                Object.values(row).map((value, index) => (
                    <div className={style.cell} key={index}>
                        <p className={style.label}>{labels[index]}</p>
                        <div className={clsx({
                            [style.value]: true,
                            [style.value_disable]: row.status === ScheduleStatusEnum.Disable,
                        })}>
                            <p>{value}</p>
                            {index === 2 && row.status !== ScheduleStatusEnum.Disable && svgIcons.balance}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
import {FC} from "react";
import style from "./Dot.module.scss"
import clsx from "clsx";

interface IDot {
    status: number
    className?: string
}

export const Dot: FC<IDot> = ({status, className}) => {
    return (
        <div className={clsx({
            [style.dot]: true,
            [style.dot_half]: status === 1,
            [style.dot_full]: status === 2,
        }, Boolean(className) && className)}>

        </div>
    )
}
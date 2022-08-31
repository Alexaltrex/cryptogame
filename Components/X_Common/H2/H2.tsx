import {FC} from "react";
import style from "./H2.module.scss"
import clsx from "clsx";

interface IH2 {
    className?: string
    children: string
}

export const H2: FC<IH2> = ({className, children}) => {
    return (
        <h2 className={clsx(style.h2, Boolean(className) && className)}>
            {children}
        </h2>
    )
}
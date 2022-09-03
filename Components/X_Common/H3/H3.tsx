import {FC} from "react";
import style from "./H3.module.scss"
import clsx from "clsx";

interface IH3 {
    className?: string
    children: string
}

export const H3: FC<IH3> = ({className, children}) => {
    return (
        <h3 className={clsx(style.h3, Boolean(className) && className)}>
            {children}
        </h3>
    )
}
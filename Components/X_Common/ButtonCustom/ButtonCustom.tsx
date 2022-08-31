import {FC} from "react";
import clsx from "clsx";
import style from "./ButtonCustom.module.scss"
import * as React from "react";

type ButtonCustomType = {
    label: string
    className?: string
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const ButtonCustom: FC<ButtonCustomType> = ({label, className, ...props}) => {
    return (
        <button className={clsx(style.buttonCustom, Boolean(className) && className)}
                {...props}
        >
            <span>{label}</span>
        </button>
    )
}
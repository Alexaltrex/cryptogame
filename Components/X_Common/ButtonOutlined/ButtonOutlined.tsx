import {FC} from "react";
import * as React from "react";
import style from "./ButtonOutlined.module.scss"
import clsx from "clsx";

type ButtonOutlinedType = {
    label: string
    icon?: JSX.Element
    className?: string
    animateIcon?: boolean
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const ButtonOutlined: FC<ButtonOutlinedType> = ({
                                                           label,
                                                           icon,
                                                           className,
                                                           animateIcon = true
                                                       }) => {
    return (
        <button className={clsx({
            [style.buttonOutlined]: true,
            [style.buttonOutlined_animateIcon]: animateIcon,
        }, Boolean(className) && className)}>
            <span>{label}</span>
            {
                icon && (
                    <>
                        {icon}
                    </>
                )

            }
        </button>
    )
}
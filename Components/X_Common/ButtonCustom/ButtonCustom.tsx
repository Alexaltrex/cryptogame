import {FC} from "react";
import clsx from "clsx";
import style from "./ButtonCustom.module.scss"
import * as React from "react";

type ButtonCustomType = {
    label: string
    className?: string
    icon?: JSX.Element
    animateIcon?: boolean
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const ButtonCustom: FC<ButtonCustomType> = ({
                                                       label,
                                                       className,
                                                       icon,
                                                       animateIcon = true,
                                                       ...props
}) => {
    return (
        <button className={clsx({
                    [style.buttonCustom]: true,
                    [style.buttonCustom_animateIcon]: animateIcon,
                }, Boolean(className) && className)}


                {...props}
        >
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
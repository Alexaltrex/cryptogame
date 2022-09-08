import {FC, useState} from "react";
import * as React from "react";
import style from "./CopyButton.module.scss"
import clsx from "clsx";
import {svgIcons} from "../../../assets/svgIcons";

interface ICopyButton {
    className?: string
    onClick: () => void
}

export const CopyButton: FC<ICopyButton> = ({className, onClick}) => {
    const [showSecondIcon, setShowSecondIcon] = useState(false);


    const onClickHandler = () => {
        onClick();
        setShowSecondIcon(true);
        setTimeout(() => {
            setShowSecondIcon(false)
        }, 2000)
    }


    return (
        <button className={clsx({
            [style.copyButton]: true,
            [style.copyButton_done]: showSecondIcon,
        }, Boolean(className) && className)}
                onClick={onClickHandler}

        >
            {showSecondIcon ? svgIcons.copy_done : svgIcons.copy}
        </button>
    )
}
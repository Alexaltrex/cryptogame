import {FC, useEffect, useState} from "react";
import clsx from "clsx";
import * as React from "react";
import style from "./AnimatedLink.module.scss"

interface IAnimatedLink {
       children: React.ReactNode
    className?: string
    enable?: boolean
}

export const AnimatedLink: FC<IAnimatedLink> = ({

                                                    children,
                                                    className,
                                                    enable = true
                                                }) => {
    const [hover, setHover] = useState(false);
    const [enter, setEnter] = useState(false);
    const [leave, setLeave] = useState(false);
    const [mouseEvent, setMouseEvent] = useState(false)

    useEffect(() => {
        if (hover) {
            setEnter(true);
            setLeave(false);
        } else {
            setEnter(false);
            setLeave(true);
        }
    }, [hover])

    return (
        <div className={clsx(
            style.animatedLink,
            Boolean(className) && className,
            enable && enter && mouseEvent && "animatedLinkMouseEnter",
            enable && leave && mouseEvent && "animatedLinkMouseLeave"
        )}
             onMouseEnter={() => {
                 setHover(true);
                 setMouseEvent(true);
             }}
             onMouseLeave={() => {
                 setHover(false);
                 setMouseEvent(true);
             }}
        >
            {children}
        </div>
    )

}
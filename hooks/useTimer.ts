import {useEffect, useState} from "react";
import {convertToTwoDigit, getDays, getHours, getMins, getSecs} from "../helpers/time";
import {dateEnd} from "../consts/date";

export const useTimer = () => {
    const [timeIsOver, setTimeIsOver] = useState(false);
    const [time, setTime] = useState(0);
    const [start, setStart] = useState(false);

    const delta = 1000; // ms, частота обновления

    useEffect(() => {
        const time = new Date(
            dateEnd.getTime()
            //new Date().getTime() + 300000
            - new Date().getTime()
        )
            .getTime();
        if (time > 0 && !timeIsOver) {
            setTime(time);
            setStart(true);
        }
    }, []);

    useEffect(() => {
        const timeId = setTimeout(() => {
            if (start) {
                if (time <= 0) {
                    setTimeIsOver(true);
                    clearTimeout(timeId);
                } else {
                    setTime(time => time - 1000);
                }
            }
        }, delta);
        return () => {
            clearTimeout(timeId);
        }
    }, [time]);

    const date = {
        days: convertToTwoDigit(getDays(time)),
        hours: convertToTwoDigit(getHours(time)),
        minutes: convertToTwoDigit(getMins(time)),
        seconds: convertToTwoDigit(getSecs(time))
    }

    return date
}
// info
// Active: number
// Closed: "DISABLE" | TIME | OPEN the Level
import {ILevelCard, StatusEnum} from "../../types/types";

export const levelsData: ILevelCard[] = [
    {
        level: 1,
        status: StatusEnum.Blocked,
        profit: "34.0048",
        payment: 0,
        bonus: "7.3247",
        info: "Open level 3 or 4"
    },
    {
        level: 2,
        status: StatusEnum.Active,
        profit: "34.0048",
        payment: 1,
        bonus: "7.3247",
        info: "0.00"
    },
    {
        level: 3,
        status: StatusEnum.Active,
        profit: "34.0048",
        payment: 2,
        bonus: "7.3247",
        info: "16.048"
    },
    {
        level: 4,
        status: StatusEnum.Active,
        profit: "34.0048",
        payment: 3,
        bonus: "7.3247",
        info: "16.048"
    },
    {
        level: 5,
        status: StatusEnum.Active,
        profit: "34.0048",
        payment: 4,
        bonus: "7.3247",
        info: "16.048"
    },

    {
        level: 6,
        status: StatusEnum.Closed,
        profit: "34.0048",
        payment: 5,
        bonus: "7.3247",
        info: "Disable"
    },
    {
        level: 7,
        status: StatusEnum.Closed,
        profit: "34.0048",
        payment: 6,
        bonus: "7.3247",
        info: "Disable"
    },
    {
        level: 8,
        status: StatusEnum.Closed,
        profit: "34.0048",
        payment: 0,
        bonus: "7.3247",
        info: "Disable"
    },
    {
        level: 9,
        status: StatusEnum.Closed,
        profit: "34.0048",
        payment: 1,
        bonus: "7.3247",
        info: "Disable"
    },
    {
        level: 10,
        status: StatusEnum.Closed,
        profit: "34.0048",
        payment: 2,
        bonus: "7.3247",
        info: "Disable"
    },
]
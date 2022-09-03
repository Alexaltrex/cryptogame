export enum ScheduleStatusEnum {
    Open = "Open",
    Soon = "Soon",
    Disable = "Disable",

}

export interface IScheduleRow {
    level: number,
    status: ScheduleStatusEnum
    price: string
    date: string
}

export const scheduleData: IScheduleRow[] = [
    {
        level: 1,
        status: ScheduleStatusEnum.Open,
        price: "8.02311",
        date: "24 July 12:44 PM"
    },
    {
        level: 2,
        status: ScheduleStatusEnum.Open,
        price: "8.02311",
        date: "24 July 12:44 PM"
    },
    {
        level: 3,
        status: ScheduleStatusEnum.Open,
        price: "8.02311",
        date: "24 July 12:44 PM"
    },
    {
        level: 4,
        status: ScheduleStatusEnum.Soon,
        price: "8.02311",
        date: "24 July 12:44 PM"
    },
    {
        level: 5,
        status: ScheduleStatusEnum.Disable,
        price: "-",
        date: "-",
    },
    {
        level: 6,
        status: ScheduleStatusEnum.Disable,
        price: "-",
        date: "-",
    },
    {
        level: 7,
        status: ScheduleStatusEnum.Disable,
        price: "-",
        date: "-",
    },
    {
        level: 8,
        status: ScheduleStatusEnum.Disable,
        price: "-",
        date: "-",
    },
    {
        level: 9,
        status: ScheduleStatusEnum.Disable,
        price: "-",
        date: "-",
    },
    {
        level: 10,
        status: ScheduleStatusEnum.Disable,
        price: "-",
        date: "-",
    },
]
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
    selected: boolean
}

export const scheduleData: IScheduleRow[] = [
    {
        level: 1,
        status: ScheduleStatusEnum.Open,
        price: "8.02311",
        date: "24 July 12:44 PM",
        selected: false
    },
    {
        level: 2,
        status: ScheduleStatusEnum.Open,
        price: "8.02311",
        date: "24 July 12:44 PM",
        selected: false
    },
    {
        level: 3,
        status: ScheduleStatusEnum.Open,
        price: "8.02311",
        date: "24 July 12:44 PM",
        selected: true
    },
    {
        level: 4,
        status: ScheduleStatusEnum.Soon,
        price: "8.02311",
        date: "24 July 12:44 PM",
        selected: false
    },
    {
        level: 5,
        status: ScheduleStatusEnum.Disable,
        price: "-",
        date: "-",
        selected: false
    },
    {
        level: 6,
        status: ScheduleStatusEnum.Disable,
        price: "-",
        date: "-",
        selected: true
    },
    {
        level: 7,
        status: ScheduleStatusEnum.Disable,
        price: "-",
        date: "-",
        selected: false
    },
    {
        level: 8,
        status: ScheduleStatusEnum.Disable,
        price: "-",
        date: "-",
        selected: false
    },
    {
        level: 9,
        status: ScheduleStatusEnum.Disable,
        price: "-",
        date: "-",
        selected: false
    },
    {
        level: 10,
        status: ScheduleStatusEnum.Disable,
        price: "-",
        date: "-",
        selected: false
    },
]
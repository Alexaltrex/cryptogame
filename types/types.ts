export enum StatusEnum {
    Blocked = "Blocked",
    Active = "Active",
    Closed = "Closed"
}
export interface ILevelCard {
    level: number
    status: StatusEnum,
    profit: string
    payment: number,
    bonus: string
    info: string
}

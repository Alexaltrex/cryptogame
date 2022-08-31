import style from "./Blocks.module.scss";
import {svgIcons} from "../../../assets/svgIcons";

const table = [
    {
        level: "1",
        status: "Open",
        price: "8.02311",
        date: "24 July 12PM"
    },
    {
        level: "2",
        status: "Open",
        price: "8.02311",
        date: "24 July 12PM"
    },
    {
        level: "3",
        status: "Open",
        price: "8.02311",
        date: "24 July 12PM"
    },
    {
        level: "4",
        status: "Open",
        price: "8.02311",
        date: "24 July 12PM"
    },
    {
        level: "5",
        status: "Open",
        price: "8.02311",
        date: "24 July 12PM"
    },
    {
        level: "6",
        status: "Open",
        price: "8.02311",
        date: "24 July 12PM"
    },
    {
        level: "7",
        status: "Open",
        price: "8.02311",
        date: "24 July 12PM"
    },
]

const labels = ["Level","Status","Price, BNB","Date"];

export const LevelSchedule = () => {
    return (
        <>
            <p className={style.title}>Level schedule</p>

            <div className={style.text}>
                <p>
                    Each new level opens according to the schedule. Therefore, you need to monitor it to open it as early as possible and get the maximum profit.
                </p>
            </div>

            <a href="#"
               target="_blank"
               rel="nofollow noopener noreferrer"
               className={style.tgLink}
            >
                In our Telegram channel you can follow the opening of the levels and other news.
            </a>

            <div className={style.table}>
                <div className={style.head}>
                    {
                        labels.map((el, index) => (
                            <div className={style.headCell} key={index}>
                                {el}
                            </div>
                        ))
                    }
                </div>
                <div>
                    {
                        table.map((row, index) => (
                            <div key={index} className={style.row}>
                                {
                                    Object.values(row).map((value, index) => (
                                        <div className={style.cell} key={index}>
                                            <p className={style.label}>{labels[index]}</p>
                                            <p className={style.value}>
                                                {value}
                                                {index === 2 && svgIcons.balance}
                                            </p>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
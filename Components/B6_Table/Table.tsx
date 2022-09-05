import style from "./Table.module.scss"
import {data} from "./data";
import {svgIcons} from "../../assets/svgIcons";
import clsx from "clsx";

export const Table = () => {
    return (
        <div className={style.table}>
            <div className={style.inner}>
                <div className={style.tableBlock}>
                    <div className={style.head}>
                        {
                            ["Position", "ID", "BNB profit", "Open levels", "Plays for", ""].map((label, index) => (
                                <p key={index} className={style.label}>{label}</p>
                            ))
                        }
                    </div>
                    <div>
                        {
                            data.map(({position, ID, profit, openLevels, playsFor, link}) => (
                                <div className={style.row} key={ID}>
                                    <div className={style.cell}>
                                        <p className={style.label}>Position</p>
                                        <p className={style.value}>{position}</p>
                                    </div>
                                    <div className={style.cell}>
                                        <p className={style.label}>ID</p>
                                        <p className={style.value}>{ID}</p>
                                    </div>
                                    <div className={style.cell}>
                                        <p className={style.label}>BNB profit</p>
                                        <p className={style.value}>
                                            <span>{profit}</span>
                                            {svgIcons.balance}
                                        </p>
                                    </div>
                                    <div className={style.cell}>
                                        <p className={style.label}>Open levels</p>
                                        <p className={style.value}>
                                            {openLevels}<span className={style.grey}>/4</span>
                                        </p>
                                    </div>
                                    <div className={style.cell}>
                                        <p className={style.label}>Plays for</p>
                                        <p className={style.value}>
                                            {playsFor}<span className={style.grey}> days</span>
                                        </p>
                                    </div>
                                    <div className={style.cell}>
                                        <a href={link}>
                                            {
                                                svgIcons.link
                                            }
                                        </a>

                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
                <button className={style.btn}>Load more</button>
            </div>
        </div>
    )
}
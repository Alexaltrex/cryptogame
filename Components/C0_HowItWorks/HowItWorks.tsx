import style from "./HowItWorks.module.scss"
import {TableOfContent} from "./TableOfContent/TableOfContent";
import {AboutGame} from "./Blocks/B0_AboutGame";
import {Rewards} from "./Blocks/B1_Rewards";
import {Navigation} from "./Navigation/Navigation";
import {LevelSchedule} from "./Blocks/B2_LevelSchedule";
import {LiveDemo} from "./Blocks/B3_LiveDemo";
import {Referrals} from "./Blocks/B4_Referrals";

export const contentLinks = [
    "About game",
    "Rewards",
    "Level schedule",
    "Live demo",
    "Referrals",
    "Registration",
];

const blocks = [
    <AboutGame/>,
    <Rewards/>,
    <LevelSchedule/>,
    <LiveDemo/>,
    <Referrals/>,
    <p>text</p>,
]

export const HowItWorks = () => {
    return (
        <div className={style.howItWorks}>
            <div className={style.inner}>
                <Navigation/>
                <TableOfContent/>
                <div className={style.content}>
                    {
                        blocks.map((block, index) => (
                            <div className={style.block} id={contentLinks[index]} key={index}>
                                {block}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
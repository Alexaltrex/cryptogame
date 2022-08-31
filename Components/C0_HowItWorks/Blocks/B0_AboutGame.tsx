import style from "./Blocks.module.scss"

const title1 = "About game"
const title2 = "Structure of game"
const texts = [
    "The game has 10 levels that open gradually, according to the schedule.",
    "When you open a new level, you randomly take a position on the line. Thus, your 100% deposit goes as a reward to a random superior player. 76% of this amount is received by him, and the remaining 24% are his referrals.",
    "Thus, taking a place on the line, you will receive a reward from new players until the level is completely filled.",
    "Therefore, the sooner you open a new level, the more profit you will get."
]
const texts2 = [
    "When you enter the game, you get into a loop to a random player. There are always 3 participants in the cycle: 1 from the top and 2 from the bottom",
    "When you enter the game, you get to the bottom line to a random player. At the same time, new players always take the right place.",
    "After that, you simultaneously open your loop, in which you are on top",
    "When your cycle is completed, a recycle occurs. I.e. you move to the next line in the cycle to another player. But already to the left place.",
]

export const AboutGame = () => {
    return (
        <>
            <div className={style.block}>
                <p className={style.title}>{title1}</p>
                <div className={style.text}>
                    <p>The CryptoGame is a referral pyramid where each player makes a profit from new players.</p>
                    <br/>
                    <p>At the same time, it is not necessary to invite people. The profit is divided randomly,
                        regardless of whether you have invited someone or not.</p>
                </div>
            </div>

            <div className={style.block}>
                <p className={style.title}>{title2}</p>
                <div className={style.text}>
                    <p>{texts[0]}</p>
                    <br/>
                    <p>{texts[1]}</p>
                    <br/>
                    <p>{texts[2]}</p>
                    <br/>
                    <p className={style.white}>{texts[3]}</p>
                </div>

                <img src="/png/how it works/0.png" alt="" className={style.img0}/>

                <p className={style.subtitle}>There are 2 main nuances in the game:</p>

                <div className={style.text}>
                    <p><span className={style.white}>1. Freezing.</span> When the level is filled, and the next, more
                        expensive one is not activated yet, you will stop making profit from it. It will go to another
                        player who has the next level activated. Thus, in order to get a constant profit, keep an eye on
                        the opening of new levels.</p>
                    <br/>
                    <p><span className={style.white}>2. Overtaking.</span> If the referrals you invite open a new level
                        before you, you will also stop receiving profit from them. Therefore, try to unlock new levels
                        as quickly as possible.</p>
                </div>

                <a href="#"
                   target="_blank"
                   rel="nofollow noopener noreferrer"
                   className={style.tgLink}
                >
                    In our Telegram channel you can follow the opening of the levels and other news.
                </a>

            </div>

            <div className={style.block}>
                <p className={style.pretitle}>Cycles and Recycles</p>
                <div className={style.text}>
                    <p>{texts2[0]}</p>
                    <br/>
                    <p>{texts2[1]}</p>
                    <br/>
                    <p>{texts2[2]}</p>
                    <br/>
                    <p>{texts2[3]}</p>
                </div>
            </div>

            <img src="/png/how it works/1.png" alt="" className={style.img1}/>
        </>
    )
}
import style from "./Blocks.module.scss";
import {svgIcons} from "../../../assets/svgIcons";

const account = "0x41eaD2756aDEawdas122SF41eaD2756aDEawdas122SF"

export const Rewards = () => {
    return (
        <>
            <p className={style.title}>Rewards</p>
            <div className={style.text}>
                <p>Each reward from a lower player is divided into 2 parts: 76% of the profit goes to a higher player in
                    your cycle, and the remaining 24% goes to reward him with a referral.
                </p>
            </div>
            <p className={style.subtitle}>
                Thus, there are several basic actions to get the maximum profit:
            </p>
            <div className={style.text}>
                <p>1. Unlock new levels as early as possible so that there are as many players as possible in the structure under you;</p>
                <br/>
                <p>2. It will also eliminate the possibility of freezing and overtaking.</p>
                <br/>
                <p>3. Invite as many people as possible to get additional profit from them.</p>
            </div>

            <img src="/png/how it works/2.png" alt="" className={style.img1}/>

            <p className={style.pretitle}>Payment</p>

            <div className={style.text}>
                <p className={style.white}>All your rewards are immediately sent to a linked crypto wallet</p>
                <br/>
                <p>Smart contact</p>
            </div>

            <div className={style.accountWrapper}>
                <p className={style.account}>
                    {account}
                </p>
                <button className={style.copyBtn}
                >
                    {svgIcons.copy}
                </button>
                <button className={style.linkBtn}>
                    {svgIcons.link2}
                </button>
            </div>
        </>
    )
}
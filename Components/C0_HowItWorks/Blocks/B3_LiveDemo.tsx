import style from "./Blocks.module.scss";

export const LiveDemo = () => {
    return (
        <>
            <p className={style.title}>Live Demo</p>

            <img src="/png/how it works/2.png" alt="" className={style.img1}/>

            <div className={style.text}>
                <p>1. Your money, in the ratio of 76%/24%, goes to a higher player in your cycle;</p>
                <br/>
                <p>2. When a new player appears under you in the cycle, you get a profit in the same ratio;</p>
                <br/>
                <p>3. After that, when your cycle closes, a recycle occurs and everything repeats further.</p>
            </div>
        </>
    )
}
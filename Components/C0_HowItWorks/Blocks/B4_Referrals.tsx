import style from "./Blocks.module.scss";

export const Referrals = () => {
    return (
        <>
            <p className={style.title}>Refferals</p>
           
            <div className={style.text}>
                <p>As mentioned earlier, to increase your profit, you can invite other people. Thus, you will make a
                    profit from their earnings. This is not a prerequisite, but it will help significantly increase your
                    income level.</p>
            </div>

            <p className={style.decorateText}>
                You can view the statistics of your referrals in the corresponding menu section in your personal account.
            </p>
        </>
    )
}
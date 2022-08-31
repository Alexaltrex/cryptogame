import style from "./UniqueNFT.module.scss"
import * as React from "react";
import {H2} from "../X_Common/H2/H2";
import {ButtonOutlined} from "../X_Common/ButtonOutlined/ButtonOutlined";
import {svgIcons} from "../../assets/svgIcons";

export const UniqueNFT = () => {
    return (
        <div className={style.uniqueNFT}>
            <div className={style.inner}>
                <H2 className={style.title}>Unique NFT’s for regular players</H2>
                <ButtonOutlined label="Get your first gift"
                                className={style.btn}
                />
                <div className={style.arrow4}>
                    {svgIcons.arrow4}
                </div>
                <img src="/png/unique nft/nft.png" alt="" className={style.nft}/>
                <img src="/png/unique nft/cards.png" alt="" className={style.cards}/>
            </div>
        </div>
    )
}
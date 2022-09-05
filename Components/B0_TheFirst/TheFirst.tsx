import * as React from "react";
import style from "./TheFirst.module.scss"
import {ButtonOutlined} from "../X_Common/ButtonOutlined/ButtonOutlined";
import {svgIcons} from "../../assets/svgIcons";
import Link from "next/link";

const description = "Unlock new levels and get extra profit, without inviting new players!";

export const TheFirst = () => {
    const delays = ["250", "500", "750", "1000", "1250", "1500"]

    return (
        <div className={style.theFirst}>
            <div className={style.inner}>
                <div className={style.titleWrapper}>
                    <h1 className={style.title}>
                        The first <span>BNB</span> game built on the pyramid
                        <div className={style.label}
                             data-aos="zoom-in"
                        >
                            Take a profit in
                        </div>
                    </h1>


                    <div className={style.arrow1}
                         data-aos="zoom-in"
                         data-aos-delay={delays[0]}
                    >
                        {svgIcons.arrow1}
                    </div>
                    <img src="/png/the first/02_d.png"
                         alt=""
                         className={style.img2Desktop}
                         data-aos="zoom-in"
                         data-aos-delay={delays[1]}
                    />

                    <div className={style.arrow2}
                         data-aos="zoom-in"
                         data-aos-delay={delays[2]}
                    >
                        {svgIcons.arrow2}
                    </div>
                    <div className={style.img3Desktop}
                         data-aos="zoom-in"
                         data-aos-delay={delays[3]}
                    >
                        {svgIcons.firstBlock_img3_desktop}
                    </div>


                    <div className={style.arrow3}
                         data-aos="zoom-in"
                         data-aos-delay={delays[4]}
                    >
                        {svgIcons.arrow3}
                    </div>
                    <div className={style.img4Desktop}
                         data-aos="zoom-in"
                         data-aos-delay={delays[5]}
                    >
                        {svgIcons.firstBlock_img4_desktop}
                    </div>


                </div>

                <p className={style.description}>{description}</p>

                <div className={style.btnWrapper}>
                    <ButtonOutlined
                        className={style.btn}
                        label="Go to GameZone"
                        icon={svgIcons.right_arrow}
                    />
                    <div className={style.arrow1}>{svgIcons.arrow_theFirst_mobile1}</div>
                    <div className={style.arrow2}>{svgIcons.arrow_theFirst_mobile2}</div>
                </div>


                <Link href="/">
                    <a className={style.link}>
                        How to play?
                    </a>
                </Link>

                <div className={style.imgs}>
                    <img src="/png/the first/slide_0.png" alt=""/>
                    <img src="/png/the first/slide_1.png" alt=""/>
                    <img src="/png/the first/slide_2.png" alt=""/>
                </div>


            </div>
        </div>
    )
}
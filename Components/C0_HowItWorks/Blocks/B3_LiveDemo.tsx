import style from "./Blocks.module.scss";

import SwiperClass from 'swiper/types/swiper-class';
import "swiper/css";
import "swiper/css/effect-fade";
import {Swiper, SwiperSlide} from "swiper/react";
import {useState} from "react";
import {svgIcons} from "../../../assets/svgIcons";

import { EffectFade } from "swiper";

export const LiveDemo = () => {
    const [swiper, setSwiper] = useState<SwiperClass | null>(null);
    const [labelSwiper, setLabelSwiper] = useState<SwiperClass | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <>
            <p className={style.title}>Live Demo</p>

            <div className={style.sliderWrapper}>

                <Swiper slidesPerView={1}
                        slidesPerGroup={1}
                        centeredSlides={true}
                        onSwiper={(swiper) => setLabelSwiper(swiper)}
                        className={style.labelSlider}
                        spaceBetween={0}
                        speed={300}
                        loop={true}
                        allowTouchMove={false}
                        effect='fade'
                        modules={[EffectFade]}
                >
                    {
                        [
                            "Step 1. Opening Level.",
                            "Step 2. Get a Profit.",
                            "Step 3. Recycle"
                        ]
                            .map((text, index) => (
                                <SwiperSlide key={index}
                                             className={style.labelSlide}
                                >
                                    <p>{text}</p>
                                </SwiperSlide>
                            ))
                    }
                </Swiper>

                <Swiper slidesPerView="auto"
                        slidesPerGroup={1}
                        centeredSlides={true}
                        onSwiper={(swiper) => setSwiper(swiper)}
                        onSlideChange={swiper => setCurrentIndex(swiper.realIndex)}
                        className={style.slider}
                        spaceBetween={0}
                        speed={300}
                        loop={true}
                        allowTouchMove={false}
                >
                    {
                        [
                            "/png/live demo/0.png",
                            "/png/live demo/1.png",
                            "/png/live demo/2.png",
                        ]
                            .map((src, index) => (
                                <SwiperSlide key={index}
                                             className={style.slide}
                                >
                                    <img src={src} alt=""/>
                                </SwiperSlide>
                            ))
                    }
                </Swiper>

                <div className={style.btns}>
                    <button onClick={() => {
                        swiper?.slidePrev()
                        labelSwiper?.slidePrev()
                    }}>
                        {svgIcons.right_arrow}
                    </button>
                    <button onClick={() => {
                        swiper?.slideNext()
                        labelSwiper?.slideNext()
                    }}>
                        {svgIcons.right_arrow}
                    </button>

                </div>
            </div>


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
import {FC, ReactNode} from "react";
import Head from "next/head";
import style from "./MainLayout.module.scss"
import {Header} from "../../Components/A0_Header/Header";
import {BurgerMenu} from "../../Components/A1_BurgerMenu/BurgerMenu";
import {Footer} from "../../Components/A2_Footer/Footer";
import {ConnectWallet} from "../../Components/A3_ConnectWallet/ConnectWallet";
import {OpenLevel} from "../../Components/A4_OpenLevel/OpenLevel";
import {SentMessageModal} from "../../Components/A5_SentMessageModal/SentMessageModal";
import React from "react";
import {DisclaimerModal} from "../../Components/A6_DisclaimerModal/DisclaimerModal";
import {useRouter} from "next/router";

const ballSrc = {
    yellow: "/png/balls/yellow.png",
    purple: "/png/balls/purple.png",
    blue: "/png/balls/blue.png",
}

const balls = {
    "/": {
        top: 0,
        balls: [
            ballSrc.yellow,
            ballSrc.purple,
            ballSrc.yellow,
            ballSrc.purple,
            ballSrc.blue,
            ballSrc.purple,
            ballSrc.yellow,
        ]
    },
    "/howItWorks": {
        top: 1000,
        balls: [
            ballSrc.yellow,
            ballSrc.purple,
            ballSrc.blue,
            ballSrc.purple,
            ballSrc.blue,
            ballSrc.yellow,
            ballSrc.purple,
            ballSrc.purple,
            ballSrc.blue,
            ballSrc.purple,
        ]
    },
    "/promo": {
        top: 500,
        balls: [
            ballSrc.purple,
            ballSrc.yellow,

        ]
    },
    "/dashboard": {
        top: 500,
        balls: [
            ballSrc.blue,
            ballSrc.yellow,
            ballSrc.blue,
            ballSrc.blue,
            ballSrc.yellow,
            ballSrc.purple,
        ]
    },
    "/referrals": {
        top: 500,
        balls: [
            ballSrc.purple,
            ballSrc.blue,
            ballSrc.yellow,
        ]
    },
    "/support": {
        top: 500,
        balls: [
            ballSrc.purple,
            ballSrc.blue,
            ballSrc.yellow,
        ]
    },
}


interface IMainLayout {
    children: ReactNode
    headTitle?: string
}

export const MainLayout: FC<IMainLayout> = ({
                                                children,
                                                headTitle = 'Crypto Game',
                                            }) => {
    const router = useRouter();
    console.log(router)

    return (
        <div className={style.mainLayout}>
            <Head>
                {/*<meta name="keywords" content="next,js,nextjs,react"/>*/}
                {/*<meta name="description" content="this is demo site"/>*/}
                <meta charSet="utf-8"/>
                <title>
                    {headTitle}
                </title>
            </Head>

            <ConnectWallet/>
            <OpenLevel/>
            <SentMessageModal/>
            <DisclaimerModal/>

            <Header/>
            <BurgerMenu/>

            <main className={style.main}>
                {children}
            </main>

            <Footer/>

            <div className={style.balls}>
                {
                    // @ts-ignore
                    (balls[router.pathname].balls as string[])
                        .map((src, index) => (
                            <div key={index}
                                 className={style.imgWrapper}
                                 style={{
                                     left: index % 2 === 0 ? 0 : "auto",
                                     right: index % 2 === 0 ? "auto" : 0,
                                     // @ts-ignore
                                     top: `${index * 1000 + balls[router.pathname].top}px`
                                 }}
                            >
                                <img src={src} alt=""/>
                            </div>
                        ))
                }
            </div>

        </div>
    )
}
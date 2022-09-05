import {FC, ReactNode} from "react";
import Head from "next/head";
import style from "./MainLayout.module.scss"
import {Header} from "../../Components/A0_Header/Header";
import {BurgerMenu} from "../../Components/A1_BurgerMenu/BurgerMenu";
import {Footer} from "../../Components/A2_Footer/Footer";
import {ConnectWallet} from "../../Components/A3_ConnectWallet/ConnectWallet";
import {OpenLevel} from "../../Components/A4_OpenLevel/OpenLevel";
import {SentMessageModal} from "../../Components/A5_SentMessageModal/SentMessageModal";
import {useRouter} from "next/router";
import React from "react";

interface IMainLayout {
    children: ReactNode
    headTitle?: string
}

export const MainLayout: FC<IMainLayout> = ({
                                                children,
                                                headTitle = 'Crypto Game',
}) => {
    const router = useRouter();
    //console.log(router)

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

            <Header/>
            <BurgerMenu/>

            <main className={style.main}>
                {children}
            </main>

            <Footer/>

            {
                //router.pathname === "/"
                true
                &&
                <div className={style.BallsFromMainPage}>
                    {
                        [0, 1000, 2000, 3000, 4000, 5000, 6000].map((top, index) => (
                            <React.Fragment key={index}>
                                <img src="/png/balls/main page/0.png"
                                     alt=""
                                     //className={style.ball0}
                                     style={{
                                         position: "absolute",
                                         top: `${-200 + top}px`,
                                         left: 0
                                     }}
                                />
                                <img src="/png/balls/main page/1.png"
                                     alt=""
                                     //className={style.ball1}
                                     style={{
                                         position: "absolute",
                                         top: `${200 + top}px`,
                                         right: 0
                                     }}
                                />
                            </React.Fragment>
                        ))
                    }

                </div>
            }


        </div>
    )
}
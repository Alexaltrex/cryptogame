import {FC, ReactNode} from "react";
import Head from "next/head";
import style from "./MainLayout.module.scss"
import {Header} from "../../Components/A0_Header/Header";
import {BurgerMenu} from "../../Components/A1_BurgerMenu/BurgerMenu";
import {Footer} from "../../Components/A2_Footer/Footer";

interface IMainLayout {
    children: ReactNode
    headTitle?: string
}

export const MainLayout: FC<IMainLayout> = ({
                                                children,
                                                headTitle = 'Crypto Game',
}) => {
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

            <Header/>
            <BurgerMenu/>

            <main>
                {children}
            </main>

            <Footer/>
        </div>
    )
}
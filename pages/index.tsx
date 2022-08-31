import type {NextPage} from 'next'
import {MainLayout} from "../Layouts/MainLayout/MainLayout";
import {TopPlayers} from "../Components/B5_TopPlayers/TopPlayers";
import {Tabs} from "../Components/B1_Tabs/Tabs";
import {TheFirst} from "../Components/B0_TheFirst/TheFirst";
import {UniqueNFT} from "../Components/B4_UniqueNFT/UniqueNFT";
import {Table} from "../Components/B6_Table/Table";
import {HowToStart} from "../Components/B7_HowToStart/HowToStart";
import {WeAreReliable} from "../Components/B8_WeAreReliable/WeAreReliable";
import {ConnectToUs} from "../Components/B9_ConnectToUs/ConnectToUs";

const Home: NextPage = () => {
    return (
        <MainLayout>
            <TheFirst/>
            <Tabs/>
            <UniqueNFT/>
            <TopPlayers/>
            <Table/>
            <HowToStart/>
            <WeAreReliable/>
            <ConnectToUs/>
        </MainLayout>

    )
}

export default Home

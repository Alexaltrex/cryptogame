import {MainLayout} from "../../Layouts/MainLayout/MainLayout";
import {Levels} from "../../Components/E1_Levels/Levels";
import {Stats} from "../../Components/E2_Stats/Stats";
import {Schedule} from "../../Components/E3_Schedule/Schedule";
import {LastAction} from "../../Components/E4_LastAction/LastAction";
import {InvitedBlock} from "../../Components/X_Common/InvitedBlock/InvitedBlock";

const Dashboard = () => {
    return (
        <MainLayout  headTitle='Crypto Game | Dashboard'>

            <InvitedBlock label="Smart contract:"
                          value="0x41eaD2756aDEawdas122SF41eaD2756aDEawdas122SF"
                          onClick={() => {}}
            />

            <Levels/>
            <Stats/>
            <Schedule/>
            <LastAction/>
        </MainLayout>
    )
}
export default Dashboard
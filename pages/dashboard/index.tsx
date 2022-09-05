import {MainLayout} from "../../Layouts/MainLayout/MainLayout";
import {Levels} from "../../Components/E1_Levels/Levels";
import {Stats} from "../../Components/E2_Stats/Stats";
import {Schedule} from "../../Components/E3_Schedule/Schedule";
import {LastAction} from "../../Components/E4_LastAction/LastAction";
import {DashboardTimer} from "../../Components/E0_DashboardTimer/DashboardTimer";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import {useRedirect} from "../../hooks/useRedirect";

const Dashboard = observer(() => {
    const {login} = useStore();
    useRedirect(login);

    return (
        <MainLayout  headTitle='Crypto Game | Dashboard'>
            <DashboardTimer/>
            <Levels/>
            <Stats/>
            <Schedule/>
            <LastAction/>
        </MainLayout>
    )
})
export default Dashboard
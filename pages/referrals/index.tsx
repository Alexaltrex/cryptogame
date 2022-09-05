import {MainLayout} from "../../Layouts/MainLayout/MainLayout";
import {YourReferrals} from "../../Components/F1_YourReferrals/YourReferrals";
import {ReferralsFirst} from "../../Components/F0_ReferralsFirst/ReferralsFirst";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import {useRedirect} from "../../hooks/useRedirect";

const Referrals = observer(() => {
    const {login} = useStore();
    useRedirect(login);

    return (
        <MainLayout headTitle='Crypto Game | Referrals'>
            <ReferralsFirst/>
            <YourReferrals/>
        </MainLayout>
    )

})

export default Referrals
import {MainLayout} from "../../Layouts/MainLayout/MainLayout";
import {YourReferrals} from "../../Components/F1_YourReferrals/YourReferrals";
import {ReferralsFirst} from "../../Components/F0_ReferralsFirst/ReferralsFirst";

const Referrals = () => {
    return (
        <MainLayout headTitle='Crypto Game | Referrals'>
            <ReferralsFirst/>
            <YourReferrals/>
        </MainLayout>
    )

}

export default Referrals
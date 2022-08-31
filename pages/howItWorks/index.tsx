import {MainLayout} from "../../Layouts/MainLayout/MainLayout";
import {HowItWorks} from "../../Components/C0_HowItWorks/HowItWorks";
import {ConnectToUs} from "../../Components/B9_ConnectToUs/ConnectToUs";


const HowItWorksPage = () => {
    return (
        <MainLayout headTitle='Crypto Game | How it works?'>
            <HowItWorks/>
            <ConnectToUs/>
        </MainLayout>
    )
}
export default HowItWorksPage
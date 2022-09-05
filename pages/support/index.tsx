import {MainLayout} from "../../Layouts/MainLayout/MainLayout";
import style from "./Support.module.scss"
import {ContactToUs} from "../../Components/G0_ContactToUs/ContactToUs";
import {WriteToUs} from "../../Components/G1_WriteToUs/WriteToUs";

const Support = () => {
    return (
        <MainLayout  headTitle='Crypto Game | Support'>
            <div className={style.support}>
                <div className={style.inner}>
                    <WriteToUs/>
                    <ContactToUs/>
                </div>
            </div>
        </MainLayout>
    )
}
export default Support
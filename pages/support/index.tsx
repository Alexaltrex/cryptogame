import {MainLayout} from "../../Layouts/MainLayout/MainLayout";
import style from "./Support.module.scss"
import {ContactToUs} from "../../Components/G0_ContactToUs/ContactToUs";
import {WriteToUs} from "../../Components/G1_WriteToUs/WriteToUs";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import {useRedirect} from "../../hooks/useRedirect";

const Support = observer(() => {
    const {login} = useStore();
    useRedirect(login);

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
})
export default Support
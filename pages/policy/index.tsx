import style from "./Policy.module.scss"
import {MainLayout} from "../../Layouts/MainLayout/MainLayout";

const title = "Privacy Policy"
const text1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
const subtitle1 = "Privacy Policy";
const subtitle2 = "Privacy Policy";
const text2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
const text3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const Policy = () => {
    return (
        <MainLayout>
            <div className={style.policy}>
                <div className={style.inner}>
                    <div className={style.block}>
                        <p className={style.title}>{title}</p>
                        <p className={style.text}>{text1}</p>
                    </div>
                    <div className={style.block}>
                        <p className={style.subtitle}>{subtitle1}</p>
                        <p className={style.text}>{text2}</p>
                    </div>
                    <div className={style.block}>
                        <p className={style.subtitle}>{subtitle2}</p>
                        <p className={style.text}>{text3}</p>
                    </div>
                </div>
            </div>
        </MainLayout>

    )
}
export default Policy
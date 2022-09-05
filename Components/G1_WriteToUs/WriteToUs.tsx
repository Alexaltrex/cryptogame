import {H3} from "../X_Common/H3/H3"
import style from "./WriteToUs.module.scss"
import {useFormik} from "formik";
import {useState} from "react";
import {Checkbox} from "@mui/material";
import Link from "next/link";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";

interface IValues {
    name: string
    email: string
    question: string
}

export const WriteToUs = observer(() => {
    const {setSentMessage} = useStore();

    const initialValues: IValues = {
        name: "",
        email: "",
        question: "",
    }

    const validate = (values: IValues) => {
        const errors = {} as Partial<IValues>
        if (!values.name) {
            errors.name = "Fill in the field "
        }
        if (!values.email) {
            errors.email = "Fill in the field "
        }
        if (!values.question) {
            errors.question = "Fill in the field "
        }
        return errors
    }

    const onSubmit = (values: IValues) => {
        if (checked) {
            console.log(values);
            setSentMessage(true)
        }
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });

    const [checked, setChecked] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };


    return (
        <div className={style.writeToUs}>
            <H3>Write to us</H3>

            <form className={style.form}
                  onSubmit={formik.handleSubmit}
            >
                <div className={style.inputs}>
                    <div className={style.inputBlock}>
                        <label htmlFor="name"
                               className={style.label}
                        >
                            Name
                        </label>

                        <div className={style.inputWrapper}>
                            <input id="name"
                                   type="text"
                                   {...formik.getFieldProps('name')}
                            />
                        </div>
                        {formik.errors.name && <p className={style.error}>{formik.errors.name}</p>}
                    </div>

                    <div className={style.inputBlock}>
                        <label htmlFor="email"
                               className={style.label}
                        >
                            E-mail
                        </label>

                        <div className={style.inputWrapper}>
                            <input id="email"
                                   type="email"
                                   {...formik.getFieldProps('email')}
                            />
                        </div>
                        {formik.errors.email && <p className={style.error}>{formik.errors.email}</p>}
                    </div>

                </div>

                <div className={style.areaBlock}>
                    <label htmlFor="question"
                           className={style.label}
                    >
                        Your question
                    </label>
                    <div className={style.areaWrapper}>
                    <textarea id="question"
                              {...formik.getFieldProps('question')}
                              style={{width: "100%", height: "100%"}}

                    />
                    </div>
                    {formik.errors.question && <p className={style.error}>{formik.errors.question}</p>}
                </div>

                <div className={style.checkboxWrapper}>
                    <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                        sx={{
                            padding: 0,
                            color: "#FFF",
                            "&.Mui-checked": {
                                color: "#745BD7"
                            }
                        }}
                    />

                    <div className={style.policyWrapper}>
                        I agree with the <Link href="policy"><a className={style.policy}>Privaci Poilicy</a></Link>
                    </div>
                </div>

                <button type="submit"
                        className={style.submitBtn}
                >
                    Send
                </button>
            </form>
        </div>
    )
})
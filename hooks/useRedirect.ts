import {useRouter} from "next/router";
import {useEffect} from "react";

export const useRedirect = (login: boolean) => {
    const router = useRouter()
    useEffect(() => {
        if (!login) {
            router.push("/")
        }
    }, [login])
}
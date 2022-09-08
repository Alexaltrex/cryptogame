import "../assets/scss/global_styles.scss"
import type { AppProps } from 'next/app'
import {createContext, useEffect} from "react";
import {Store, store} from "../store/store";
import "aos/dist/aos.css";
import AOS from "aos";

export const StoreContext = createContext<Store>({} as Store)

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        AOS.init({
            // easing: "ease-out-cubic",
            // once: true,
            // offset: 50,
        });
    }, []);

  return (
      <StoreContext.Provider value={store}>
        <Component {...pageProps} />
      </StoreContext.Provider>
  )
}

export default MyApp

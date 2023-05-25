import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useDispatch, useSelector } from "react-redux";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
  <Provider store={store}>
    {/* <main className={montserrat.className}> */}
      <Component {...pageProps} />
    {/* </main> */}
    </Provider>
  )
}
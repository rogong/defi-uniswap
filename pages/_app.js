import "../styles/globals.css";

//INTERNAL IMPORT
import { Bgdrawn, NavBar } from "../Components/index";
import { SwapTokenContextProvider } from "../Context/SwapContext";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <SwapTokenContextProvider>
      <NavBar />
      <Bgdrawn />
      <Component {...pageProps} />
      <Bgdrawn />
    </SwapTokenContextProvider>
  </div>
);

export default MyApp;

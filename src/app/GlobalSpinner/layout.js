// app/layout.js or _app.js
import { SpinnerProvider } from "@/context/SpinnerContext";
import GlobalSpinner from "@/components/GlobalSpinner";

export default function App({ Component, pageProps }) {
  return (
    <SpinnerProvider>
      <GlobalSpinner show={useSpinner().isLoading} />
      <Component {...pageProps} />
    </SpinnerProvider>
  );
}

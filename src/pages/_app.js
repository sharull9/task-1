import "@/styles/globals.css";
import { Open_Sans, Poppins, Source_Sans_Pro, Roboto } from "@next/font/google";
const os = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const rb = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

const ssp = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const poppin = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${os.className} ${poppin.className} ${ssp.className} ${rb.className}`}
    >
      <Component {...pageProps} />
    </main>
  );
}

import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global';
import { defaultTheme } from '../styles/themes/default';
import { Days_One, Poppins } from "@next/font/google";

const daysOne = Days_One({
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Component
        {...pageProps}
        className={[daysOne.className, poppins.className]}
      />
    </ThemeProvider>
  );
}

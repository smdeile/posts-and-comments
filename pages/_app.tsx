import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import type { AppProps } from 'next/app';
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
    colors: {
        primary: '#0070f3',
    },
};

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Provider store={store}>
                <GlobalStyle />
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </Provider>
        </>
    );
}

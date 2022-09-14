import { theme } from '@/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/dist/shared/lib/router/router';
import NextNProgress from 'nextjs-progressbar';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const MyApp = ({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps) => {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <ChakraProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                <SessionProvider session={session}>
                    <NextNProgress
                        color="#000"
                        options={{ showSpinnner: false }}
                    />
                    <Component {...pageProps} />
                </SessionProvider>
            </QueryClientProvider>
        </ChakraProvider>
    );
};

export default MyApp;

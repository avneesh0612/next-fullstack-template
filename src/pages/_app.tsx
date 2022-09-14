import { theme } from '@/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import { NextSeo } from 'next-seo';
import { AppProps } from 'next/dist/shared/lib/router/router';
import NextNProgress from 'nextjs-progressbar';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const MyApp = ({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps) => {
    const [queryClient] = useState(() => new QueryClient());

    const seoData = {
        title: 'Next.js Fullstack Template',
        url: 'https://next-fullstack-template.vercel.app/',
        description:
            'A fullstack next.js template with all the fun stuff like next auth, mongodb, prisma, chakra ui',
    };

    return (
        <ChakraProvider theme={theme}>
            <NextSeo
                canonical={seoData.url}
                description={seoData.description}
                openGraph={{
                    url: seoData.url,
                    title: seoData.title,
                    description: seoData.description,
                    images: [
                        {
                            url: '/og.png',
                            alt: seoData.title,
                            height: 880,
                            width: 1640,
                            type: 'image/png',
                        },
                    ],
                }}
                title={seoData.title}
            />
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

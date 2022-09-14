import { Box } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

interface ILayoutProps {
    children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
    return (
        <Box
            alignItems="center"
            bgColor="black"
            color="white"
            display="flex"
            flexDir="column"
            justifyContent="center"
            minH="100vh"
            overflowX="hidden"
            textAlign="center"
            w="100vw"
        >
            {children}
        </Box>
    );
};

export default Layout;

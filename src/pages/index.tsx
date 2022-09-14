import Layout from '@/Layouts/Main.layout';
import { useQueryUser } from '@/queries/useQueryUser';
import { Button, Image, Text, VStack } from '@chakra-ui/react';
import { signIn, signOut } from 'next-auth/react';
import { FC } from 'react';

const Home: FC = () => {
    const { data: user } = useQueryUser();

    return (
        <Layout>
            {user ? (
                <VStack>
                    <Image
                        alt={user.name}
                        borderRadius="full"
                        boxSize="100px"
                        src={user.image}
                    />
                    <Text>Email: {user.email}</Text>
                    <Text>Name: {user.name}</Text>
                    <Button
                        bg="blue.900"
                        color="white"
                        onClick={() => signOut()}
                    >
                        Sign out
                    </Button>
                </VStack>
            ) : (
                <Button bg="blue.900" onClick={() => signIn()}>
                    Sign in
                </Button>
            )}
        </Layout>
    );
};

export default Home;

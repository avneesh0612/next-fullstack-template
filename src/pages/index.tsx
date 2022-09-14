import Layout from '@/Layouts/Main.layout';
import { useQueryUser } from '@/queries/useQueryUser';
import { Button, Image, Text, VStack } from '@chakra-ui/react';
import { signIn, signOut } from 'next-auth/react';
import { FC } from 'react';

const Home: FC = () => {
    const { data: user } = useQueryUser();
    console.log(user);

    return (
        <Layout>
            {user ? (
                <VStack>
                    <Image
                        src={user.image}
                        alt={user.name}
                        borderRadius="full"
                        boxSize="100px"
                    />
                    <Text>Email: {user.email}</Text>
                    <Text>Name: {user.name}</Text>
                    <Button
                        onClick={() => signOut()}
                        bg="blue.900"
                        color="white"
                    >
                        Sign out
                    </Button>
                </VStack>
            ) : (
                <Button onClick={() => signIn()} bg="blue.900">
                    Sign in
                </Button>
            )}
        </Layout>
    );
};

export default Home;

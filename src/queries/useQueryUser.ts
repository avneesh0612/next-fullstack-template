import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';

const useQueryUser = () => {
    const session = useSession();
    const queryClient = useQueryClient();
    useEffect(() => {
        if (session.status !== 'authenticated') {
            queryClient.removeQueries('user');
        }
    }, [queryClient, session.status]);

    return useQuery(
        'user',
        async () => {
            const user = await axios.get('/api/user', {
                params: {
                    email: session?.data?.user?.email,
                },
            });
            return user.data;
        },
        {
            enabled: session.status === 'authenticated',
        },
    );
};

export { useQueryUser };

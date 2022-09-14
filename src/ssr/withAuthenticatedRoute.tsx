import { getSession } from 'next-auth/react';

const withAuthenticatedRoute = (next: any) => {
    return async (context: any, parentProps: any) => {
        const session = await getSession(context);

        if (!session || !next) {
            return {
                redirect: {
                    destination: '/',
                    permanent: false,
                },
            };
        }

        const props = {
            ...parentProps,
            session,
        };

        return await next(context, props);
    };
};

export { withAuthenticatedRoute };

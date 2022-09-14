import prisma from './prisma';

export const getAllUsers = async () => {
    const users = await prisma.user.findMany({});
    return users;
};

export const getUser = async ({
    id,
    email,
}: {
    id?: string;
    email?: string;
}) => {
    const user = await prisma.user.findUnique({
        where: email ? { email } : { id },
    });
    return user;
};

export const createUser = async ({ email, name, image }) => {
    const user = await prisma.user.create({
        data: {
            email,
            name,
            image,
        },
    });
    return user;
};

export const updateUser = async (id, updateData) => {
    const user = await prisma.user.update({
        where: {
            id,
        },
        data: {
            ...updateData,
        },
    });
    return user;
};

export const deleteUser = async id => {
    const user = await prisma.user.delete({
        where: {
            id,
        },
    });
    return user;
};

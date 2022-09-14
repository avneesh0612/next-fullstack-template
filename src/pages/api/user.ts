import {
    createUser,
    deleteUser,
    getAllUsers,
    getUser,
    updateUser,
} from '@/prisma/user';

const handler = async (req, res) => {
    try {
        switch (req.method) {
            case 'GET': {
                const { email, id } = req.query;
                if (id || email) {
                    const user = await getUser({ id, email });
                    return res.status(200).json(user);
                }
                const users = await getAllUsers();
                return res.json(users);
            }
            case 'POST': {
                const { email, name, image } = req.body;
                const user = await createUser({
                    email,
                    name,
                    image,
                });

                return res.json(user);
            }
            case 'PUT': {
                const { id, ...updateData } = req.body;
                const user = await updateUser(id, updateData);
                return res.json(user);
            }
            case 'DELETE': {
                const { id } = req.body;
                const user = await deleteUser(id);
                return res.json(user);
            }
            default:
                break;
        }
    } catch (error) {
        return res.status(500).json({ ...error, message: error.message });
    }
};

export default handler;

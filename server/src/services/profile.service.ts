import { db } from "../configs";

export const getUserById = async (id: string) => {
    // TODO: Get user data
    const data = await db.account.findFirst({
        where: { id },
        select: {
            id: true,
            username: true,
            password: true,
            email: true,
            roleId: true,
            role: {
                select: {
                    name: true,
                    code: true,
                },
            },
            userId: true,
            user: {
                select: {
                    firstName: true,
                    lastName: true,
                    address: true,
                    phone: true,
                    departmentId: true,
                    department: {
                        select: {
                            name: true,
                        },
                    },
                    officeId: true,
                    office: {
                        select: {
                            name: true,
                        },
                    },
                    birthday: true,
                    photoUrl: true,
                },
            },
            active: true,
            permission: true,
        },
    });

    return data;
};

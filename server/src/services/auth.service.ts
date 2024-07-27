import { db } from "../configs";
import { isComparePassword } from "../utils";

export const getUserByEmailAndPassword = async (
    email: string,
    password: string
) => {
    // TODO: Get user data
    const data = await db.account.findFirst({
        where: {
            email,
        },
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

    const isComparedPassword = await isComparePassword(
        password,
        data?.password as string
    );

    if (data && !isComparedPassword) {
        return null;
    }

    return data;
};

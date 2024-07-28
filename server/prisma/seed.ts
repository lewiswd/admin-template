import { PrismaClient } from "@prisma/client";

import { hashPassword } from "../src/utils";

const prisma = new PrismaClient();

async function main() {
    const role = await prisma.role.upsert({
        where: { code: "superadmin" },
        update: {},
        create: {
            name: "quản trị viên cấp cao",
            code: "superadmin",
            description:
                "nhóm người dùng cao nhất và có quyền quản trị toàn bộ hệ thống.",
            permission: "",
        },
    });

    const hashPass = await hashPassword("123456a$");

    const superAdminAccount = await prisma.account.upsert({
        where: { email: "contact@vslvn.com.vn" },
        update: {},
        create: {
            email: "contact@vslvn.com.vn",
            username: "admin",
            password: hashPass,
            roleId: role.id,
            permission: "",
        },
    });

    console.log({ role, superAdminAccount });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.log(e);
        await prisma.$disconnect();
        process.exit(1);
    });

import { PrismaClient } from "@prisma/client";

const prismaClientSignleton = () => {
    return new PrismaClient();
};

declare global {
    var db: undefined | ReturnType<typeof prismaClientSignleton>;
}

const db = globalThis.db ?? prismaClientSignleton();

export default db;

if (process.env.NODE_ENV !== "production") globalThis.db = db;

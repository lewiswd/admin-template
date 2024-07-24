import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { TUnknownObjectProps } from "../types";

const saltRounds = 10;

export const hashPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashStr = await bcrypt.hash(password, salt);

    return hashStr;
};

export const isComparePassword = async (
    password: string,
    hashPassword: string
): Promise<boolean> => {
    const isCompare = await bcrypt.compareSync(password, hashPassword);
    return isCompare;
};

export const createToken = (
    payload: TUnknownObjectProps,
    key: string,
    expiration: number
) => {
    const token = jwt.sign(payload, key, {
        expiresIn: expiration,
    });

    return token;
};

export const decodeToken = (token: string) => {
    // Decode the token without verifying it
    return jwt.decode(token, { complete: true });
};

export const isExpiredToken = (token: string) => {
    const decoded = decodeToken(token);

    if (!decoded || !decoded.payload) {
        return true; // Token is invalid or cannot be decoded
    }

    const { exp } = decoded.payload as { exp?: number };

    if (!exp) {
        return true; // Token does not have an expiration claim
    }

    // Check if the token has expired
    return Date.now() >= exp * 1000;
};

export const verifyToken = (token: string, key: string) => {
    const payload = jwt.verify(token, key) || null;
    return payload;
};

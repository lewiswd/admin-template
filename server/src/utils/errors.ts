import { TErrorResponse } from "../types";

export abstract class ApiErrors extends Error {
    constructor(public message: string) {
        super(message);
    }

    abstract statusCode: number;
    abstract description: string;
    abstract serialize(): TErrorResponse;
}

import { TErrorResponse } from "../types";
import { ApiErrors } from "../utils";

export class DatabaseError extends ApiErrors {
    constructor() {
        super("Database crashed. Try again later!");
        Object.setPrototypeOf(this, DatabaseError.prototype);
    }

    statusCode = 500;
    description = "Internal Server Error";
    serialize(): TErrorResponse {
        return {
            status: false,
            statusCode: this.statusCode,
            description: this.description,
            message: this.message,
            errors: {},
        };
    }
}
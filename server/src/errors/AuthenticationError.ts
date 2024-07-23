import { TErrorResponse } from "../types";
import { ApiErrors } from "../utils";

export class AuthenticationError extends ApiErrors {
    constructor() {
        super("User unauthorized!");
        Object.setPrototypeOf(this, AuthenticationError.prototype);
    }

    statusCode = 401;
    description = "Unauthorized";
    serialize(): TErrorResponse {
        return {
            status: false,
            statusCode: this.statusCode,
            description: this.description,
            message:
                "The request has not been applied because the server requires user authentication!",
            errors: {},
        };
    }
}
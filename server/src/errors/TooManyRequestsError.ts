import { TErrorResponse, TUnknownObjectProps } from "../types";
import { ApiErrors } from "../utils";

export class TooManyRequestsError extends ApiErrors {
    constructor(
        public message: string,
        public errors: TUnknownObjectProps = {}
    ) {
        super(message);
        Object.setPrototypeOf(this, TooManyRequestsError.prototype);
    }

    statusCode = 429;
    description = "Too Many Requests";
    serialize(): TErrorResponse {
        return {
            status: false,
            statusCode: this.statusCode,
            description: this.description,
            message: this.message,
            errors: this.errors,
        };
    }
}
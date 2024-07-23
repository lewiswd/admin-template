import { TErrorResponse, TUnknownObjectProps } from "../types";
import { ApiErrors } from "../utils";

export class BadRequestError extends ApiErrors {
    constructor(
        public message: string,
        public errors: TUnknownObjectProps = {}
    ) {
        super(message);
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }

    statusCode = 400;
    description = "Bad Request";
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
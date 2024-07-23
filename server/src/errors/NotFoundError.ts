import { TErrorResponse, TUnknownObjectProps } from "../types";
import { ApiErrors } from "../utils";

export class NotFoundError extends ApiErrors {
    constructor(
        public message: string,
        public errors: TUnknownObjectProps = {}
    ) {
        super(message);
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }

    statusCode = 404;
    description = "Not Found";
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
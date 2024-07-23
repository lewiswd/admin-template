import { TErrorResponse, TUnknownObjectProps } from "../types";
import { ApiErrors } from "../utils";

export class ForbiddenError extends ApiErrors {
    constructor(
        public message: string,
        public errors: TUnknownObjectProps = {}
    ) {
        super(message);
        Object.setPrototypeOf(this, ForbiddenError.prototype);
    }

    statusCode = 403;
    description = "Forbidden";
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
import { TErrorResponse, TUnknownObjectProps } from "../types";
import { ApiErrors } from "../utils";

export class BadGatewayError extends ApiErrors {
    constructor(
        public message: string,
        public errors: TUnknownObjectProps = {}
    ) {
        super(message);
        Object.setPrototypeOf(this, BadGatewayError.prototype);
    }

    statusCode = 502;
    description = "Bad Gateway";
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
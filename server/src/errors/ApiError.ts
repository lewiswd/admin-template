import { TErrorResponse, TUnknownObjectProps } from "../types";
import { ApiErrors } from "../utils";

export class ApiError extends ApiErrors {
    constructor(
        public statusCode: number,
        public description: string,
        public message: string,
        public error: TUnknownObjectProps = {}
    ) {
        super(message);
        Object.setPrototypeOf(this, ApiError.prototype);
    }

    serialize(): TErrorResponse {
        return {
            status: false,
            statusCode: this.statusCode,
            description: this.description,
            message: this.message,
            errors: this.error,
        };
    }
}
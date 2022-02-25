"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.AuthenticationError = exports.ValidationError = exports.ApiError = void 0;
class ApiError extends Error {
    constructor(data, status = 500) {
        super();
        this.data = data;
        this.status = status;
        this.data = data;
        this.status = status;
    }
}
exports.ApiError = ApiError;
class ValidationError extends ApiError {
    constructor(key, message) {
        super({
            key: key,
            message: message,
        }, 422);
    }
}
exports.ValidationError = ValidationError;
class AuthenticationError extends ApiError {
    constructor(message = "Unauthorized Access") {
        super({ message: message }, 401);
    }
}
exports.AuthenticationError = AuthenticationError;
const handler = (err, req, res, next) => {
    console.error(err);
    if (err instanceof ApiError || err instanceof ValidationError) {
        return res.status(err.status).json(err.data);
    }
    res.status(500).json({ message: "Some Error Occurred!" });
};
exports.handler = handler;
//# sourceMappingURL=errors.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorFilter = void 0;
class ErrorFilter {
    screening(data) {
        const log = data.split(" - ");
        return log[1] === "error" ? true : false;
    }
}
exports.ErrorFilter = ErrorFilter;

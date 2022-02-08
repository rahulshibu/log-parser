"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorFilter = void 0;
class FilterData {
    constructor(data) {
        this.data = data;
    }
    screening() {
        return true;
    }
}
class ErrorFilter extends FilterData {
    constructor(data) {
        super(data);
        this.data = data;
    }
    screening() {
        const loglevel = this.data.split(" - ")[1];
        return loglevel === "error" ? true : false;
    }
}
exports.ErrorFilter = ErrorFilter;

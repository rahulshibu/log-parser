"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatter = exports.getArgs = void 0;
const minimist_1 = __importDefault(require("minimist"));
const getArgs = () => {
    return (0, minimist_1.default)(process.argv.slice(2));
};
exports.getArgs = getArgs;
const formatter = (element) => {
    const value = element.split(" - ");
    const log = JSON.parse(value[2]);
    return {
        timestamp: new Date(value[0]).getTime(),
        loglevel: value[1],
        transactionId: log.transactionId,
        err: log.err ? log.err : "",
    };
};
exports.formatter = formatter;

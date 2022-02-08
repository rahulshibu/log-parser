"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const classIO_1 = require("./classIO");
const utils_1 = require("./utils");
function parser() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const args = (0, utils_1.getArgs)();
            if (!args.input || !args.output) {
                throw Error("Input and output required");
            }
            const read = {
                path: args.input,
            };
            const readWriteInstance = new classIO_1.ReadFileWriteJSON(read, args.output);
            yield readWriteInstance.logger();
            console.info(`\n done \n`);
        }
        catch (err) {
            console.error(`\n${err.message}\n`);
        }
    });
}
parser();

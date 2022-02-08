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
exports.ReadFileWriteJSON = void 0;
const classReader_1 = require("./classReader");
const classWriter_1 = require("./classWriter");
const classFilter_1 = require("./classFilter");
const utils_1 = require("./utils");
class ReadFileWriteJSON {
    constructor(reader, outPath) {
        this.reader = reader;
        this.outPath = outPath;
        this.readFromFile = new classReader_1.ReadFromFile(reader.path);
        this.writeJSONFile = new classWriter_1.WriteJSONFile();
        this.errorLogger = new classFilter_1.ErrorFilter();
    }
    logger() {
        return __awaiter(this, void 0, void 0, function* () {
            const read = yield this.readFromFile.readData();
            const preOut = this.preProcessing(read);
            const out = preOut
                .filter((element) => {
                return this.errorLogger.screening(element);
            })
                .map((value) => (0, utils_1.formatter)(value));
            const write = {
                path: this.outPath,
                data: out,
            };
            yield this.writeJSONFile.writeData(write);
        });
    }
    preProcessing(value) {
        return value.split(/\r?\n/);
    }
}
exports.ReadFileWriteJSON = ReadFileWriteJSON;

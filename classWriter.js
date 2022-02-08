"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WriteJSONFile = void 0;
const fs_1 = require("fs");
class WriteJSONFile {
    writeData(writer) {
        return new Promise((resolve, reject) => {
            (0, fs_1.writeFile)(writer.path, JSON.stringify(writer.data, null, 2), (error) => {
                error ? reject(error) : resolve("File written successfully");
            });
        });
    }
}
exports.WriteJSONFile = WriteJSONFile;

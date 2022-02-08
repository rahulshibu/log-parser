"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadFromFile = void 0;
const fs_1 = require("fs");
class ReadFromFile {
    constructor(path) {
        this.path = path;
    }
    readData() {
        return new Promise((resolve, reject) => {
            (0, fs_1.readFile)(this.path, "utf8", (error, data) => {
                error ? reject(error) : resolve(data);
            });
        });
    }
}
exports.ReadFromFile = ReadFromFile;

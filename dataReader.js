"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadFromPath = void 0;
const fs_1 = require("fs");
class ReaderClass {
    constructor(path) {
        this.path = path;
    }
    ReadData() {
        return Promise.resolve("");
    }
}
class ReadFromPath extends ReaderClass {
    constructor(path) {
        super(path);
        this.path = path;
    }
    ReadData() {
        return new Promise((resolve, reject) => {
            (0, fs_1.readFile)(this.path, "utf8", (error, data) => {
                error ? reject(error) : resolve(data);
            });
        });
    }
}
exports.ReadFromPath = ReadFromPath;

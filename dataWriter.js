"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WriteJSONFile = void 0;
const fs_1 = require("fs");
class WriteClass {
    constructor(path, data) {
        this.path = path;
        this.data = data;
    }
    WriteData() {
        return Promise.resolve("");
    }
}
class WriteJSONFile extends WriteClass {
    constructor(path, data) {
        super(path, data);
        this.path = path;
        this.data = data;
    }
    WriteData() {
        return new Promise((resolve, reject) => {
            (0, fs_1.writeFile)(this.path, JSON.stringify(this.data, null, 2), (error) => {
                error ? reject(error) : resolve("File written successfully");
            });
        });
    }
}
exports.WriteJSONFile = WriteJSONFile;

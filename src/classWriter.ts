import { writeFile } from "fs";
import {  Writer } from "./utils";

/**
 * @interface IWriter
 * @method writeData write data to the given out paramter 
 */
interface IWriter {
  writeData(writer: Writer): Promise<string>;
}


/**
 * @class WriteJSONFile class to write data to the json file path
 */
export class WriteJSONFile implements IWriter {
  writeData(writer: Writer): Promise<string> {
    return new Promise((resolve, reject) => {
      writeFile(
        writer.path,
        JSON.stringify(writer.data, null, 2),
        (error: any) => {
          error ? reject(error) : resolve("File written successfully");
        }
      );
    });
  }
}

import { readFile } from "fs";

/**
 * @interface IReader
 * @method readData reads data from the given input 
 */
interface IReader {
  readData(): Promise<string>;
}

/**
 * @class ReadFromFile class to read data from the input file path
 */
export class ReadFromFile implements IReader {
  constructor(protected readonly path: string) {
  }
  readData(): Promise<string> {
    return new Promise((resolve, reject) => {
        readFile(this.path, "utf8", (error: any, data: string) => {
          error ? reject(error) : resolve(data);
        });
      });
  }
}
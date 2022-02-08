import { ReadFromFile } from "./classReader";
import { WriteJSONFile } from "./classWriter";
import { ErrorFilter } from "./classFilter";
import { Reader, Writer, formatter } from "./utils";

/**
 * @interface Logger
 * @method logger method to log data
 */
interface Logger{
    logger(): Promise<void>
}

/**
 * @class ReadFileWriteJSON 
 * Class to Read data from file and write to json file
 */
export class ReadFileWriteJSON implements Logger {
  readFromFile;
  writeJSONFile;
  errorFilter;

  constructor(protected reader: Reader, protected outPath: string) {
    this.readFromFile = new ReadFromFile(reader.path);
    this.writeJSONFile = new WriteJSONFile();
    this.errorFilter = new ErrorFilter();
  }
  async logger(): Promise<void> {
    const read = await this.readFromFile.readData();
    const preOut = this.preProcessing(read);

    const out = preOut
      .filter((element) => {
        return this.errorFilter.screening(element);
      })
      .map((value) => formatter(value));

    const write: Writer = {
      path: this.outPath,
      data: out,
    };
    await this.writeJSONFile.writeData(write);
  }

  private preProcessing(value: string): string[] {
    return value.split(/\r?\n/);
  }
}

import { ReadFileWriteJSON } from "./../src/classIO";
import { Reader } from "./../src/utils";
import { ErrorFilter } from "./../src/classFilter";
import { ReadFromFile } from "./../src/classReader";
import { WriteJSONFile } from "./../src/classWriter";
jest.mock("./../src/classFilter");
jest.mock("./../src/classReader");
jest.mock("./../src/classWriter");
jest.resetAllMocks();
describe("Class ReadFileWriteJSON", () => {
  it("defines logger()", async () => {
    const reader: Reader = {
      path: "./app",
    };
    const outPath = "./error.json";
    const classInstance = new ReadFileWriteJSON(reader, outPath);
    const dataMock = jest.spyOn(ReadFileWriteJSON.prototype, "logger");
    dataMock.mockImplementation(async () => Promise.resolve());
    expect(typeof classInstance.logger).toBe("function");
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  it("Check if the ReadFileWriteJSON called the class constructor", () => {
    const args = { input: "./app.log", output: "./error.json" };
    const read: Reader = {
      path: args.input,
    };
    new ReadFileWriteJSON(read, args.output);
    expect(ErrorFilter).toHaveBeenCalledTimes(1);
    expect(ReadFromFile).toHaveBeenCalledTimes(1);
    expect(WriteJSONFile).toHaveBeenCalledTimes(1);
  });

  it("Check if the ReadFileWriteJSON return Promise<void> ", async () => {
    const args = { input: "./app.log", output: "./error.json" };
    const read: Reader = {
      path: args.input,
    };

    const mockValue =
      '2021-08-09T02:12:51.253Z - info - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"Service is started"}';
    const readDataMock = jest.spyOn(ReadFromFile.prototype, "readData");
    readDataMock.mockImplementation(async () => Promise.resolve(mockValue));

    const writeDataMock = jest.spyOn(WriteJSONFile.prototype, "writeData");
    writeDataMock.mockImplementation(async (writer) =>
      Promise.resolve("File written successfully")
    );
    const classInstance = new ReadFileWriteJSON(read, args.output);
    await expect(classInstance.logger()).resolves.toBe(undefined);
  });
});

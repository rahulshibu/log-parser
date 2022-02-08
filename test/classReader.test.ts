import { ReadFromFile } from "./../src/classReader";

describe("Class Reader", () => {
  it("defines screening", async () => {
    const mockPath = "./app.log";
    const classInstance = new ReadFromFile(mockPath);
    const readDataMock = jest.spyOn(ReadFromFile.prototype, "readData");
    readDataMock.mockImplementation(async () => Promise.resolve(""));
    expect(typeof classInstance.readData).toBe("function");
  });
  it("readData() return strking", async () => {
    const mockPath = "./app.log";
    const mockValue =
      '2021-08-09T02:12:51.253Z - info - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"Service is started"}';
    const classInstance = new ReadFromFile(mockPath);
    const readDataMock = jest.spyOn(ReadFromFile.prototype, "readData");
    readDataMock.mockImplementation(async () => Promise.resolve(mockValue));
    await expect(classInstance.readData()).resolves.toBe(mockValue);
  });
});

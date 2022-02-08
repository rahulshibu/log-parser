import { WriteJSONFile } from "./../src/classWriter";
import { Writer } from "./../src/utils";


describe("Class Writer", () => {
  it("defines writeData()", async () => {
    const mockPath = "./app.log";
    const classInstance = new WriteJSONFile();
    const dataMock = jest.spyOn(WriteJSONFile.prototype, "writeData");
    dataMock.mockImplementation(async () => Promise.resolve(""));
    expect(typeof classInstance.writeData).toBe("function");
  });
  it("writeData() return Promise<string>", async () => {
    const mockPath = "./error.json";
    const mockValue = [{"timestamp":1628475171259,"loglevel":"error","transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","err":"Not found"}]
    const writer:Writer={
        path:mockPath,
        data:mockValue
    }
    const classInstance = new WriteJSONFile();
    const dataMock = jest.spyOn(WriteJSONFile.prototype, "writeData");
    dataMock.mockImplementation(async (writer) => Promise.resolve("File written successfully"));
    await expect(classInstance.writeData(writer)).resolves.toBe('File written successfully');
  });
});

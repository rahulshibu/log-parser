import { ErrorFilter } from "./../src/classFilter";

describe("Class ErrorFilter", () => {
  it("defines screening()", () => {
    const mockValue =
      '2021-08-09T02:12:51.253Z - info - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"Service is started"}';
    const classInstance = new ErrorFilter();
    const screen = classInstance.screening(mockValue);
    expect(typeof classInstance.screening).toBe("function");
  });
  it("screening() return boolean", () => {
    const mockValue =
      '2021-08-09T02:12:51.253Z - info - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"Service is started"}';
    const classInstance = new ErrorFilter();
    const screen = classInstance.screening(mockValue);
    expect(typeof screen).toBe('boolean');
  });
});

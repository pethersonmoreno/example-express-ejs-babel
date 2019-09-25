import { convert } from "./convert";
//const { convert } = require("./convert");

describe("Convert", () => {
    test("should return values multiply with success", () => {
        expect(convert(4, 4)).toBe(16);
    });
});

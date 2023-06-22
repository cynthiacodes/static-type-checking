"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import function from local file
const find_longest_string_1 = __importDefault(require("./find-longest-string"));
test("findLongestString finds the longest string in an array", () => {
    expect(find_longest_string_1.default(["it", "is", "a", "nice", "day"])).toBe("nice");
    expect(find_longest_string_1.default(["why", "hello", "to", "you"])).toBe("hello");
});
test("findLongestString returns the earlier string in cases of joint longest strings", () => {
    expect(find_longest_string_1.default(["brave", "dance"])).toBe("brave");
});

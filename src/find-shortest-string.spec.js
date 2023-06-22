"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import function from local file
const find_shortest_string_1 = __importDefault(require("./find-shortest-string"));
test("findShortestString finds the shortest string in an array", () => {
    expect(find_shortest_string_1.default(["it", "is", "a", "nice", "day"])).toBe("a");
    expect(find_shortest_string_1.default(["why", "hello", "to", "you"])).toBe("to");
});
test("findShortestString returns the earlier string in cases of joint shortest strings", () => {
    expect(find_shortest_string_1.default(["brave", "dance"])).toBe("brave");
});

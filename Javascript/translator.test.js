import mapping from "./mapping.js";
import { getKey, getValue, removeSpaces } from "./translator.js";

describe("getValue() tests", () => {
  it("should have a return", () => {
    expect(getValue("A")).toBeDefined();
  });
  it("should get the same translation for characters", () => {
    expect(getValue("A")).toEqual([".-"]);
  });
  it("should get the same translation for numbers", () => {
    expect(getValue("0")).toStrictEqual(["-----"]);
  });
  it("should get the same translation for symbols", () => {
    expect(getValue(".")).toStrictEqual([".-.-.-"]);
  });
  it("should get the same translation for symbols", () => {
    expect(getValue(".")).toStrictEqual([".-.-.-"]);
  });
  it("should get 🤷 if no value is found", () => {
    expect(getValue("`")).toStrictEqual(["🤷"]);
  });
});

describe("getKey() tests", () => {
  it("should have a return", () => {
    expect(getKey(mapping, ".-")).toBeDefined();
  });
  it("should return the correct key", () => {
    expect(getKey(mapping, ".-")).toBe("A");
  });
  it("should return the correct key", () => {
    expect(getKey(mapping, "/")).toBe(" ");
  });
});

describe("removeSpaces() tests", () => {
  it("should have a return", () => {
    expect(removeSpaces([" ", " ", " ", " A"])).toBeDefined();
  });
  it("should return only one space", () => {
    expect(removeSpaces([" ", " ", " ", " A"])).toBe(" A");
  });
});
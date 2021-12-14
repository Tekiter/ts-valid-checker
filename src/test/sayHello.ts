import { sayHello } from "..";

describe("say hello", () => {
  it("should say name", () => {
    expect(sayHello({ name: "zxcv" })).toContain("zxcv");
  });
});

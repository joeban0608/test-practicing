const googleSearch = require("./script");

MockDb = ["dog.com", "cheese_puff.com", "disney.com", "dog_pictures.com"];

describe("googleSearch", () => {
  it("this is a simply test", () => {
    expect("hello").toBe("hello");
  });

  it("this is searching google test", () => {
    expect(googleSearch("testest", MockDb)).toEqual([]);
    expect(googleSearch("dog", MockDb)).toEqual([
      "dog.com",
      "dog_pictures.com",
    ]);
  });

  it("work with undefined and null", () => {
    expect(googleSearch(undefined, MockDb)).toEqual([]);
    expect(googleSearch(null, MockDb)).toEqual([]);
  });

  it("does not return more than 3 matches", () => {
    expect(googleSearch(".com", MockDb).length).toEqual(3);
    // expect(googleSearch('.com', MockDb).length).toEqual(4)
  });
});

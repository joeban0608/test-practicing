const fetch = require("node-fetch");
const starWorldApi = require("./script_async");
const { getPeopleFetch, getPeopleAsync } = starWorldApi;

it("calls starWorldApi to get people with async", (done) => {
  expect.assertions(1);
  try {
    getPeopleAsync(fetch).then((data) => {
      expect(data.count).toEqual(87);
      done();
    });
  } catch (err) {
    console.log("get people with async err:", err);
    done.fail(err);
  }
});

it("calls starWorldApi to get people with fetch", () => {
  expect.assertions(2);
  try {
    return getPeopleFetch(fetch).then((data) => {
      expect(data.count).toEqual(87);
      expect(data.results.length).toBeGreaterThan(5);
    });
  } catch (err) {
    console.log("get people with fetch err:", err);
  }
});

it("get people returns count and results by mockFetch", () => {
  const mockFetch = jest.fn().mockReturnValue(
    Promise.resolve({
      json: () =>
        Promise.resolve({
          count: 87,
          results: [0, 1, 2, 3, 4, 5],
        }),
    })
  );
  expect.assertions(4);
  try {
    return getPeopleFetch(mockFetch).then((data) => {
      expect(mockFetch.mock.calls.length).toBe(1);
      expect(mockFetch).toBeCalledWith("http://swapi.py4e.com/api/people");
      expect(data.count).toEqual(87);
      expect(data.results.length).toBeGreaterThan(5);
    });
  } catch (err) {
    console.log("get people with fetch by mockFetch err:", err);
  }
});

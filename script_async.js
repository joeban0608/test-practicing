const fetch = require("node-fetch");

const getPeopleFetch = (fetch) => {
  return fetch("http://swapi.py4e.com/api/people")
    .then((response) => response.json())
    .then((data) => {
      return {
        count: data.count,
        results: data.results,
      };
    });
};

const getPeopleAsync = async (fetch) => {
  const getRequest = await fetch("http://swapi.py4e.com/api/people");
  const data = await getRequest.json();
  // console.log("getPeopleAsync", data);
  return {
    count: data.count,
    results: data.results,
  };
};
// getPeopleFetch(fetch);
// getPeopleAsync(fetch);

module.exports = {
  getPeopleFetch,
  getPeopleAsync,
};
